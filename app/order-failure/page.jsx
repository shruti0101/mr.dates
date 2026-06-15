import Link from "next/link";

export default function OrderFailurePage() {
  return (
    <section className="min-h-screen bg-[#FDFBF7] pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-12 shadow-sm border border-[#eee]">
        <h1 className="text-5xl font-bold text-[#b91c1c] mb-6">
          Payment Failed
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Something went wrong while processing your payment. Please try again
          or contact support if the issue persists.
        </p>
        <div className="space-x-4">
          <Link
            href="/checkout"
            className="inline-flex items-center justify-center rounded-full bg-[#6b1f2b] px-8 py-4 text-white hover:bg-black transition"
          >
            Retry Checkout
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[#6b1f2b] px-8 py-4 text-[#6b1f2b] hover:bg-[#f7f1ee] transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
