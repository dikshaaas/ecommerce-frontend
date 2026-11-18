import { products, type StoreProduct } from "../data/products";

type ProductSearchResponse = StoreProduct[] | { items: StoreProduct[] };

export async function searchProducts(query: string, signal?: AbortSignal): Promise<StoreProduct[]> {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  if (apiBaseUrl) {
    const url = new URL("/products/search", apiBaseUrl);
    url.searchParams.set("q", query);
    const response = await fetch(url, { signal });

    if (!response.ok) throw new Error("Product search is unavailable.");

    const result: ProductSearchResponse = await response.json();
    return Array.isArray(result) ? result : result.items;
  }

  // Keep local search behind the same interface as the backend API.
  const term = query.trim().toLowerCase();
  return products.filter((product) =>
    `${product.name} ${product.detailName} ${product.brand} ${product.category ?? ""}`
      .toLowerCase()
      .includes(term),
  );
}
