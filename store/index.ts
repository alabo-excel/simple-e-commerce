import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
  state: () => {
    return {
      cart: [] as Array<{ id: number; name: string; price: number; quantity: number }>,
    };
  },
  getters: {
    totalQuantity: (state) => state.cart.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) => state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
  },
  actions: {
    addToCart(item: { id: number; name: string; price: number; quantity: number; }) {
      const existingItem = this.cart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cart.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(id: number) {
      this.cart = this.cart.filter((item) => item.id !== id);
    },
    updateQuantity(id: number, quantity: number) {
      const item = this.cart.find((cartItem) => cartItem.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
    checkout() {
      // Simulate checkout process (e.g., API call, payment processing)
      console.log("Processing checkout for:", this.cart);
      this.cart = []; // Clear cart after checkout
    },
  },
});
