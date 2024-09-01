import { create } from "zustand";

const useCartStore = create((set) => ({
  carts: [
    {
      id: 1,
      productId: 2,
      quantity: 3,
    },
    {
      id: 6,
      productId: 7,
      quantity: 1,
    },
  ],
  addCart: (newCart) => set((state) => ({ carts: [...state.carts, newCart] })),

  increaseQuantity: (quantityId) =>
    set((state) => ({
      carts: state.carts.map((el) =>
        el.id === quantityId ? { ...el, quantity: el.quantity + 1 } : el
      ),
    })),

  decreaseQuantity: (quantityId) =>
    set((state) => ({
      carts: state.carts.map((el) =>
        el.id === quantityId ? { ...el, quantity: el.quantity - 1 } : el
      ),
    })),

  removeCart: (cartId) =>
    set((state) => ({ carts: state.carts.filter((el) => el.id !== cartId) })),
}));

export default useCartStore;
