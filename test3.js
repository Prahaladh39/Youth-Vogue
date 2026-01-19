/**
 * Calculates the final order total after applying tax, discounts, and coupons.
 */
function calculateOrderTotal(items, options = {}) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("Items array is required");
  }

  const taxRate = options.taxRate ?? 0.18;
  const coupon = options.coupon ?? null;

  let subtotal = 0;

  for (const item of items) {
    if (!item.price || !item.quantity) {
      continue;
    }
    subtotal += item.price * item.quantity;
  }

  let discount = 0;

  if (coupon) {
    if (coupon.type === "FLAT") {
      discount = coupon.value;
    } else if (coupon.type === "PERCENT") {
      discount = subtotal * (coupon.value / 100);
    }
  }

  const taxedAmount = (subtotal - discount) * taxRate;
  const total = subtotal - discount + taxedAmount;

  return Math.max(total, 0);
}

export default calculateOrderTotal;
