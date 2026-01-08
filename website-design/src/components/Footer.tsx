import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-isefy-footer text-white/70 py-[70px] pb-5">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-10 mb-12">
                    <div className="flex flex-col">
                        <div className="mb-5 brightness-0 invert opacity-100">
                            <Image src="/logo.png" alt="ISEFY" width={120} height={30} className="h-[30px] w-auto" />
                        </div>
                        <p className="text-sm leading-relaxed mb-6">Your innovative partner in home security technology.</p>
                        <div className="flex gap-4 text-xl">
                            <i className="fab fa-facebook hover:text-white cursor-pointer transition-colors"></i>
                            <i className="fab fa-instagram hover:text-white cursor-pointer transition-colors"></i>
                            <i className="fab fa-youtube hover:text-white cursor-pointer transition-colors"></i>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="text-white mb-3 text-base font-semibold">Products</h4>
                        <Link href="/products?category=Outdoor" className="hover:text-white hover:underline text-sm">Outdoor Cameras</Link>
                        <Link href="/products?category=Indoor" className="hover:text-white hover:underline text-sm">Indoor Cameras</Link>
                        <Link href="/products?category=Doorbells" className="hover:text-white hover:underline text-sm">Video Doorbells</Link>
                        <Link href="/products?category=Locks" className="hover:text-white hover:underline text-sm">Smart Locks</Link>
                        <Link href="/products?category=Accessories" className="hover:text-white hover:underline text-sm">Accessories</Link>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="text-white mb-3 text-base font-semibold">Support</h4>
                        <Link href="/support" className="hover:text-white hover:underline text-sm">Help Center</Link>
                        <Link href="/support" className="hover:text-white hover:underline text-sm">Setup Guides</Link>
                        <Link href="/support" className="hover:text-white hover:underline text-sm">Downloads</Link>
                        <Link href="/support" className="hover:text-white hover:underline text-sm">Warranty & RMA</Link>
                        <Link href="/support" className="hover:text-white hover:underline text-sm">Contact Us</Link>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="text-white mb-3 text-base font-semibold">Services</h4>
                        <Link href="/cloud" className="hover:text-white hover:underline text-sm">ISEFY Protect (Cloud)</Link>
                        <Link href="/app" className="hover:text-white hover:underline text-sm">ISEFY App</Link>
                        <Link href="/partners" className="hover:text-white hover:underline text-sm">Become a Partner</Link>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="text-white mb-3 text-base font-semibold">About</h4>
                        <Link href="/about" className="hover:text-white hover:underline text-sm">About Us</Link>
                        <Link href="/about/newsroom" className="hover:text-white hover:underline text-sm">Newsroom</Link>
                        <Link href="/about/privacy" className="hover:text-white hover:underline text-sm">Privacy Policy</Link>
                        <Link href="/legal/terms-of-use" className="hover:text-white hover:underline text-sm">Terms of Use</Link>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[13px] opacity-60">
                    <p>&copy; 2025 ISEFY Technologies LTD. All Rights Reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <span>Toronto, Canada</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
