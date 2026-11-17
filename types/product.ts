export type ProductSlug =
  'weekly-planner-a4' | 'daily-notes-sheet' | 'monthly-habit-tracker';

export interface ProductSpec {
  readonly label: string;
  readonly value: string;
}

export interface Product {
  readonly slug: ProductSlug;
  readonly indexLabel: string;
  readonly title: string;
  readonly subtitle: string;
  readonly shortDescription: string;
  readonly fullDescription: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly filename: string;
  readonly category: string;
  readonly formatSummary: string;
  readonly specs: readonly ProductSpec[];
  readonly features: readonly string[];
}
