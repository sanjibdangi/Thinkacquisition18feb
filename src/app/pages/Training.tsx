import { Link } from 'react-router';
import { Lightbulb, CheckCircle2, ArrowRight, FileDown } from 'lucide-react';

export function Training() {
  return (
    <div className="bg-white">
      {/* Hero Section - Split Screen */}
      <section className="relative min-h-[60vh] grid lg:grid-cols-2">
        {/* Left Side - White */}
        <div className="bg-white flex items-center justify-center px-8 py-20 lg:py-32 border-t-8 border-[#FDB913]">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#1E3A8A] mb-8 leading-tight">
              Training and Development Seminars and Workshops
            </h1>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#2563EB] transition-all shadow-lg"
            >
              Download our full course catalog
            </Link>
          </div>
        </div>

        {/* Right Side - Blue with Background Image */}
        <div className="relative bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center px-8 py-20 lg:py-32">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMHNlbWluYXIlMjB3b3Jrc2hvcCUyMGdyb3VwfGVufDF8fHx8MTc3MTI3MTkwMHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Training Workshop"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10 text-center text-white">
            <p className="text-base md:text-lg font-bold uppercase tracking-wider">
              Mission-Oriented Training for Government Employees
            </p>
          </div>
        </div>
      </section>

      {/* Yellow Divider */}
      <div className="h-2 bg-[#FDB913]" />

      {/* Leadership and Management Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-[#FDB913] p-8 rounded-full border-4 border-[#FDB913]">
              <Lightbulb className="text-[#1E3A8A]" size={48} />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1E3A8A] text-center mb-8">
            Leadership and Management
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-10 max-w-4xl mx-auto text-center">
            Your agency's personnel need to feel empowered to make tricky decisions in a short time, lead diverse teams, and mitigate risk. Using practical strategies acquired through years of working in the federal government, we teach participants about key leadership principles and what it looks like to apply them within the context of a government agency.
          </p>

          <div className="mb-6 text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1E3A8A] mb-6">Topics include:</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3 max-w-4xl mx-auto">
            {/* Left Column */}
            <div className="space-y-3">
              {[
                'Organizational Culture',
                'Conflict Management',
                'Managing Risk',
                'Leadership vs. Management'
              ].map((topic, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#FDB913] mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              {[
                'High-Performance Teams',
                'Characteristics of Effective Teams',
                'Managing Change and Transition',
                'Emotional Intelligence'
              ].map((topic, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#FDB913] mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Acquisitions and Procurement Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1E3A8A] text-center mb-6">
            Acquisitions and Procurement
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-10 max-w-4xl mx-auto text-center">
            At Think Acquisition, we're familiar with both sides of the government procurement process. We've used our 30+ years of expertise to develop seminars that demystify the acquisition process. Contracting personnel will walk away with strategies for fast, seamless procurement that helps their agency deliver on its mission.
          </p>

          <div className="mb-6 text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1E3A8A] mb-6">Topics include:</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3 max-w-4xl mx-auto">
            {/* Left Column */}
            <div className="space-y-3">
              {[
                'Federal Acquisition Regulations System',
                'Procurement Thresholds',
                'Purchase Request Process',
                'Independent Government Cost Estimates'
              ].map((topic, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#FDB913] mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              {[
                'Fair and Reasonable Pricing',
                'Agile Acquisition',
                'Contract Types, Vehicles, and Incentives',
                'Performance-Based Work Statements'
              ].map((topic, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#FDB913] mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1E3A8A] text-center mb-6">
            Soft Skills
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-10 max-w-4xl mx-auto text-center">
            Developing soft skills is a vital part of advancing in your career and working effectively with others. Think Acquisition offers seminars and workshops that teach the skills employees need for their acquisition career, including clear and persuasive communication, problem solving and critical thinking, and team dynamics.
          </p>

          <div className="mb-6 text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1E3A8A] mb-6">Topics include:</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3 max-w-4xl mx-auto">
            {/* Left Column */}
            <div className="space-y-3">
              {[
                'Designing an Acquisition Career',
                'Problem Solving and Critical Thinking',
                'Leading at the Highest Level'
              ].map((topic, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#FDB913] mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              {[
                'Business Writing for Government',
                'Leading Through Change',
                'Emerging Leader Skills'
              ].map((topic, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#FDB913] mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
              We tailor our training to your agency's specific needs. Whether you're looking to set up a virtual Lunch-n-Learn session once a month, or run a 2-day intensive seminar on site, Think Acquisition will create the training solution you need.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#2563EB] transition-all shadow-lg"
            >
              Download our full course catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Yellow Divider */}
      <div className="h-2 bg-[#FDB913]" />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Transform Your Team's Skills?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Let's discuss how our customized training programs can help your agency achieve acquisition excellence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#FDB913] text-[#1E3A8A] px-10 py-5 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-professional-xl"
          >
            Schedule a Consultation <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}