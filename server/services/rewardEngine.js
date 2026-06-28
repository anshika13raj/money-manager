/**
 * Detects cashback
 * and reward partners.
 */

const rewardKeywords = [

    "cashback",
    "reward",
    "amazon pay",
    "supercoins",
    "flipkart",
    "paytm"

];

export function calculateExpectedSavings(message, amount) {

    const lowerCase = message.toLowerCase();

    const matched = rewardKeywords.some(keyword =>
        lowerCase.includes(keyword)
    );

    if (!matched || amount >= 0)
        return null;

    return {

        expectedSavings: Math.abs(amount) * 0.05

    };

}
