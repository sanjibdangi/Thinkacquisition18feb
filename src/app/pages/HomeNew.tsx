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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Trusted By Section - Agency Logos */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 font-semibold text-sm uppercase tracking-wider mb-4">Trusted by Leading Federal Agencies</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
            {[
              { name: 'NOAA', alt: 'National Oceanic and Atmospheric Administration' },
              { name: 'CMS', alt: 'Centers for Medicare & Medicaid Services' },
              { name: 'WHS', alt: 'Washington Headquarters Services' },
              { name: 'DHS', alt: 'Department of Homeland Security' },
              { name: 'TSA', alt: 'Transportation Security Administration' },
              { name: 'HHS', alt: 'Department of Health and Human Services' },
              { name: 'DOD', alt: 'Department of Defense' },
              { name: 'USCG', alt: 'U.S. Coast Guard' },
              { name: 'ICE', alt: 'Immigration and Customs Enforcement' },
              { name: 'SWaM', alt: 'SWaM Certified' },
              { name: 'SDVOSB', alt: 'Service-Disabled Veteran-Owned Small Business' },
              { name: 'VA', alt: 'Department of Veterans Affairs' }
            ].map((agency, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xs">{agency.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-24 bg-white overflow-hidden">
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
              <div className="relative rounded-3xl overflow-hidden shadow-professional-xl">
                <img
                  src="https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRyYWluaW5nJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc3MTI2ODc1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional Training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/60 to-transparent" />
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
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-professional-xl">
                <img
                  src="https://images.unsplash.com/photo-1758873268745-dd2cf0d677b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRldmVsb3BtZW50JTIwbWVldGluZyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc3MTI2ODc1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Business Development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/60 to-transparent" />
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-6">
              The Government Micro-Purchase Marketplace
            </h2>
            <div className="w-20 h-1 bg-[#FDB913] mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                MicroMarket is dedicated to revolutionizing the landscape of government micro-purchase services. Our platform is built upon the foundation of simplifying searches (and requests), providing an arena for service providers to be seen and compete, and ensuring a trusted, efficient solution for all micro-purchase government services transactions.
              </p>
              <p>
                For our government-side users, we promise an effortless discovery process, allowing quick access to a range of specialized service vendors.
              </p>
              <p>
                For our vendors, MicroMarket isn't just a marketplace; it's a launchpad for business creation and growth. We provide unparalleled access to government opportunities, acting as a bridge between businesses and the vast potential of government micro-purchase spending.
              </p>
              <a
                href="https://micromarket.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold hover:bg-[#2563EB] transition-all hover:shadow-professional-lg"
              >
                Visit MicroMarket Now <ArrowRight size={20} />
              </a>
            </div>

            {/* Right - Video/Logo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-3xl p-6 md:p-8 lg:p-12 text-center shadow-professional-xl">
                <div className="bg-white rounded-2xl p-6 md:p-8 mb-6">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1E3A8A] mb-2 break-words">
                    <span className="text-red-600">e</span>
                    <span className="text-[#1E3A8A]">Micro</span>
                    <span className="text-blue-500">Market</span>
                  </h3>
                </div>
                <p className="text-white text-base md:text-lg mb-6">Welcome to MicroMarket.co</p>
                <div className="aspect-video bg-black/20 rounded-xl flex items-center justify-center">
                  <div className="text-white/50">Video Player</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Knowledge Section */}
      <section className="py-24 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Expert Knowledge on Procurement—and More
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Over his career, William has become an expert not only on acquisitions, but on what it takes to succeed as a federal employee. On his two YouTube channels, he shares career advice, mindset tips, and insight into the acquisitions process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Video Placeholder 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
              <div className="aspect-video bg-black/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="font-bold">Episode 31 - Commercial Acquisition Insights</p>
                </div>
              </div>
              <div className="p-4 text-white">
                <p className="text-sm">Talking Acquisition with industry experts</p>
              </div>
            </div>

            {/* Video Placeholder 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
              <div className="aspect-video bg-black/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="font-bold">Monday First Thing!</p>
                </div>
              </div>
              <div className="p-4 text-white">
                <p className="text-sm">Small Business GovCon Inspiration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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