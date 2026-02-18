import { Link } from 'react-router';
import { 
  ArrowRight, 
  Award, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  BookOpen,
  Target,
  Zap,
  Shield,
  Star,
  Quote,
  Lightbulb
} from 'lucide-react';

export function HomeNew() {
  return (
    <div className="bg-white">
      {/* Hero Section - Split Design */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E40AF]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white animate-[fadeInUp_0.8s_ease-out]">
              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight">
                THiNK
                <span className="block text-[#FDB913]">ACQUISITION</span>
              </h1>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FDB913] mb-4 md:mb-6">
                EXPERT TRAINING FOR FEDERAL GOVERNMENT EMPLOYEES
              </h2>

              {/* Subheadline */}
              <p className="text-base md:text-lg text-white/90 mb-8 md:mb-10 leading-relaxed">
                We focus on increasing federal government employees' individual effectiveness in acquisition, contracting, leadership, and program management through expert training and coaching.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-10">
                <Link 
                  to="/training"
                  className="btn-primary group bg-[#FDB913] text-[#1E3A8A] px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-yellow-400 hover:shadow-professional-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  See Our Training Catalog
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link 
                  to="/business-development"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white hover:text-[#1E3A8A] transition-all text-center"
                >
                  See Our Capability Statement
                </Link>
              </div>
            </div>

            {/* Right Visual - For Federal Agencies & Contractors */}
            <div className="relative animate-[fadeInUp_1s_ease-out]">
              <div className="space-y-6 md:space-y-8">
                {/* For Federal Agencies Card */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FDB913] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="text-[#1E3A8A]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3">For Federal Agencies:</h3>
                      <p className="text-white/90 leading-relaxed text-sm md:text-base">
                        Training for acquisition teams on leadership, management, procurement, and other workforce development skills.
                      </p>
                    </div>
                  </div>
                </div>

                {/* For Government Contractors Card */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FDB913] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="text-[#1E3A8A]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3">For Government Contractors:</h3>
                      <p className="text-white/90 leading-relaxed text-sm md:text-base">
                        Data-driven business development guidance to identify and engage with the right buyers within federal agencies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl opacity-20" />
            </div>
          </div>
        </div>

        
      </section>

      {/* Trusted By Section - Agency Logos */}
      {/* Trusted By Section - Agency Logos */}
{/* ================= TRUSTED BY SECTION ================= */}
<section className="py-16 bg-gray-50 border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* TITLE */}
    <div className="text-center mb-12">
      <p className="text-gray-600 font-semibold text-sm uppercase tracking-wider">
        Trusted by Leading Federal Agencies
      </p>
    </div>

    {/* LOGO GRID */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">

      {[
        { name: 'NOAA', alt: 'NOAA', logo: '/noaa.png' },
        { name: 'CMS', alt: 'CMS', logo: '/cms.png' },
        { name: 'WHS', alt: 'WHS', logo: '/whs.png' },
        { name: 'DHS', alt: 'DHS', logo: '/dhs.png' },
        { name: 'TSA', alt: 'TSA', logo: '/tsa.png' },
        { name: 'NAS', alt: 'NAS', logo: '/nas.png' },
        { name: 'DOD', alt: 'DOD', logo: '/dod.png' },
        { name: 'USCG', alt: 'USCG', logo: '/uscg.png' },
        { name: 'ICE', alt: 'ICE', logo: '/ice.png' },
        { name: 'SWaM', alt: 'SWaM', logo: '/swam.png' },
        { name: 'SDVOSB', alt: 'SDVOSB', logo: '/sdvosb.png' },
        { name: 'DAU', alt: 'DAU', logo: '/dau.png' }
      ].map((agency, index) => (
        <div
          key={index}
          className="group cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          {/* CIRCLE */}
          <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden">

            <img
              src={agency.logo}
              alt={agency.alt}
              className="
                w-full h-full
                object-contain
                p-3
                rounded-full

                /* MOBILE: show color always */
                grayscale-0

                /* DESKTOP: grayscale until hover */
                md:grayscale
                md:group-hover:grayscale-0

                /* MOBILE TAP EFFECT */
                active:scale-110

                /* SMOOTH ANIMATION */
                transition-all duration-300
              "
            />

          </div>
        </div>
      ))}

    </div>
  </div>
</section>
{/* ================= END TRUSTED BY SECTION ================= */}


      {/* Training Section */}
      <section className="py-16 md:py-20 bg-[#A3A2A3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-6">
                Training experiences that are <span className="text-[#2563EB]">relevant</span>, <span className="text-[#2563EB]">engaging</span>, and <span className="text-[#FDB913]">energetic</span>.
              </h2>
              
              <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                <p>
                  Our seminars, workshops, and coaching sessions focus on the skills government employees need to be effective in their current roles and keep climbing the ladder.
                </p>
                <p>
                  Our founder, William Randolph, draws on his 25+ years of experience working at a high level in procurement for government agencies such as Naval Sea Systems Command, Marine Corps Systems Command, Department of Homeland Security, and U.S. Immigration and Customs Enforcement to deliver engaging talks full of real-world examples.
                </p>
                <p>
                  He leverages his years of experience as a government employee and procurement specialist to develop training solutions for up-and-coming federal employees. Participants walk away from our training experiences excited and ready to apply the concepts they've learned in their daily work.
                </p>
              </div>

              <Link 
                to="/about"
                className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#2563EB] transition-all hover:shadow-professional-lg"
              >
                Get to Know Us <ArrowRight size={20} />
              </Link>
            </div>

            {/* Right - Image/Visual */}
            <div className="relative">
              <div className="relative">
  <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
    <img
      src="/training.png"
      alt="Training Experience"
      className="w-full h-auto object-contain"
    />
  </div>
</div>

              {/* Decorative circle - Hidden on mobile */}
              <div className="hidden lg:block absolute -bottom-6 -right-6 w-48 h-48 bg-[#FDB913] rounded-full -z-10" />
              <div className="hidden lg:block absolute -top-6 -left-6 w-32 h-32 bg-[#2563EB] rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Business Development Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            {/* LEFT IMAGE */}
<div className="relative order-2 lg:order-1">
  <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
    <img
      src="/business.png"
      alt="Business Development"
      className="w-full h-auto object-contain"
    />
  </div>
</div>


            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1E3A8A] mb-6">
                Business Development for government contractors
              </h2>
              
              <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                <p>
                  With over 25 years of federal acquisition experience on the government side, Think Acquisition is uniquely positioned to help government contractors navigate doing business with federal government agencies.
                </p>
                <p>
                  Using data-driven audit reports, we give government contractors the roadmap to strategically and effectively sell to the federal government. We identify which agencies and departments are your ideal targets, help you understand how those targets operate, and how to engage with the right buyers.
                </p>
              </div>

              <Link 
                to="/business-development"
                className="inline-flex items-center gap-2 bg-[#FDB913] text-[#1E3A8A] px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition-all hover:shadow-professional-lg"
              >
                Learn More <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MicroMarket Section */}
      {/* ================= MICRO MARKETPLACE SECTION ================= */}
<section className="py-16 md:py-20 bg-[#A3A2A3]/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* TITLE */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-5xl font-black text-[#1E3A8A]">
        The Government Micro-Purchase Marketplace
      </h2>
      <div className="w-16 h-1 bg-[#FDB913] mx-auto mt-4 rounded-full" />
    </div>

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* LEFT CONTENT */}
      <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
        <p>
          MicroMarket is dedicated to revolutionizing the landscape of
          government micro-purchase services. Our platform is built upon the
          foundation of simplifying searches (and requests), providing an arena
          for service providers to be seen and compete, and ensuring a trusted,
          efficient solution for all micro-purchase government services
          transactions.
        </p>

        <p>
          For our government-side users, we promise an effortless discovery
          process, allowing quick access to a range of specialized service
          vendors.
        </p>

        <p>
          For our vendors, MicroMarket isn't just a marketplace; it's a
          launchpad for business creation and growth. We provide unparalleled
          access to government opportunities, acting as a bridge between
          businesses and the vast potential of government micro-purchase
          spending.
        </p>

        {/* BUTTON */}
        <div className="pt-4">
          <a
            href="https://micromarket.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#2563EB] transition-all"
          >
            Visit MicroMarket Now
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* RIGHT VIDEO CARD */}
      <div className="relative">
        <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-3xl p-6 md:p-8 shadow-2xl">

          {/* TOP WHITE BOX WITH IMAGE */}
