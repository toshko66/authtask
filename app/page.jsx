import React from 'react';
import Link from 'next/link';

import { RedirectToSignUp, } from "@clerk/nextjs";

function LandingPage() {
  return (
    <div className="font-sans text-gray-900 antialiased">
      <section className="bg-gray-100">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Welcome to Brand</h2>
          <p className="mt-3 text-gray-600">Creating solutions for your needs!</p>
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            <Link href="sign-up">
              Get Started
            </Link>
          </button>
        </div>
      </section>

      <section id="features" className="container mx-auto px-6 py-20">
        <h3 className="text-2xl font-bold text-center">Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded shadow p-6">
            <h4 className="font-bold text-lg">Feature One</h4>
            <p className="text-sm text-gray-600 mt-2">Description of feature one.</p>
          </div>
          <div className="bg-white rounded shadow p-6">
            <h4 className="font-bold text-lg">Feature Two</h4>
            <p className="text-sm text-gray-600 mt-2">Description of feature two.</p>
          </div>
          <div className="bg-white rounded shadow p-6">
            <h4 className="font-bold text-lg">Feature Three</h4>
            <p className="text-sm text-gray-600 mt-2">Description of feature three.</p>
          </div>
        </div>
      </section>


      <section id="testimonials" className="bg-gray-100">
        <div className="container mx-auto px-6 py-20">
          <h3 className="text-2xl font-bold text-center">What our customers say</h3>
          <div className="mt-6 space-y-4">
            <blockquote className="text-gray-600 italic">&quot;Great product, and excellent support!&quot;</blockquote>
            <blockquote className="text-gray-600 italic">&quot;I really appreciate the attention to detail.&quot;</blockquote>
          </div>
        </div>
      </section>


      <footer className="bg-white">
        <div className="container mx-auto px-6 py-4">
          <p className="text-gray-700 text-center">© 2024 Todor Velichkov. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
