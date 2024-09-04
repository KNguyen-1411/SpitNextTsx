// app/api/products/route.js
import menber from "@/data/news.json";
export async function GET() {
  const products = menber;
  return new Response(JSON.stringify(products), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