<div className="bg-white rounded-2xl py-6 flex items-center justify-center">

  <img
    src="/emicromarket.png"   // 👉 your image inside public folder
    alt="eMicroMarket"
    className="h-12 md:h-16 object-contain"
  />

</div>


          {/* SMALL TEXT */}
          <p className="text-center text-white/90 mt-6 mb-6">
            Welcome to MicroMarket.co
          </p>

          {/* VIDEO PLAYER */}
          <div
            className="rounded-2xl overflow-hidden cursor-pointer"
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector("video");
              video?.play();
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.pause();
                video.currentTime = 0;
              }
            }}
            onClick={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video?.paused) {
                video.play();   // Mobile tap play
              } else {
                video.pause();
              }
            }}
          >
            <video
  src="/micromarket.mp4"
  controls
  playsInline
  className="w-full h-56 md:h-64 object-cover rounded-2xl"
/>

          </div>

        </div>
      </div>

    </div>
  </div>
</section>
{/* ================= END MICRO MARKETPLACE ================= */}


      {/* Expert Knowledge Section */}
      {/* ================= EXPERT KNOWLEDGE VIDEO SECTION ================= */}
<section className="py-20 md:py-28 bg-gradient-to-br from-[#1E3A8A] via-[#2B4A9D] to-[#2563EB]">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    {/* TITLE */}
    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
      Expert Knowledge on Procurement—and More
    </h2>

    {/* SUBTEXT */}
    <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto mb-14 leading-relaxed">
      Over his career, William has become an expert not only on acquisitions,
      but on what it takes to succeed as a federal employee. On his two YouTube
      channels, he shares career advice, mindset tips, and insight into the
      acquisitions process.
    </p>

    {/* VIDEO GRID */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* VIDEO 1 */}
      <a
        href="https://youtu.be/rdJ38az0U0A?si=bNl7Uh4_fWHqoarn"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="relative overflow-hidden rounded-xl shadow-2xl">

          {/* THUMBNAIL IMAGE */}
          <img
            src="https://img.youtube.com/vi/rdJ38az0U0A/maxresdefault.jpg"
            alt="Episode 31 - Commercial Acquisition Insights"
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

            {/* PLAY BUTTON */}
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>

          </div>
        </div>
      </a>

      {/* VIDEO 2 */}
      <a
        href="https://youtu.be/a24KI7Jdg1g?si=hDfvGgI8kaKK3tt-"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="relative overflow-hidden rounded-xl shadow-2xl">

          {/* THUMBNAIL IMAGE */}
          <img
            src="https://img.youtube.com/vi/a24KI7Jdg1g/maxresdefault.jpg"
            alt="Monday First Thing!"
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

            {/* PLAY BUTTON */}
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>

          </div>
        </div>
      </a>

    </div>
  </div>
</section>
{/* ================= END EXPERT KNOWLEDGE SECTION ================= */}


      {/* Work with Think Acquisition CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-professional-xl border-2 border-gray-100">
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] w-24 h-24 rounded-2xl flex items-center justify-center mx-auto">
                <Lightbulb className="text-[#FDB913]" size={48} />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-6">
              Work with <span className="text-[#2563EB]">Think</span> Acquisition
            </h2>
            
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Whether you're a government agency looking for training or a small business ready to succeed in government contracting, we have the knowledge you need.
            </p>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#FDB913] text-[#1E3A8A] px-10 py-5 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-professional-xl"
            >
              Contact Us <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}