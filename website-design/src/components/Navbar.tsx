import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const navLinks = [
        { name: 'Products', href: '/products' },
        { name: 'Solutions', href: '/solutions' },
        { name: 'App', href: '/app' },
        { name: 'Cloud', href: '/cloud' },
        { name: 'Support', href: '/support' },
        { name: 'About', href: '/about' },
    ];

    return (
        <header className="fixed top-0 w-full h-20 bg-white/95 backdrop-blur-md shadow-sm z-50 flex items-center transition-all">
            <div className="container-custom flex justify-between items-center w-full">
                <Link href="/" className="logo">
                    <Image src="/logo.png" alt="ISEFY Logo" width={150} height={45} className="h-[45px] w-auto" />
                </Link>
                <nav className="hidden md:block">
                    <ul className="flex gap-8 font-medium text-gray-main text-[15px]">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="hover:text-isefy-purple transition-colors">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex gap-5 items-center text-gray-main text-lg">
                    <Link href="/shop" className="text-sm font-bold text-isefy-purple border border-isefy-purple px-4 py-1.5 rounded-full hover:bg-isefy-purple hover:text-white transition-colors mr-2">
                        Shop
                    </Link>
                    <i className="fas fa-search cursor-pointer hover:text-isefy-purple transition-colors"></i>
                    <Link href="/shop/cart"><i className="fas fa-shopping-cart cursor-pointer hover:text-isefy-purple transition-colors"></i></Link>
                    <Link href="/shop/account"><i className="fas fa-user cursor-pointer hover:text-isefy-purple transition-colors"></i></Link>
                </div>
            </div>
        </header>
    );
}
