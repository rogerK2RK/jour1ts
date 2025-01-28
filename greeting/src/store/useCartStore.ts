import { create } from "zustand";

type CartItem = {
  id: string;
  name: string;
  price: number;
};

type CartState = {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}; 

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  addItem: (item) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
    })),
  removeItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
  clearCart: () =>
    set(() => ({
      cartItems: [],
    })),
}));
