import Link from 'next/link';
import Image from 'next/image';
import HeroSlider from '../components/HeroSlider';

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



      {/* Scenario Cards */}
      <section className="py-24 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title text-3xl font-bold text-gray-main">Product Platform Applications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/solutions/residential" className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg">
              <Image
                src="/images/scenario-residential.png"
                alt="Residential"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">Residential</h3>
              </div>
            </Link>
            <Link href="/solutions/retail" className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg">
              <Image
                src="/images/scenario-retail.png"
                alt="Retail"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">Retail</h3>
              </div>
            </Link>
            <Link href="/solutions/soho" className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg">
              <Image
                src="/images/scenario-soho.png"
                alt="SOHO"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">SOHO</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Line Overview */}
      <section className="py-24 bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl font-bold text-white mb-4">Product Line</h2>
            <p className="section-subtitle text-gray-400 text-lg">Network Cameras (Indoor / Outdoor) • Video Doorbell • Smart Lock</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              {/* ... Content of Card 1 ... */}
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-200">
                <Image
                  src="/images/product-cameras.png"
                  alt="Network Cameras"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-main group-hover:text-isefy-purple transition-colors">Network Cameras</h3>
                <p className="text-gray-text mb-6 leading-relaxed">
                  Smart Tracking, Active Deterrence, Smart Color Night Vision, and AI detection help you stay protected day and night.
                </p>
                <Link href="/products?category=Outdoor" className="inline-flex items-center font-semibold text-isefy-blue hover:text-isefy-dark-blue transition-colors">
                  View Collection <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-200">
                <Image
                  src="/images/product-doorbell.png"
                  alt="Video Doorbell Pivot"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-main group-hover:text-isefy-purple transition-colors">Video Doorbell – Pivot</h3>
                <p className="text-gray-text mb-6 leading-relaxed">
                  30° pan lens + smart tracking, PIR + AI human & loitering detection, and a chime that works as a Wi‑Fi extender.
                </p>
                <Link href="/products/pivot-video-doorbell" className="inline-flex items-center font-semibold text-isefy-blue hover:text-isefy-dark-blue transition-colors">
                  Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-200">
                <Image
                  src="/images/product-lock.png"
                  alt="Smart Lock Sentinel"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-main group-hover:text-isefy-purple transition-colors">Smart Lock – Sentinel</h3>
                <p className="text-gray-text mb-6 leading-relaxed">
                  Unlock in seconds with instant biometrics, and manage access through a Wi‑Fi enabled mobile app with real‑time alerts.
                </p>
                <Link href="/products/sentinel-smart-lock" className="inline-flex items-center font-semibold text-isefy-blue hover:text-isefy-dark-blue transition-colors">
                  Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title text-left mb-8 text-4xl font-bold text-gray-main">Core Capabilities</h2>
              <ul className="space-y-6">
                {[
                  'Smart Color Night Vision (four night vision modes)',
                  'Advanced AI Human & Vehicle Detection',
                  'Detection Region (custom motion zones)',
                  'Full‑duplex Two‑way Talk with Variable Voice',
                  'Active Deterrence (spotlight + siren)',
                  'Smart Control, Fully Customizable Security'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-isefy-blue/10 flex items-center justify-center mt-0.5 group-hover:bg-isefy-blue/20 transition-colors">
                      <i className="fas fa-check text-isefy-blue text-xs"></i>
                    </div>
                    <span className="text-lg text-gray-main font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/products" className="btn-primary">
                  Explore Key Features
                </Link>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gray-50 border border-gray-100">
              <Image
                src="https://placehold.co/800x800/png?text=Core+Capabilities"
                alt="Core Capabilities"
                fill
                className="object-cover"
              />
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
