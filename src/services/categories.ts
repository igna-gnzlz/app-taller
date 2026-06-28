export async function getCategoriesV3(query: string = ""): Promise<string[]> {
  const BASE_URL_API = process.env.EXPO_PUBLIC_API_URL;
  const BASE_URL = `${BASE_URL_API}/v3/taxonomy_suggestions`;

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
