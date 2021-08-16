/**
 * Looks through cartItems to match ID of item and prevents duplicate
 * if exist, increase QTY else add to array.
 * @param {Array} cartItems Array to insert the item
 * @param {Object} item Look for ID and add item or increase QTY.
 * @returns Array
 */
export const addItemToCart = (cartItems, item) => {
  const foundItem = cartItems.find((c) => c.id === item.id);
  if (!foundItem) {
    return [
      ...cartItems,
      {
        ...item,
        qty: 1,
      },
    ];
  }
  return cartItems.map((c) =>
    c.id === item.id ? { ...c, qty: c.qty + 1 } : c
  );
};
