import { Link } from 'react-router';
import { 
  ArrowRight, 
  Award, 
  Target, 
  Users, 
  Shield,
  Lightbulb,
  Building2,
  CheckCircle2
} from 'lucide-react';

export function AboutNew() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1627990316935-9c473904206e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZWRlcmFsJTIwZ292ZXJubWVudCUyMGNhcGl0b2wlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzEyNzE5MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Federal Government Building"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-4 md:mb-6 animate-[fadeInUp_0.6s_ease-out]">
              <div className="border-t-4 border-[#FDB913] pt-3 md:pt-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3 md:mb-4 break-words">
                  ABOUT US
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-[#FDB913] font-bold uppercase tracking-wide leading-snug break-words">
                  OVER 25 YEARS OF EXPERIENCE IN THE FEDERAL ACQUISITIONS PROCESS
                </p>
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mt-6 md:mt-8 leading-relaxed">
              Think Acquisition is an independent consulting, training, and development firm founded on the principle that government agencies' acquisition success is directly correlated to the growth and development of their teams.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 leading-tight">
              <span className="text-[#1E3A8A]">Leveraging </span>
              <span className="text-[#FDB913]">25+ years</span>
              <span className="text-[#1E3A8A]"> of experience as a government employee and procurement specialist</span>
            </h2>
          </div>

          <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
            <p>
              Our founder, William Randolph, has created training solutions for federal employees through seminars and workshops covering acquisition, contracting, leadership, program management, and soft skills.
            </p>
            <p>
              We also provide business development services for government contractors looking to win more bids with the federal government. We help them target the federal agencies most likely to buy and supply them with the tools to contact those agencies and close deals.
            </p>
          </div>
        </div>
      </section>

      {/* William Randolph Bio Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1E3A8A] mb-2">
              William Randolph
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-[#FDB913] font-bold mb-6 md:mb-8">
              FOUNDER, CEO
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left - Photo Only */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-professional-xl h-full min-h-[400px] md:min-h-[600px]">
                <img
                  src="https://thinkacquisition.net/wp-content/uploads/2022/08/William-Headshot-Element.png"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative circles - Hidden on mobile */}
              <div className="hidden lg:block absolute -bottom-6 -right-6 w-32 h-32 bg-[#FDB913] rounded-full -z-10" />
              <div className="hidden lg:block absolute -top-6 -left-6 w-24 h-24 bg-[#1E3A8A] rounded-full -z-10" />
            </div>

            {/* Right - Bio Text + Highlight Cards Together */}
            <div className="space-y-8">
              {/* Bio Text */}
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  William has over 25 years of experience working for the federal government in procurement and acquisitions.
                </p>

                <p>
                  After serving in the Navy for 5 years, William received his degree in Business from Shepherd University in Shepherdstown, WV. He then began a contracting internship at Naval Sea Systems Command (NAVSEA), where he would eventually work for nearly 10 years in various purchasing divisions.
                </p>

                <p>
                  In 2004, he was hired as Head of Contracting Activity for Marine Corps Systems Command in Quantico, VA. In his 5 years at MCSC, William led a staff of over 145 professionals and managed procurement for multiple customers within the Navy, the Marine Corps, and the Department of Defense.
                </p>

                <p>
                  He then served briefly as Director of Procurement Oversight and Support at the Department of Homeland Security before being selected as the Head of Contracting Activity for U.S. Immigration and Customs Enforcement. At ICE, he managed a procurement budget of over $2.6 billion annually, eventually moving to a new role within the agency where he oversaw a program budget of over $3.1 billion each year.
                </p>

                <p>
                  Upon retiring from the federal government in 2016, William worked for 3 years within an acquisition consulting firm before founding Think Acquisition.
                </p>
              </div>

              {/* Experience Highlights - Now in same column */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 shadow-professional-lg border-l-4 border-[#1E3A8A]">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#1E3A8A] w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="text-[#FDB913]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-black text-[#1E3A8A] text-lg mb-1">25+ Years</h3>
                      <p className="text-gray-600 text-sm">Federal Procurement Experience</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-professional-lg border-l-4 border-[#FDB913]">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#FDB913] w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="text-[#1E3A8A]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-black text-[#1E3A8A] text-lg mb-1">Head of Contracting Activity</h3>
                      <p className="text-gray-600 text-sm">MCSC, DHS, ICE</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-professional-lg border-l-4 border-[#2563EB]">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#2563EB] w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-black text-[#1E3A8A] text-lg mb-1">$3.1B+ Budget</h3>
                      <p className="text-gray-600 text-sm">Annual Program Management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-6">
              Certifications & Credentials
            </h2>
            <p className="text-xl text-gray-600">
              Proud to be a service-disabled veteran-owned small business
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-3xl p-6 md:p-12 text-white text-center shadow-professional-xl">
              <div className="inline-block mb-6">
                <div className="bg-[#FDB913] w-20 h-20 rounded-full flex items-center justify-center">
                  <Shield className="text-[#1E3A8A]" size={40} />
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-4">Service-Disabled Veteran-Owned Small Business</h3>
              <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
                Think Acquisition is a service-disabled veteran-owned small business, as certified by the Center for Verification and Evaluation of the U.S. Department of Veterans Affairs.
              </p>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                  <div className="text-[#FDB913] font-bold text-xs md:text-sm mb-2">CAGE Code</div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-black break-all">89VE7</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                  <div className="text-[#FDB913] font-bold text-xs md:text-sm mb-2">UEI</div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-black break-all">M2M1NJSD9FD3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work With Us CTA */}
      <section className="py-24 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-8">
            <Lightbulb className="text-[#FDB913] w-20 h-20" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Work with <span className="text-[#FDB913]">Think</span> Acquisition
          </h2>
          
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Whether you're a government agency looking for in-depth training and workshops or a small business ready to sell your services to the federal government, we have the knowledge you need.
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