"use client";
import React, { useState } from 'react';
import { ShieldCheck, MessageSquare, BarChart3, Lock, CheckCircle } from 'lucide-react';

export default function BuySafelyWaitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbziYF5uAeD1Ewlhb556ZDjACjiWviKNnKzpGCbivQuzerXX3BVv3UH2dW6e6oYipfe7_g/exec';

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })
      });

      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#ece5dd] font-sans selection:bg-[#25D366] text-[#075E54]">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/az-subtle.png')` }}></div>

      <nav className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-[#075E54] p-2 rounded-xl shadow-lg">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter">BuySafely.Africa</span>
        </div>
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-12 pb-24 text-center">
        <div className="inline-flex items-center gap-2 bg-[#25D366]/15 px-4 py-2 rounded-full text-sm font-bold mb-8 border border-[#25D366]/30">
          <MessageSquare size={16} />
          <span>Zero Scams. Zero Downloads. Built for WhatsApp.</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-[#075E54]">
          The Trust <span className="text-[#25D366]">Protocol</span> <br /> For African Traders
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          Secure your transactions with cryptographic **PoD tokens**. No new apps—just the WhatsApp you already use to grow your business.
        </p>

        <div className="max-w-lg mx-auto">
          {status === 'success' ? (
            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-[#25D366] flex flex-col items-center">
              <CheckCircle className="text-[#25D366] w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold">You're in the Protocol!</h3>
              <p className="text-gray-600 mt-2">We'll notify you via WhatsApp when we launch.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 rounded-xl focus:outline-none text-gray-800 bg-transparent"
                required
              />
              <button 
                disabled={status === 'loading'}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg min-w-[160px]"
              >
                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          )}
        </div>
      </main>

      <section className="relative z-10 bg-[#075E54] py-24 px-6 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto text-white grid md:grid-cols-3 gap-16">
          <div><Lock className="mb-4 text-[#25D366]" /><h3 className="font-bold text-xl">Secure Protocol</h3><p className="text-gray-300">Funds stay in the vault until you confirm. A layer of trust specifically for African social commerce.</p></div>
          <div><ShieldCheck className="mb-4 text-[#25D366]" /><h3 className="font-bold text-xl">PoD token Verification</h3><p className="text-gray-300">The Proof of Delivery (PoD) token ensures sellers only get paid once the buyer is satisfied.</p></div>
          <div><BarChart3 className="mb-4 text-[#25D366]" /><h3 className="font-bold text-xl">Auto-Bookkeeping</h3><p className="text-gray-300">Every transaction via the Protocol builds your credit score and generates free business reports.</p></div>
        </div>
        <footer className="mt-24 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          © 2026 BuySafely. Africa. Built for the traders of Lagos, Nairobi, and Accra.
        </footer>
      </section>
    </div>
  );
}
