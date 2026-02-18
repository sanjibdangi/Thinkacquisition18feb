import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function Resources() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2B4A9D] via-[#1E3A8A] to-[#162E6B] py-16 md:py-20">
        {/* Yellow top border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#FDB913]" />
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6 uppercase tracking-wide">
            Resources
          </h1>
          <p className="text-base md:text-lg text-white/90">
            Hear what William has to say about acquisition, leadership, mindset, and more
          </p>
        </div>
      </section>

      {/* Talking Acquisition Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Text Content */}
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-[#1E3A8A] mb-2 uppercase tracking-wider">
    Talking Acquisition
  </h2>

  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#FDB913] mb-4 md:mb-6 uppercase">
    Long-Seasoned Pros Break Down What's Going on in the Acquisition World
  </h3>

  <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
    William and his co-host Jarrod Carter have over 70 years of combined
    experience in acquisition within the federal government. Join them as
    they discuss everything from current trends to the nitty-gritty of
    contracting careers to how to manage up when working in a federal agency.
  </p>

  <a
    href="https://www.youtube.com/@talkingacquisition7838"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#2563EB] transition-all transform hover:scale-105"
  >
    Subscribe on YouTube
  </a>
            </div>

            {/* Right - Video Embed */}
            <div>
  <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/rdJ38az0U0A?start=47"
      title="Talking Acquisition - Episode 31"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* William's World Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

      {/* Left - Text Content */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-[#1E3A8A] mb-2 uppercase tracking-wider">
          William's World
        </h2>

        <h3 className="text-2xl sm:text-3xl font-black text-[#FDB913] mb-4 md:mb-6 uppercase">
          Bite-Sized Lessons for Acquisition Pros
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
          In these videos, William breaks out his trusty whiteboard and diy-esque
          markers to teach short, easy-to-digest lessons on soft skills, the
          acquisition process, and mindset.
        </p>

        {/* ✅ WORKING YOUTUBE SUBSCRIBE BUTTON */}
        <a
          href="https://www.youtube.com/@talkingacquisition7838"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#2563EB] transition-all transform hover:scale-105"
        >
          Subscribe on YouTube
        </a>
      </div>

      {/* Right - Video Embed */}
      <div>
  <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/a24KI7Jdg1g"
      title="William's World"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>


    </div>
  </div>
</section>


      {/* Yellow Divider */}
      <div className="h-2 bg-[#FDB913]" />

      {/* CTA Section with Logo */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 md:mb-8">
            <img 
  src="/logo.png"
  alt="Think Acquisition"
  className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto"
  style={{ imageRendering: 'crisp-edges' }}
/>

          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6">
            Ready to <span className="text-[#FDB913]">Transform</span> Your Team?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed">
            Let's discuss how Think Acquisition can help your agency achieve acquisition excellence.
          </p>
          
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#FDB913] text-[#1E3A8A] px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-professional-xl"
          >
            Contact Us <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}