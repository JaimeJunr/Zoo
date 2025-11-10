/**
 * API Route para /all.json
 * Compatível com Vercel Serverless Functions
 */

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

export const config = {
  runtime: "edge", // ou 'nodejs' dependendo da necessidade
};

export default function handler(_req: Request) {
  try {
    // Tentar carregar o registry gerado
    const registryPath = join(process.cwd(), "registry", "registry.json");

    if (existsSync(registryPath)) {
      const registry = JSON.parse(readFileSync(registryPath, "utf-8"));

      return new Response(JSON.stringify(registry, null, 2), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      });
    }

    // Fallback: gerar dinamicamente
    return new Response(
      JSON.stringify({
        $schema: "https://ui.shadcn.com/schema.json",
        style: "default",
        components: [],
        blocks: [],
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (_error) {
    return new Response(JSON.stringify({ error: "Failed to load registry" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
