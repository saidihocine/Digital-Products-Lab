'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CalendarRange, CheckSquare, FileText } from 'lucide-react';
import type { Product, ProductSlug } from '@/types/product';

interface ProductCardProps {
  readonly product: Product;
}

function ProductOptionIcon({ slug }: { readonly slug: ProductSlug }) {
  if (slug === 'weekly-planner-a4') {
    return <CalendarRange className="h-4 w-4 stroke-[1.5] text-[#78756C]" />;
  }
  if (slug === 'daily-notes-sheet') {
    return <FileText className="h-4 w-4 stroke-[1.5] text-[#78756C]" />;
  }
  return <CheckSquare className="h-4 w-4 stroke-[1.5] text-[#78756C]" />;
}

export function ProductCard({ product }: ProductCardProps) {
  const [imgError, setImgError] = useState<boolean>(false);

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5E2D9] bg-white text-right shadow-[0_2px_14px_-6px_rgba(28,28,26,0.05)] transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-[#C7C2B6] hover:shadow-[0_28px_56px_-22px_rgba(28,28,26,0.16)] active:translate-y-0 motion-reduce:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1C1A]"
    >
      <div className="relative aspect-[5/4] w-full overflow-hidden border-b border-[#EFECE4] bg-[#EFECE5]">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.imageAlt}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#EFECE5] p-8 text-center text-[#575650]">
            <ProductOptionIcon slug={product.slug} />
            <span className="text-sm font-medium">{product.title}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
        <div>
          <div className="flex items-center justify-between gap-3 text-xs text-[#78756C]">
            <div className="flex items-center gap-2">
              <span className="font-mono tabular-nums">
                {product.indexLabel}
              </span>
              <span aria-hidden="true">·</span>
              <span>{product.formatSummary}</span>
            </div>
            <ProductOptionIcon slug={product.slug} />
          </div>

          <h3 className="mt-4 text-[1.3rem] font-semibold leading-snug tracking-tight text-[#1C1C1A]">
            {product.title}
          </h3>

          <p className="mt-1.5 text-xs font-medium text-[#78756C]">
            {product.subtitle}
          </p>

          <p className="mt-4 text-sm leading-[1.85] text-[#575650]">
            {product.shortDescription}
          </p>
        </div>

        <div className="mt-8 border-t border-[#F1EFE9] pt-5">
          <span className="inline-flex min-h-[44px] w-full items-center justify-between gap-2 whitespace-nowrap rounded-lg border border-[#DCD8CE] bg-[#F8F7F3] px-5 py-2.5 text-sm font-medium text-[#1C1C1A] transition-colors duration-200 group-hover:border-[#1C1C1A] group-hover:bg-[#1C1C1A] group-hover:text-[#FAF9F6]">
            <span>معاينة وتحميل</span>
            <ArrowLeft className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
