import { Link } from 'react-router';
import {
  ArrowRight,
  Award,
  TrendingUp,
  Lightbulb
} from 'lucide-react';

export function HomeNew() {
  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E40AF]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight">
                THiNK
                <span className="block text-[#FDB913]">ACQUISITION</span>
              </h1>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FDB913] mb-4 md:mb-6">
                EXPERT TRAINING FOR FEDERAL GOVERNMENT EMPLOYEES
              </h2>

              <p className="text-base md:text-lg text-white/90 mb-8 md:mb-10 leading-relaxed">
                We focus on increasing federal government employees' individual
                effectiveness in acquisition, contracting, leadership, and
                program management through expert training and coaching.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-10">
                <Link
                  to="/training"
                  className="btn-primary group bg-[#FDB913] text-[#1E3A8A] px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  See Our Training Catalog
                  <ArrowRight size={20} />
                </Link>

                <Link
                  to="/business-development"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white hover:text-[#1E3A8A] transition-all text-center"
                >
                  See Our Capability Statement
                </Link>
              </div>
            </div>

            {/* Right Cards */}
            <div className="relative">
              <div className="space-y-6 md:space-y-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FDB913] w-12 h-12 rounded-full flex items-center justify-center">
                      <Award className="text-[#1E3A8A]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-white mb-2">
                        For Federal Agencies:
                      </h3>
                      <p className="text-white/90 text-sm md:text-base">
                        Training for acquisition teams on leadership,
                        management, procurement, and workforce development.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FDB913] w-12 h-12 rounded-full flex items-center justify-center">
                      <TrendingUp className="text-[#1E3A8A]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-white mb-2">
                        For Government Contractors:
                      </h3>
                      <p className="text-white/90 text-sm md:text-base">
                        Data-driven business development guidance to engage
                        with the right federal buyers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 top-1/2 left-1/2 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUSTED BY SECTION ================= */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Trusted by Leading Federal Agencies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-80">
            {[
              { name: 'NOAA', alt: 'NOAA', logo: '/noaa.png' },
              { name: 'CMS', alt: 'CMS', logo: '/cms.png' },
              { name: 'WHS', alt: 'WHS', logo: '/whs.png' },
              { name: 'DHS', alt: 'DHS', logo: '/dhs.png' },
              { name: 'TSA', alt: 'TSA', logo: '/tsa.png' },
              { name: 'DAU', alt: 'DAU', logo: '/dau.png' },
              { name: 'DOD', alt: 'DOD', logo: '/dod.png' },
              { name: 'USCG', alt: 'USCG', logo: '/uscg.png' },
              { name: 'ICE', alt: 'ICE', logo: '/ice.png' },
              { name: 'SWaM', alt: 'SWaM', logo: '/swam.png' },
              { name: 'SDVOSB', alt: 'SDVOSB', logo: '/sdvosb.png' },
              { name: 'NAS', alt: 'NAS', logo: '/nas.png' }
            ].map((agency, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer active:scale-95 transition-transform duration-150"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto overflow-hidden shadow-md transition-all duration-300 md:group-hover:shadow-xl">

                  <img
                    src={agency.logo}
                    alt={agency.alt}
                    className="
                      w-full h-full
                      object-cover
                      rounded-full
                      filter md:grayscale
                      transition-all duration-300 ease-out
                      md:group-hover:grayscale-0
                      md:group-hover:scale-110
                      active:scale-110
                    "
                  />

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= END TRUSTED BY ================= */}

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-professional-xl border-2 border-gray-100">
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] w-24 h-24 rounded-2xl flex items-center justify-center mx-auto">
                <Lightbulb className="text-[#FDB913]" size={48} />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-6">
              Work with Think Acquisition
            </h2>

            <p className="text-xl text-gray-700 mb-10">
              Whether you're a government agency looking for training or a
              contractor ready to succeed in government contracting.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#FDB913] text-[#1E3A8A] px-10 py-5 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105"
            >
              Contact Us <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
