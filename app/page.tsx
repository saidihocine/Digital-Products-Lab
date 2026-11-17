import { ArrowLeft, Check } from 'lucide-react';
import { HERO_IMAGE, PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

export default function HomePage() {
  return (
    <main
      id="top"
      className="no-print min-h-screen bg-[#F9F8F5] text-[#252923]"
    >
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-16 lg:grid-cols-2 lg:gap-20 lg:py-24">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#E1E5DB] bg-white/70 px-3.5 py-2 text-xs font-medium text-[#65715F]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#82917A]" /> أدوات
            ورقية للحياة اليومية
          </p>
          <h1 className="mt-7 text-[2.55rem] font-medium leading-[1.35] tracking-tight sm:text-5xl lg:text-[3.65rem]">
            مساحة أهدأ،
            <br />
            <span className="text-[#788771]">ليومٍ أوضح.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-[#6B7068] sm:text-lg sm:leading-9">
            قوالب بسيطة تمنح أفكارك مكاناً على الورق. خطّط أسبوعك، دوّن يومك، واحتفِ
            بخطواتك الصغيرة — على مهل.
          </p>
          <a
            href="#products"
            className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#30382F] px-6 text-sm font-medium text-white transition-colors hover:bg-[#465143] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#52634F]"
          >
            اكتشف القوالب <ArrowLeft className="h-4 w-4" />
          </a>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#777C73]">
            <span className="inline-flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-[#788771]" /> تصميم واضح ومريح
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-[#788771]" /> جاهز للطباعة
              المنزلية
            </span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xl lg:mr-auto lg:ml-0">
          <div
            className="absolute -inset-3 rounded-[2rem] border border-[#E9E8E0]"
            aria-hidden="true"
          />
          <div className="relative aspect-[5/4] overflow-hidden rounded-[1.7rem] bg-[#E8E6DF]">
            <img
              src={HERO_IMAGE}
              alt="دفتر وأوراق تخطيط على مكتب مضاء بضوء طبيعي"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 right-4 rounded-xl border border-white/50 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm sm:bottom-6 sm:right-6">
              <p className="text-xs text-[#777C73]">ابدأ ببساطة</p>
              <p className="mt-1 text-sm font-medium text-[#30382F]">
                صفحة واحدة في كل مرة
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="border-t border-[#E8E7E0] bg-white/60">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium tracking-wide text-[#788771]">
                مجموعة البداية · ٠٣ قوالب
              </p>
              <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                أدوات صغيرة، فرقٌ لطيف
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#777C73]">
              اختر ما يناسب إيقاعك اليوم، واطبعه متى احتجت إليه.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {PRODUCTS.slice(0, 3).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <p className="mt-9 text-center text-xs text-[#85897F]">
            مصممة لتُطبع على ورق A4 وتُستخدم كل يوم.
          </p>
        </div>
      </section>
    </main>
  );
}
