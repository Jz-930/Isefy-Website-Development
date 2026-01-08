import { products } from '../../data/products';
import ShopHero from '../../components/shop/ShopHero';
import ShopPromoCarousel from '../../components/shop/ShopPromoCarousel';
import ShopProductGrid from '../../components/shop/ShopProductGrid';

export default function ShopPage() {
    return (
        <main className="bg-white">
            <ShopHero />
            <ShopPromoCarousel />
            <ShopProductGrid products={products} />
        </main>
    );
}
