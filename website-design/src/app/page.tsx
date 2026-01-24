import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '../components/HeroSection';
import ProductLineCards from '../components/ProductLineCards';
import PromotionSection from '../components/PromotionSection';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />



      {/* Seasonal Promotions */}
      <PromotionSection />

      {/* Product Line Overview */}
      <section className="py-24 bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl font-bold text-white mb-4">Product Line</h2>
            <p className="section-subtitle text-gray-400 text-lg">Network Cameras (Indoor / Outdoor) • Video Doorbell • Smart Lock</p>
          </div>
          <ProductLineCards />
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-100/50 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-isefy-blue font-bold tracking-widest uppercase text-sm mb-3 block">Premium Security</span>
            <h2 className="section-title text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-6 pb-2">
              Advanced Core Capabilities
            </h2>
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              Every ISEFY product is engineered with these powerful standard features to ensure your property is protected by the most advanced technology available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Capability 1: Vivid Night Vision */}
            <div className="group bg-white rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-2 transition-all duration-300 border border-slate-200 overflow-hidden flex flex-col h-full">
              {/* Image Area */}
              <div className="relative h-56 w-full">
                <Image src="/homepage/features/night-vision.png" alt="Vivid Night Vision" fill className="object-cover" />
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-moon text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Vivid Night Vision</h3>
                <p className="text-slate-500 leading-relaxed">
                  See every detail in color, even in pitch black darkness with 4 smart modes tailored to your specific environment.
                </p>
              </div>
            </div>

            {/* Capability 2: AI-Powered Detection */}
            <div className="group bg-white rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-2 transition-all duration-300 border border-slate-200 overflow-hidden flex flex-col h-full">
              {/* Image Area */}
              <div className="relative h-56 w-full">
                <Image src="/homepage/features/ai-detection.png" alt="AI-Powered Detection" fill className="object-cover" />
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-robot text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">AI-Powered Detection</h3>
                <p className="text-slate-500 leading-relaxed">
                  Instantly distinguishes between humans, vehicles, and pets to reduce false alerts and focus on what truly matters.
                </p>
              </div>
            </div>

            {/* Capability 3: Active Defense */}
            <div className="group bg-white rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-2 transition-all duration-300 border border-slate-200 overflow-hidden flex flex-col h-full">
              {/* Image Area */}
              <div className="relative h-56 w-full">
                <Image src="/homepage/features/active-defense.png" alt="Active Defense" fill className="object-cover" />
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center mb-6 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-shield-alt text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Active Defense</h3>
                <p className="text-slate-500 leading-relaxed">
                  Auto-trigger spotlights and sirens up to 110dB to actively deter potential intruders before they break in.
                </p>
              </div>
            </div>

            {/* Capability 4: Real-Time Talk */}
            <div className="group bg-white rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-2 transition-all duration-300 border border-slate-200 overflow-hidden flex flex-col h-full">
              {/* Image Area */}
              <div className="relative h-56 w-full">
                <Image src="/homepage/features/real-time-talk.png" alt="Real-Time Talk" fill className="object-cover" />
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-microphone text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Real-Time Talk</h3>
                <p className="text-slate-500 leading-relaxed">
                  Full-duplex communication with noise cancellation lets you talk and listen to visitors clearly in real-time.
                </p>
              </div>
            </div>

            {/* Capability 5: All-in-One Control */}
            <div className="group bg-white rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-2 transition-all duration-300 border border-slate-200 overflow-hidden flex flex-col h-full">
              {/* Image Area */}
              <div className="relative h-56 w-full">
                <Image src="/homepage/features/all-in-one-control.png" alt="All-in-One Control" fill className="object-cover" />
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-mobile-alt text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">All-in-One Control</h3>
                <p className="text-slate-500 leading-relaxed">
                  Manage all cameras, smart locks, and sensors from a single intuitive app, anytime, anywhere.
                </p>
              </div>
            </div>

            {/* Capability 6: Custom Security Zones */}
            <div className="group bg-white rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-2 transition-all duration-300 border border-slate-200 overflow-hidden flex flex-col h-full">
              {/* Image Area */}
              <div className="relative h-56 w-full">
                <Image src="/homepage/features/custom-security-zones.png" alt="Custom Security Zones" fill className="object-cover" />
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-crop-simple text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Custom Security Zones</h3>
                <p className="text-slate-500 leading-relaxed">
                  Focus on what matters by simply drawing detection zones on your screen to filter out irrelevant movement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 bg-slate-900 relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Complete Home Protection</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              ISEFY's smart solution integrates all our products into a single app for seamless interaction, covering every corner of your home inside and out.
            </p>
            <Link href="/solutions" className="bg-white text-isefy-dark-purple px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors inline-block shadow-xl">
              Explore Complete Solutions
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image 1: Exterior */}
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800">
              <div className="absolute top-4 left-4 z-20 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Exterior
              </div>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/homepage/ecosystem/exterior.png"
                  alt="Exterior Home Protection - Pivot, Alert Flash"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Optional: Add overlaid labels if needed dynamically, or rely on image annotations */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Perimeter Defense</h3>
                <p className="text-gray-400">
                  Secure your property boundaries with <strong>AlertFlash</strong> deterrence cameras and the <strong>Pivot</strong> video doorbell.
                </p>
              </div>
            </div>

            {/* Image 2: Interior */}
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800">
              <div className="absolute top-4 left-4 z-20 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Interior
              </div>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/homepage/ecosystem/interior.png"
                  alt="Interior Home Protection - Voyager, Sentinel"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Indoor Safety</h3>
                <p className="text-gray-400">
                  Monitor living spaces with the <strong>Voyager</strong> indoor camera and manage access with the <strong>Sentinel</strong> smart lock.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100">
              <Image
                src="/homepage/ecosystem/cloud-services.png"
                alt="ISEFY Cloud"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-isefy-blue font-bold tracking-wider uppercase text-sm mb-2 block">ISEFY Protect</span>
              <h2 className="section-title text-left mb-6 text-4xl font-bold text-gray-main">Cloud Service</h2>
              <p className="text-gray-text mb-8 text-lg leading-relaxed">
                ISEFY Protect is a subscription service that enhances your ISEFY products with advanced cloud computing technology, providing upgraded security features.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  '30 Days History', 'Unlimited Storage',
                  'Smoother Playback', 'Device Health Guard',
                  'Enhanced AI Detection', 'Security Report'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <i className="fas fa-cloud text-isefy-blue"></i>
                    <span className="font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/cloud" className="inline-block px-8 py-3 rounded-full font-semibold border-2 border-isefy-blue text-isefy-blue hover:bg-isefy-blue hover:text-white transition-all">
                View Subscription Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By / Footer Label */}
      <section className="py-12 bg-white border-t border-gray-200 text-center">
        <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">
          Trusted by Homes & Businesses
        </p>
      </section>
    </main>
  );
}
