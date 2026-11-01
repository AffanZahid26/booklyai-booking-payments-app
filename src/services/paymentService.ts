import { PROMO_CODES, SERVICE_FEE } from '../constants';
import { initialPayments, paymentMethods } from '../mock/data';
import { PaymentMethod, PaymentTransaction } from '../types';
import { delay, uid } from '../utils/helpers';
import { loadJSON, saveJSON, STORAGE_KEYS } from '../utils/storage';

export interface CheckoutInput {
  amount: number;
  serviceAmount: number;
  discount: number;
  methodId: string;
  providerId: string;
  providerName: string;
  serviceName: string;
  bookingId?: string;
  forceFail?: boolean;
}

export interface CheckoutResult {
  success: boolean;
  transaction?: PaymentTransaction;
  message: string;
}

async function getPayments(): Promise<PaymentTransaction[]> {
  return loadJSON(STORAGE_KEYS.PAYMENTS, initialPayments);
}

export async function getPaymentHistory(): Promise<PaymentTransaction[]> {
  await delay(400);
  return getPayments();
}

export async function getPaymentMethods(): Promise<PaymentMethod[]> {
  await delay(200);
  return paymentMethods;
}

export function calculateTotals(
  serviceAmount: number,
  promoCode?: string,
): {
  service: number;
  fee: number;
  discount: number;
  total: number;
  promoLabel?: string;
} {
  let discount = 0;
  let promoLabel: string | undefined;
  const code = promoCode?.trim().toUpperCase();
  if (code && PROMO_CODES[code]) {
    const promo = PROMO_CODES[code];
    discount =
      promo.type === 'percent'
        ? (serviceAmount * promo.value) / 100
        : promo.value;
    promoLabel = promo.label;
  }
  const fee = SERVICE_FEE;
  const total = Math.max(0, serviceAmount + fee - discount);
  return {
    service: serviceAmount,
    fee,
    discount,
    total: Number(total.toFixed(2)),
    promoLabel,
  };
}

export async function processPayment(
  input: CheckoutInput,
): Promise<CheckoutResult> {
  await delay(1400);
  if (input.forceFail || input.methodId === 'fail') {
    return {
      success: false,
      message:
        "Payment couldn't be completed. Please try another payment method.",
    };
  }
  const method = paymentMethods.find(m => m.id === input.methodId);
  const methodLabel = method
    ? method.last4
      ? `${method.brand} •••• ${method.last4}`
      : method.brand
    : 'Card';
  const transaction: PaymentTransaction = {
    id: `TXN-${849200 + Math.floor(Math.random() * 700)}`,
    bookingId: input.bookingId,
    customerId: 'cus_01',
    customerName: 'Affan',
    providerId: input.providerId,
    providerName: input.providerName,
    serviceName: input.serviceName,
    amount: input.amount,
    status: 'Paid',
    method: methodLabel,
    date: '2026-09-07',
  };
  const all = await getPayments();
  await saveJSON(STORAGE_KEYS.PAYMENTS, [transaction, ...all]);
  return {
    success: true,
    transaction,
    message: 'Payment completed',
  };
}

export async function refundPayment(
  transactionId: string,
): Promise<PaymentTransaction> {
  await delay(800);
  const all = await getPayments();
  const index = all.findIndex(p => p.id === transactionId);
  if (index < 0) {
    throw new Error('Transaction not found.');
  }
  all[index] = { ...all[index], status: 'Refunded' };
  await saveJSON(STORAGE_KEYS.PAYMENTS, all);
  return all[index];
}

export async function addCard(input: {
  name: string;
  number: string;
  expiry: string;
  cvv: string;
}): Promise<PaymentMethod> {
  await delay(600);
  const last4 = input.number.replace(/\s/g, '').slice(-4);
  return {
    id: uid('pm'),
    brand: 'Visa',
    last4,
    isDefault: false,
  };
}
