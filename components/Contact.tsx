'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

function createSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error('Missing Supabase environment variables');
  return createClient(url, key);
}

export default function Contact({ profile }: { profile: any }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createSupabaseClient();
    const { error: supabaseError } = await supabase
      .from('contact_messages')
      .insert([{ name: form.name, email: form.email, message: form.message, read: false }]);

    setLoading(false);

    if (supabaseError) {
      setError('Something went wrong. Please try again.');
      return;
    }

    setSubmitted(true);
  };

  const contactItems = [
    ...(profile?.email ? [{ icon: '📧', label: 'Email', value: profile.email }] : []),
    ...(profile?.location ? [{ icon: '📍', label: 'Location', value: profile.location }] : []),
    ...(profile?.linkedin ? [{ icon: '💼', label: 'LinkedIn', value: profile.linkedin }] : []),
  ];

  return (
    <section id="contact" className="py-24 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-yellow-600 text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl font-bold mt-3 text-gray-900">Get In Touch</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Have a project in mind? I&apos;d love to hear from you. Send me a message and I&apos;ll get back to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Let&apos;s work together</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              {profile?.available_for_work
                ? "I'm currently open to freelance projects and full-time opportunities. Whether you have a question or just want to say hi, my inbox is always open!"
                : "I'm not currently taking on new projects, but feel free to reach out anyway!"}
            </p>
            {contactItems.length > 0 && (
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
            )}
          </div>

          <div className="bg-white border border-yellow-200 rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Message Sent!</h3>
                <p className="text-gray-500">Thanks for reaching out. I&apos;ll reply within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
                  className="mt-6 text-yellow-600 hover:text-yellow-500 text-sm font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                    {error}
                  </div>
                )}
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
                  disabled={loading}
                  className="w-full bg-yellow-400 hover:bg-yellow-300 disabled:opacity-60 text-yellow-900 font-semibold py-3.5 rounded-xl transition-colors duration-200 shadow-lg shadow-yellow-300/40"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
