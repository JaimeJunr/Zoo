/**
 * API Route para /components.json
 * Compatível com Vercel Serverless Functions
 */

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

export const config = {
  runtime: "edge",
};

export default function handler(_req: Request) {
  try {
    const registryPath = join(process.cwd(), "registry", "registry.json");

    if (existsSync(registryPath)) {
      const registry = JSON.parse(readFileSync(registryPath, "utf-8"));

      return new Response(JSON.stringify(registry.components || [], null, 2), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      });
    }

    return new Response(JSON.stringify([]), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to load components" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
