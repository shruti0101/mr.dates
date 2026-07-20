"use client";

import Link from "next/link";
import Image from "next/image";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function CartDrawer({ open, setOpen }) {
  const cart = useCartStore((state) => state.cart);

  console.log(cart)

  const removeFromCart = useCartStore(  
    (state) => state.removeFromCart
  );

  const updateQuantity = useCartStore(
    (state) => state.updateQuantity
  );

  const totalPrice = cart.reduce((acc, item) => {
    const price =
      Number(
        String(item.price).replace(/[^\d]/g, "")
      ) || 0;

    return acc + price * item.quantity;
  }, 0);

  return (
    <>
      
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 z-[999] transition-opacity duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-[1000] shadow-2xl transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between border-b px-6 py-5">
          <h2 className="text-2xl font-semibold">
            Shopping Cart
          </h2>

          <button onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* CART ITEMS */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-semibold">
                Your cart is empty
              </h3>

              <p className="text-gray-500 mt-2">
                Add some products to continue shopping
              </p>


<Link href="/products">


              <button
                onClick={() => setOpen(false)}
                className="mt-6 bg-black text-white px-6 py-3 rounded-xl"
              >
                Continue Shopping
              </button>
</Link>
            </div>
          ) : (
            <div className="space-y-5">
              {cart.map((item, index) => (

                
                <div
                  key={index}
                  className="flex gap-4 border-b pb-5"
                >
          
                  {/* IMAGE */}
             <div className="w-28 h-28 relative rounded-xl overflow-hidden bg-gray-100 shrink-0">
  <Image
    src={typeof item.image === "object" ? item.image.src : item.image}
    alt={
      typeof item.image === "object"
        ? item.image.alt
        : item.name
    }
    fill
    className="object-cover"
  />
</div>

                  {/* CONTENT */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">
                      {item.name}
                    </h3>

               {item?.pack && (
  <p className="text-sm text-gray-500 mt-1">
    Pack:{" "}
    {typeof item.pack === "object"
      ? `${item.pack.type ?? ""} ${item.pack.weight ?? ""}`
      : item.pack}
  </p>
)}

                    <p className="text-[#072143] font-bold text-lg mt-2">
                      Rs. {item.price} /-
                    </p>

                    {/* QUANTITY */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3 border rounded-lg px-3 py-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.pack?.weight,
                              "dec"
                            )
                          }
                        >
                          <Minus size={16} />
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.pack?.weight,
                              "inc"
                            )
                          }
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* REMOVE */}
                      <button
                        onClick={() =>
                          removeFromCart(
                            item.id,
                            item.pack?.weight
                          )
                        }
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FOOTER */}
        {cart.length > 0 && (
          <div className="border-t px-6 py-5 space-y-4">
            <div className="flex items-center justify-between text-xl font-semibold">
              <span>Total</span>

              <span>₹{totalPrice}</span>
            </div>

            <Link
              href="/checkout"
              onClick={() => setOpen(false)}
              className="w-full bg-black text-white py-4 rounded-xl flex items-center justify-center text-lg hover:bg-[#072143] transition"
            >
              Proceed To Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}