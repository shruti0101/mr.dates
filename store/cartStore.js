// store/cartStore.js

import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],
  wishlist: [],

  //  CART 

  addToCart: (product, quantity = 1, selectedPack = null) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: selectedPack?.price || product.price,
      quantity,
      pack: selectedPack,
    };

    const existing = get().cart.find(
      (item) =>
        item.id === cartItem.id &&
        item.pack?.weight === cartItem.pack?.weight
    );

    let updatedCart;

    if (existing) {
      updatedCart = get().cart.map((item) =>
        item.id === cartItem.id &&
        item.pack?.weight === cartItem.pack?.weight
          ? {
              ...item,
              quantity: item.quantity + quantity,
            }
          : item
      );
      
    } else {
      updatedCart = [...get().cart, cartItem];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    set({ cart: updatedCart });
  },

  removeFromCart: (id, weight) => {
    const updatedCart = get().cart.filter(
      (item) =>
        !(
          item.id === id &&
          item.pack?.weight === weight
        )
    );

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    set({ cart: updatedCart });
  },

  updateQuantity: (id, weight, type) => {
    const updatedCart = get().cart.map((item) => {
      if (
        item.id === id &&
        item.pack?.weight === weight
      ) {
        return {
          ...item,
          quantity:
            type === "inc"
              ? item.quantity + 1
              : Math.max(1, item.quantity - 1),
        };
      }

      return item;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    set({ cart: updatedCart });
  },

  clearCart: () => {
    localStorage.removeItem("cart");
    set({ cart: [] });
  },

  // ================= WISHLIST =================

  addToWishlist: (product, selectedPack = null) => {
    const wishlistItem = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: selectedPack?.price || product.price,
      pack: selectedPack,
    };

    const exists = get().wishlist.find(
      (item) =>
        item.id === wishlistItem.id &&
        item.pack?.weight === wishlistItem.pack?.weight
    );

    if (exists) return;

    const updatedWishlist = [
      ...get().wishlist,
      wishlistItem,
    ];

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    set({ wishlist: updatedWishlist });
  },

  removeFromWishlist: (id, weight) => {
    const updatedWishlist = get().wishlist.filter(
      (item) =>
        !(
          item.id === id &&
          item.pack?.weight === weight
        )
    );

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    set({ wishlist: updatedWishlist });
  },

  // ================= LOAD STORAGE =================

  loadStorageData: () => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    set({
      cart,
      wishlist,
    });
  },
}));