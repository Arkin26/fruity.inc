import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailView } from "@/components/shop/ProductDetailView";
import { getAllProductSlugs, getProductBySlug } from "@/lib/shop-data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = getProductBySlug(slug);

  if (!result) {
    return { title: "Product not found" };
  }

  const { product, activeColor } = result;

  return {
    title: `${product.title} — ${activeColor.label}`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const result = getProductBySlug(slug);

  if (!result) {
    notFound();
  }

  const { product, activeColor } = result;

  return (
    <ProductDetailView product={product} initialColor={activeColor} />
  );
}
