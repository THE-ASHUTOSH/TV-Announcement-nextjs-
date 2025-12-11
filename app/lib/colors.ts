
/**
 * Generates a vibrant color based on a seed, similar to the provided Kotlin implementation.
 * Logic:
 * val random = kotlin.random.Random(seed)
 * val hue = random.nextFloat() * 360f
 * return Color.hsv(hue, 0.8f, 0.5f)
 */
export function vibrantColor(seed: number): string {
    const random = mulberry32(seed);
    const hue = random() * 360;
    // Saturation 0.8, Value 0.5
    return hsvToHex(hue, 0.8, 0.5);
}

/**
 * Simple seeded random number generator (Mulberry32).
 * Returns a function that returns a number between 0 and 1.
 */
function mulberry32(a: number) {
    return function () {
        let t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

/**
 * Converts HSV to Hex string.
 * @param h Hue (0-360)
 * @param s Saturation (0-1)
 * @param v Value (0-1)
 * @returns Hex color string (e.g. #FF0000)
 */
function hsvToHex(h: number, s: number, v: number): string {
    const i = Math.floor(h / 60);
    const f = h / 60 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);

    let r = 0, g = 0, b = 0;
    switch (i % 6) {
        case 0: r = v; g = t; b = p; break;
        case 1: r = q; g = v; b = p; break;
        case 2: r = p; g = v; b = t; break;
        case 3: r = p; g = q; b = v; break;
        case 4: r = t; g = p; b = v; break;
        case 5: r = v; g = p; b = q; break;
    }

    const toHex = (n: number) => {
        const hex = Math.round(n * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
