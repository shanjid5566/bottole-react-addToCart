// const getStoredCard = () => {
//   const storedCardString = localStorage.getItem("cart");
//   if (storedCardString) {
//     return JSON.parse(storedCardString);
//   }
// };
// const addToLs = id =>{
//     const cart = getStoredCard();
//     cart.push(id);
//     saveCartLs(cart)
// }
// const saveCartLs = cart =>{
//     const cartSrtingfy = JSON.stringify(cart);
//     localStorage.setItem("cart",cartSrtingfy)
// }
// const getStoredCard = () => {
//   const storedCardString = localStorage.getItem("cart");
//   if (storedCardString) {
//     return JSON.parse(storedCardString);
//   }
// };

// const addToLs = (id) => {
//   const cart = getStoredCard();
//   cart.push(id);
//   saveCartLs(cart);
// };

// const saveCartLs = (cart) => {
//   const cartSrtingfy = JSON.stringify(cart);
//   localStorage.setItem("cart", cartSrtingfy);
// };

const getStoredCard = () => {
  const storedCardString = localStorage.getItem("cart");
  if (storedCardString) {
    return JSON.parse(storedCardString);
  }
  return [];
};

const addToLs = (id) => {
  const cart = getStoredCard();
  cart.push(id);
  saveCartLs(cart);
};

const removeFromLs = (id) => {
  const cart = getStoredCard();
  const remaing = cart.filter((idx) => idx !== id);
  saveCartLs(remaing);
};

const saveCartLs = (cart) => {
  const cartSrtingfy = JSON.stringify(cart);
  localStorage.setItem("cart", cartSrtingfy);
};
export { addToLs, getStoredCard, removeFromLs };
