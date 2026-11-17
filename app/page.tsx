import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/data/products';

export default function HomePage() {
  return (
    <main id="top" className="no-print min-h-screen bg-paper text-ink">
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
          تنظيم هادئ، على الورق.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
          ثلاثة قوالب قابلة للطباعة، صُمّمت بعناية لتبدأ يومك وأسبوعك وشهرك بوضوح.
        </p>
      </section>

      <section id="products" className="mx-auto max-w-5xl px-6 pb-24 md:pb-32">
        <ul className="grid gap-8 md:grid-cols-3">
          {PRODUCTS.map((product) => (
            <li key={product.slug}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
