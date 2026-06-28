/**
 * Parses transaction text
 * and automatically assigns
 * a category.
 */

const merchantMap = {
    zomato: "Food",
    swiggy: "Food",
    uber: "Travel",
    ola: "Travel",
    salary: "Salary",
    amazon: "Shopping",
    netflix: "Entertainment"
};

export function parseCategory(message) {

    const lowerCase = message.toLowerCase();

    for (const merchant in merchantMap) {

        if (lowerCase.includes(merchant)) {

            return merchantMap[merchant];
        }

    }

    return "Miscellaneous";
}
