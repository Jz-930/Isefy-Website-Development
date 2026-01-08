import Link from 'next/link';
import Image from 'next/image';
import HeroSlider from '../components/HeroSlider';
import ProductLineCards from '../components/ProductLineCards';
import PromotionSection from '../components/PromotionSection';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <HeroSlider />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-lg">
            Complete Home Protection<br />by <span className="text-accent">ISEFY</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            ISEFY's smart solution integrates all our products into a single app for seamless interaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-primary">
              View Products
            </Link>
            <Link href="/solutions" className="px-8 py-3 rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-isefy-dark-blue transition-all">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>



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
            <div className="group bg-white hover:bg-slate-900 rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-2 transition-all duration-300 border border-slate-100 hover:border-slate-800 relative overflow-hidden">
              {/* Hover Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none">
                <Image src="/images/scenario-residential.png" alt="Background" fill className="object-cover" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-moon text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-white transition-colors">Vivid Night Vision</h3>
                <p className="text-slate-500 leading-relaxed group-hover:text-slate-300 transition-colors">
                  See every detail in color, even in pitch black darkness with 4 smart modes tailored to your specific environment.
                </p>
              </div>
            </div>

            {/* Capability 2: AI-Powered Detection */}
            <div className="group bg-white hover:bg-slate-900 rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-2 transition-all duration-300 border border-slate-100 hover:border-slate-800 relative overflow-hidden">
              {/* Hover Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none">
                <Image src="/images/scenario-retail.png" alt="Background" fill className="object-cover" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-robot text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-white transition-colors">AI-Powered Detection</h3>
                <p className="text-slate-500 leading-relaxed group-hover:text-slate-300 transition-colors">
                  Instantly distinguishes between humans, vehicles, and pets to reduce false alerts and focus on what truly matters.
                </p>
              </div>
            </div>

            {/* Capability 3: Active Defense */}
            <div className="group bg-white hover:bg-slate-900 rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-2 transition-all duration-300 border border-slate-100 hover:border-slate-800 relative overflow-hidden">
              {/* Hover Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none">
                <Image src="/images/scenario-soho.png" alt="Background" fill className="object-cover" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center mb-6 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-shield-alt text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-white transition-colors">Active Defense</h3>
                <p className="text-slate-500 leading-relaxed group-hover:text-slate-300 transition-colors">
                  Auto-trigger spotlights and sirens up to 110dB to actively deter potential intruders before they break in.
                </p>
              </div>
            </div>

            {/* Capability 4: Real-Time Talk */}
            <div className="group bg-white hover:bg-slate-900 rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-2 transition-all duration-300 border border-slate-100 hover:border-slate-800 relative overflow-hidden">
              {/* Hover Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none">
                <Image src="/images/product-doorbell.png" alt="Background" fill className="object-cover" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-microphone text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-white transition-colors">Real-Time Talk</h3>
                <p className="text-slate-500 leading-relaxed group-hover:text-slate-300 transition-colors">
                  Full-duplex communication with noise cancellation lets you talk and listen to visitors clearly in real-time.
                </p>
              </div>
            </div>

            {/* Capability 5: All-in-One Control */}
            <div className="group bg-white hover:bg-slate-900 rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-2 transition-all duration-300 border border-slate-100 hover:border-slate-800 relative overflow-hidden">
              {/* Hover Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none">
                <Image src="/images/app-interface.png" alt="Background" fill className="object-cover" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-mobile-alt text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-white transition-colors">All-in-One Control</h3>
                <p className="text-slate-500 leading-relaxed group-hover:text-slate-300 transition-colors">
                  Manage all cameras, smart locks, and sensors from a single intuitive app, anytime, anywhere.
                </p>
              </div>
            </div>

            {/* Capability 6: Custom Security Zones */}
            <div className="group bg-white hover:bg-slate-900 rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-2 transition-all duration-300 border border-slate-100 hover:border-slate-800 relative overflow-hidden">
              {/* Hover Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none">
                <Image src="/images/cloud-services.png" alt="Background" fill className="object-cover" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-crop-simple text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">Custom Security Zones</h3>
                <p className="text-slate-500 leading-relaxed group-hover:text-slate-300 transition-colors">
                  Focus on what matters by simply drawing detection zones on your screen to filter out irrelevant movement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/hero2.jpg"
            alt="Ecosystem Background"
            fill
            className="object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Complete Home Protection</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            ISEFY's smart solution integrates all our products into a single app for seamless interaction.
          </p>
          <Link href="/solutions" className="bg-white text-isefy-dark-purple px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors inline-block shadow-xl">
            Explore Complete Solutions
          </Link>
        </div>
      </section>

      {/* Cloud Services Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100">
              <Image
                src="/images/cloud-services.png"
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
