import { Link } from 'react-router';
import { Lightbulb, ArrowRight, Play } from 'lucide-react';

export function BusinessDevelopment() {
  return (
    <div className="bg-white">
      {/* Hero Section - Compact Split Design */}
      <section className="relative grid lg:grid-cols-2 min-h-[260px] md:min-h-[300px]">

  {/* LEFT SIDE — BLUE */}
  <div className="relative bg-gradient-to-br from-[#1E3A8A] via-[#2B4A9D] to-[#3A5AB0] flex items-center px-8 md:px-12 lg:px-16">

    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>

    {/* LEFT TEXT — slightly bigger */}
    <div className="relative z-10 text-white max-w-md">
      <p className="text-base md:text-lg font-semibold tracking-[0.2em] uppercase leading-snug">
        Expert, Data-Based Guidance on the Contracting Process
      </p>
    </div>
  </div>

  {/* RIGHT SIDE — LIGHT GREY */}
  <div className="bg-[#F3F4F6] flex items-center px-8 md:px-12 lg:px-16">

    <div className="max-w-lg">
      {/* RIGHT TITLE — reduced size */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1E3A8A] leading-[1.1]">
        Industry Training & <br />
        Business Development
      </h1>
    </div>

  </div>
</section>


      {/* Yellow Divider */}
      <div className="h-2 bg-[#FDB913]" />

      {/* For Government Contractors Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Icon */}
          <div className="flex justify-center mb-6 md:mb-8">
            {/* ===== BULB LOGO (WITH BUILT-IN LINES) ===== */}
      <div className="flex justify-center mb-6">
        <img
          src="/bulb.png"
          alt="Idea Bulb"
          className="w-36 md:w-44 lg:w-52 object-contain"
        />
      </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1E3A8A] text-center mb-6 md:mb-8">
            For Government Contractors
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl mx-auto text-base md:text-lg">
            <p>
              Landing a government contract could catapult your business to a new level of success. But even though your company delivers top-notch goods or services, it's challenging to know which agencies will likely need what you're offering.
            </p>

            <p>
              Using in-depth analysis, we help you identify which agencies are the best potential fits for your business so you can strategize your outreach. Then, we'll familiarize you with their buying process and ensure you know which decision-makers to contact and how to engage with them successfully.
            </p>

            <p>
              The team at Think Acquisition has handled billions of dollars in federal procurement contracts. In other words, we know what's required to land a lucrative government contract.
            </p>
          </div>
        </div>
      </section>

     {/* WATCH Section */}
<section className="py-16 md:py-20 bg-gradient-to-br from-[#2B4A9D] via-[#1E3A8A] to-[#162E6B]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white text-center mb-8 md:mb-12 uppercase tracking-wide">
      Watch
    </h2>

    <div className="grid md:grid-cols-2 gap-6 md:gap-8">

      {/* Video 1 */}
      <a
        href="https://www.linkedin.com/feed/update/urn:li:activity:7028486035957280768/"
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="/videos-1.png"
            alt="Video Thumbnail"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
            <div className="bg-white rounded-full p-6 group-hover:scale-110 transition-transform shadow-xl">
              <Play className="text-[#1E3A8A] fill-[#1E3A8A]" size={40} />
            </div>
          </div>
          <div className="absolute top-0 left-0 right-0 bg-[#FDB913] py-2 px-4">
            <p className="text-[#1E3A8A] font-bold text-sm uppercase text-center">
              Your Customers Can't Unsee You
            </p>
          </div>
        </div>
      </a>

      {/* Video 2 */}
      <a
        href="https://www.linkedin.com/feed/update/urn:li:activity:7031638628455874560/"
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="/video-2.png"
            alt="Video Thumbnail"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
            <div className="bg-white rounded-full p-6 group-hover:scale-110 transition-transform shadow-xl">
              <Play className="text-[#1E3A8A] fill-[#1E3A8A]" size={40} />
            </div>
          </div>
          <div className="absolute top-0 left-0 right-0 bg-[#FDB913] py-2 px-4">
            <p className="text-[#1E3A8A] font-bold text-sm uppercase text-center">
              The Wednesday Word: Interesting
            </p>
          </div>
        </div>
      </a>

      {/* Video 3 */}
      <a
        href="https://www.linkedin.com/feed/update/urn:li:activity:7029110790221615105/"
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="/videos3.png"
            alt="Video Thumbnail"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
            <div className="bg-white rounded-full p-6 group-hover:scale-110 transition-transform shadow-xl">
              <Play className="text-[#1E3A8A] fill-[#1E3A8A]" size={40} />
            </div>
          </div>
          <div className="absolute top-0 left-0 right-0 bg-[#FDB913] py-2 px-4">
            <p className="text-[#1E3A8A] font-bold text-sm uppercase text-center">
              The Wednesday Word: Digest-A-Bility
            </p>
          </div>
        </div>
      </a>

      {/* Video 4 */}
      <a
        href="https://www.linkedin.com/posts/william-randolph-thinkacq_williams-whiteboard-ep-64-the-october-activity-6983048949196587008-Dtd3/"
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="/video04.png"
            alt="Video Thumbnail"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
            <div className="bg-white rounded-full p-6 group-hover:scale-110 transition-transform shadow-xl">
              <Play className="text-[#1E3A8A] fill-[#1E3A8A]" size={40} />
            </div>
          </div>
          <div className="absolute top-0 left-0 right-0 bg-[#FDB913] py-2 px-4">
            <p className="text-[#1E3A8A] font-bold text-sm uppercase text-center">
              William's Whiteboard: October Assist
            </p>
          </div>
        </div>
      </a>

    </div>
  </div>
</section>


      {/* Yellow Divider */}
      <div className="h-2 bg-[#FDB913]" />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* ===== BULB LOGO (WITH BUILT-IN LINES) ===== */}
      <div className="flex justify-center mb-6">
        <img
          src="/bulb.png"
          alt="Idea Bulb"
          className="w-60 md:w-68 lg:w-76 object-contain"
        />
      </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Land More <span className="text-[#FDB913]">Government Contracts?</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Think Acquisition is here to help you put your best foot forward in the work you do best.
          </p>
          
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#FDB913] text-[#1E3A8A] px-10 py-5 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-professional-xl"
          >
            Contact Us <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}