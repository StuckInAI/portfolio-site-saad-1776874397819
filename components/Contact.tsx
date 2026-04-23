'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    { icon: '📧', label: 'Email', value: 'alex@example.com' },
    { icon: '📍', label: 'Location', value: 'San Francisco, CA' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/alexjohnson' },
  ];

  return (
    <section id="contact" className="py-24 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-600 text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl font-bold mt-3 text-gray-900">Get In Touch</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Have a project in mind? I&apos;d love to hear from you. Send me a message and I&apos;ll get back to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: contact info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Let&apos;s work together</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              I&apos;m currently open to freelance projects and full-time opportunities.
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>
            <div className="space-y-4">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-100 border border-yellow-200 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-yellow-600 uppercase tracking-wider">{item.label}</div>
                    <div className="text-gray-800 font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white border border-yellow-200 rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Message Sent!</h3>
                <p className="text-gray-500">Thanks for reaching out. I&apos;ll reply within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-yellow-600 hover:text-yellow-500 text-sm font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-semibold py-3.5 rounded-xl transition-colors duration-200 shadow-lg shadow-yellow-300/40"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
