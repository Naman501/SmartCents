// import React from "react";

// function Upgrade() {
//   return (
//     <div className="">
//       <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
//           <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12">
//             <div className="text-center">
//               <h2 className="text-lg font-medium text-gray-900">
//                 Pro
//                 <span className="sr-only">Plan</span>
//               </h2>

//               <p className="mt-2 sm:mt-4">
//                 <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
//                   {" "}
//                   30${" "}
//                 </strong>

//                 <span className="text-sm font-medium text-gray-700">
//                   /month
//                 </span>
//               </p>
//             </div>

//             <ul className="mt-6 space-y-2">
//               <li className="flex items-center gap-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="size-5 text-indigo-700"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4.5 12.75l6 6 9-13.5"
//                   />
//                 </svg>

//                 <span className="text-gray-700"> 20 users included </span>
//               </li>

//               <li className="flex items-center gap-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="size-5 text-indigo-700"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4.5 12.75l6 6 9-13.5"
//                   />
//                 </svg>

//                 <span className="text-gray-700"> 5GB of storage </span>
//               </li>

//               <li className="flex items-center gap-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="size-5 text-indigo-700"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4.5 12.75l6 6 9-13.5"
//                   />
//                 </svg>

//                 <span className="text-gray-700"> Email support </span>
//               </li>

//               <li className="flex items-center gap-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="size-5 text-indigo-700"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4.5 12.75l6 6 9-13.5"
//                   />
//                 </svg>

//                 <span className="text-gray-700"> Help center access </span>
//               </li>

//               <li className="flex items-center gap-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="size-5 text-indigo-700"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4.5 12.75l6 6 9-13.5"
//                   />
//                 </svg>

//                 <span className="text-gray-700"> Phone support </span>
//               </li>

//               <li className="flex items-center gap-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="size-5 text-indigo-700"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4.5 12.75l6 6 9-13.5"
//                   />
//                 </svg>

//                 <span className="text-gray-700"> Community access </span>
//               </li>
//             </ul>

//             <a
//               href="#"
//               className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
//             >
//               Get Started
//             </a>
//           </div>

//           <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
//             <div className="text-center">
//               <h2 className="text-lg font-medium text-gray-900">
//                 Starter
//                 <span className="sr-only">Plan</span>
//               </h2>

//               <p className="mt-2 sm:mt-4">
//                 <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
//                   {" "}
//                   20${" "}
//                 </strong>

//                 <span className="text-sm font-medium text-gray-700">
//                   /month
//                 </span>
//               </p>
//             </div>

//             <ul className="mt-6 space-y-2">
//               <li className="flex items-center gap-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="size-5 text-indigo-700"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4.5 12.75l6 6 9-13.5"
//                   />
//                 </svg>

//                 <span className="text-gray-700"> 10 users included </span>
//               </li>

//               <li className="flex items-center gap-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="size-5 text-indigo-700"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4.5 12.75l6 6 9-13.5"
//                   />
//                 </svg>

//                 <span className="text-gray-700"> 2GB of storage </span>
//               </li>

//               <li className="flex items-center gap-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="size-5 text-indigo-700"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4.5 12.75l6 6 9-13.5"
//                   />
//                 </svg>

//                 <span className="text-gray-700"> Email support </span>
//               </li>

//               <li className="flex items-center gap-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="size-5 text-indigo-700"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4.5 12.75l6 6 9-13.5"
//                   />
//                 </svg>

//                 <span className="text-gray-700"> Help center access </span>
//               </li>
//             </ul>

//             <a
//               href="#"
//               className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
//             >
//               Get Started
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Upgrade;

"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "₹499",
    description: "Great for individuals getting started.",
    features: [
      "10 users included",
      "2GB of storage",
      "Email support",
      "Help center access",
    ],
    isPopular: false,
  },
  {
    name: "Pro",
    price: "₹999",
    description: "Perfect for growing teams and pros.",
    features: [
      "20 users included",
      "5GB of storage",
      "Priority support",
      "Community access",
      "Team collaboration",
    ],
    isPopular: true,
  },
];

const proBenefits = [
  {
    title: "Advanced Analytics",
    desc: "Track your usage and performance in real-time.",
  },
  {
    title: "Priority Support",
    desc: "Faster resolution with dedicated support.",
  },
  {
    title: "Bank-Grade Security",
    desc: "Your data is protected with encryption & secure access.",
  },
  {
    title: "Custom Integrations",
    desc: "Plug in your favorite tools & streamline workflows.",
  },
];

export default function UpgradePage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-20 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Upgrade Your Experience</h1>
        <p className="text-gray-600 text-lg">Simple pricing. No hidden fees. Pay in ₹ INR.</p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 border shadow-sm transition hover:shadow-lg ${
              plan.isPopular ? "border-purple-600 ring-2 ring-purple-100" : ""
            }`}
          >
            {plan.isPopular && (
              <p className="text-sm text-purple-600 font-semibold mb-2">Most Popular</p>
            )}
            <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-gray-500 mb-4">{plan.description}</p>
            <div className="text-4xl font-bold text-purple-700 mb-6">
              {plan.price}
              <span className="text-base font-medium text-gray-600"> /month</span>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                  <CheckCircle className="text-purple-600 w-5 h-5 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full cursor-pointer py-2 rounded-full font-medium text-white ${
                plan.isPopular 
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-gray-800 hover:bg-gray-900"
                  
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* Why Go Pro Section */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-10">Why Go Pro?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {proBenefits.map((benefit, i) => (
            <div
              key={i}
              className="p-6 border border-gray-200 rounded-xl bg-white hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
