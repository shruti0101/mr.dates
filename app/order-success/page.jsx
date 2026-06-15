import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <section className="min-h-screen bg-[#FDFBF7] pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-12 shadow-sm border border-[#eee]">
        <h1 className="text-5xl font-bold text-[#6b1f2b] mb-6">
          Thank you for your order!
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Your payment was successful and your order has been placed. We will
          begin processing it right away.
        </p>
        <div className="space-x-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#6b1f2b] px-8 py-4 text-white hover:bg-black transition"
          >
            Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full border border-[#6b1f2b] px-8 py-4 text-[#6b1f2b] hover:bg-[#f7f1ee] transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}
