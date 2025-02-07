"use client"

import { useState } from "react"

const HostingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(2) // Index 2 is "Will Receive Support" question

  const faqs = [
    {
      question: "What Is Web Hosting And Why Is It Important?",
      answer: "",
    },
    {
      question: "How to Purchase a Hosting Plan?",
      answer: "",
    },
    {
      question: "Will Receive Support for My Web Hosting?",
      answer: (
        <div className="space-y-4">
          <p>
            Hostinger stands out among web hosting providers by offering 24/7 multilingual support. Rest assured, you
            will receive the assistance you need. Hostinger's Customer Success team, comprising dedicated experts, will
            go above and beyond to promptly resolve your queries.
          </p>
          <p>
            Should you need any assistance, feel free to reach out through{" "}
            <a href="#" className="text-blue-600 underline hover:text-blue-800">
              live chat
            </a>
            .
          </p>
          <p>
            Additionally, we offer an extensive collection of{" "}
            <a href="#" className="text-blue-600 underline hover:text-blue-800">
              Hostinger Tutorials
            </a>{" "}
            that encompasses website troubleshooting, search engine optimisation, eCommerce tips, and more. You can also
            explore{" "}
            <a href="#" className="text-blue-600 underline hover:text-blue-800">
              Hostinger Academy
            </a>{" "}
            for user-friendly video tutorials.
          </p>
        </div>
      ),
    },
    {
      question: "How Can I Buy Hosting and domain?",
      answer: "",
    },
    {
      question: "What Differentiates Website Hosting and Domain services?",
      answer: "",
    },
    {
      question: "What Are the CPU, RAM, Inode and Disk Limits of Managed Hostinger Plans?",
      answer: "",
    },
  ]

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Web hosting FAQs</h2>
          <p className="text-gray-600">
            Discover answers to the most frequently asked questions about web server hosting.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="p-4 bg-white border-t border-gray-200">
                  <div className="text-gray-600">{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HostingFAQ

