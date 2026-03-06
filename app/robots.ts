import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: ["Googlebot", "Bingbot", "PerplexityBot", "ChatGPT-User", "ClaudeBot", "anthropic-ai", "GPTBot"],
                allow: "/",
            }
        ],
        sitemap: "https://zerovolabs.in/sitemap.xml",
    }
}
