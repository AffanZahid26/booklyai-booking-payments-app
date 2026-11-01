export const TAB_BAR_HEIGHT = 64;
export const TAB_BAR_MARGIN = 12;

/** Extra scroll padding so content clears the floating tab bar */
export function tabContentPadding(bottomInset: number): number {
  return TAB_BAR_HEIGHT + Math.max(bottomInset, 8) + TAB_BAR_MARGIN + 40;
}
