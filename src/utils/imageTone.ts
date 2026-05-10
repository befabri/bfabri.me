import sharp from "sharp";
import path from "node:path";

export type Tone = "light" | "dark";

const cache = new Map<string, Tone>();

export async function getImageTone(src: string): Promise<Tone> {
    if (cache.has(src)) return cache.get(src)!;

    const fullPath = path.join(process.cwd(), src);
    try {
        const { dominant } = await sharp(fullPath).stats();
        const luminance = 0.299 * dominant.r + 0.587 * dominant.g + 0.114 * dominant.b;
        const tone: Tone = luminance > 140 ? "light" : "dark";
        cache.set(src, tone);
        return tone;
    } catch {
        cache.set(src, "light");
        return "light";
    }
}
