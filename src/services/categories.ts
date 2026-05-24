const BASE_URL = "https://world.openfoodfacts.org/api/v3/taxonomy_suggestions";

export async function getCategoriesV3(query: string = ""): Promise<string[]> {
  const params = new URLSearchParams({
    tagtype: "categories",
    lc: "es",
    string: query,
    limit: "20",
  });

  const response = await fetch(`${BASE_URL}?${params.toString()}`, {
    headers: {
      "User-Agent": "UNTDF TNT 2026", // OFF
    },
  });

  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
  }

  const data = await response.json();
  return data.suggestions as string[];
}
