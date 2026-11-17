import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { HERO_IMAGE, PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

export default function HomePage() {
  return (
    <main dir="rtl" className="no-print bg-[#F8F7F4] text-[#1C1C1A]">
      <section className="border-b border-[#E5E2D9]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-stretch gap-12 px-6 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="text-xs font-medium tracking-wide text-[#78756C]">
              مختبر الأدوات الورقية · مقاس A4 قياسي · 300 DPI
            </p>
            <h1 className="mt-5 text-3xl font-semibold leading-[1.38] tracking-tight text-[#1C1C1A] sm:text-4xl lg:text-[2.85rem]">
              تنظيم هادئ على ورق حقيقي، بعيداً عن ضجيج الشاشات.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-[1.9] text-[#575650]">
              ثلاثة قوالب رقمية مصممة بعناية لتمنح يومك وأسبوعك وعاداتك وضوحاً
              بصرياً مريحاً للعين، ومعايرة للطباعة المنزلية بدقة عالية وتوفير
              للحبر.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#products"
                className="inline-flex min-h-[46px] items-center gap-2.5 whitespace-nowrap rounded-lg border border-[#1C1C1A] bg-[#1C1C1A] px-6 py-3 text-sm font-medium text-[#FAF9F6] transition-colors duration-200 hover:bg-[#2F2F2B]"
              >
                <span>استعرض القوالب الثلاثة</span>
                <ArrowLeft className="h-4 w-4 shrink-0" />
              </a>
              <Link
                href="/printing-guide"
                className="inline-flex min-h-[46px] items-center whitespace-nowrap px-2 py-2 text-sm font-medium text-[#575650] underline decoration-[#C7C2B6] underline-offset-8"
              >
                تعليمات الطباعة المنزلية
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-[#E5E2D9] bg-[#EFECE5] lg:h-full lg:min-h-[400px]">
              <img
                src={HERO_IMAGE}
                alt="مكتب هادئ يضم دفاتر تخطيط وأوراق ملاحظات منظمة"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="products"
        className="mx-auto max-w-[1200px] px-6 py-24 lg:py-28"
      >
        <div className="flex flex-col justify-between gap-4 border-b border-[#E5E2D9] pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium text-[#78756C]">
              المجموعة المختارة
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#1C1C1A] sm:text-3xl">
              ثلاثة قوالب لكل ما تحتاجه يومياً
            </h2>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
