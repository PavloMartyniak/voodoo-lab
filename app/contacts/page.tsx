"use client";

import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Get in Touch</h1>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Contact Form */}
        <form className="grid gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              placeholder="Write your message"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              rows={5}
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 focus:outline-none"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default page;
