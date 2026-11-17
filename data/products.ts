import type { Product, ProductSlug } from '@/types/product';

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1400&q=80';

export const PRODUCTS: readonly Product[] = [
  {
    slug: 'weekly-planner-a4',
    indexLabel: '01',
    title: 'بلانر أسبوعي بسيط (A4)',
    subtitle: 'تخطيط أسبوعي متوازن في صفحة واحدة واضحة',
    shortDescription:
      'تصميم شبكي هادئ بمقاس A4 يجمع أيام الأسبوع السبعة، أولويات الأهداف، ومساحة مفتوحة للملاحظات بدقة طباعة 300 DPI.',
    fullDescription:
      'صُمم هذا البلانر الأسبوعي ليمنحك نظرة شاملة على أسبوعك دون ازدحام بصري.',
    image:
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'معاينة لقالب بلانر أسبوعي بسيط بمقاس A4',
    filename: 'digital-products-lab-weekly-planner-a4.pdf',
    category: 'تخطيط أسبوعي',
    formatSummary: 'A4 · 300 DPI · جاهز للطباعة',
    specs: [],
    features: [],
  },
  {
    slug: 'daily-notes-sheet',
    indexLabel: '02',
    title: 'ورقة ملاحظات يومية',
    subtitle: 'ورقة عمل يومية تجمع التسطير المنظم والهامش النقطي',
    shortDescription:
      'ورقة يومية مصممة لتفريغ المهام والأفكار بوضوح، مع هامش شبكي نقطي.',
    fullDescription:
      'ورقة الملاحظات اليومية تمزج بين انضباط القوائم ومرونة التدوين الحر.',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'معاينة لورقة ملاحظات يومية بمقاس A4',
    filename: 'digital-products-lab-daily-notes-a4.pdf',
    category: 'تدوين يومي',
    formatSummary: 'A4 · تسطير 7 مم · هامش نقطي',
    specs: [],
    features: [],
  },
  {
    slug: 'monthly-habit-tracker',
    indexLabel: '03',
    title: 'متتبع عادات شهري',
    subtitle: 'شبكة شهرية من 31 يوماً لبناء الاستمرارية بهدوء',
    shortDescription: 'جدول شهري أنيق يضم 12 صفاً للعادات مع 31 دائرة متابعة.',
    fullDescription: 'يوفر متتبع العادات الشهري مصفوفة نظيفة لتتبع العادات.',
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'معاينة لمتتبع عادات شهري بمقاس A4',
    filename: 'digital-products-lab-monthly-habit-tracker-a4.pdf',
    category: 'تتبع العادات',
    formatSummary: 'A4 · 31 يوماً · 12 صف عادة',
    specs: [],
    features: [],
  },
] as const;

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((item) => item.slug === (slug as ProductSlug));
}
