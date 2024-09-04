// app/api/products/route.js
import members from "@/data/members.json";
export async function GET() {
  const products = members;
  return new Response(JSON.stringify(products), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
