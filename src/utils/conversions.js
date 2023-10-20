// Helper functions for unit conversions
export const mphToKph = (mph) => mph * 1.61;
export const mphToFps = (mph) => mph * 1.466;
export const mphToMps = (mph) => mph * 0.44704;

// Rounding
export function roundToDecimal(value) {
    return parseFloat(value).toFixed(1);
}