import React from "react";

export default function PaymentCard() {
  return (
    <div className="w-full border px-6 py-8 lg:basis-2/5">
      <form className="space-y-8">
        <div className="space-y-4">
          <div className="w-full border p-4">
            <select className="w-full outline-none">
              <option>Nigeria</option>
              <option>Nigeria</option>
              <option>Nigeria</option>
              <option>Nigeria</option>
              <option>Nigeria</option>
              <option>Nigeria</option>
              <option>Nigeria</option>
            </select>
          </div>
          <div className="flex items-center gap-x-4">
            <input
              type="text"
              placeholder="First name"
              className="w-1/2 border p-4"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 border p-4"
            />
          </div>
          <input
            type="text"
            placeholder="Address"
            className="w-full border p-4"
          />
          <div className="flex items-center gap-x-4">
            <input
              type="text"
              placeholder="City"
              className="w-1/2 border p-4"
            />
            <input
              type="text"
              placeholder="Postal code"
              className="w-1/2 border p-4"
            />
          </div>
        </div>

        <button className="w-full bg-primary py-4 font-semibold text-white">
          Pay $100 via Stripe
        </button>
      </form>
    </div>
  );
}
