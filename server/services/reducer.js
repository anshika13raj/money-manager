/**
 * Generates dashboard analytics.
 */

export function calculateAnalytics(transactions) {

    const analytics = {

        income: 0,

        expense: 0,

        categories: {

            Food: 0,

            Travel: 0,

            Salary: 0,

            Shopping: 0,

            Entertainment: 0,

            Miscellaneous: 0

        }

    };

    transactions.forEach(transaction => {

        if (transaction.amount > 0) {

            analytics.income += transaction.amount;

        }

        else {

            analytics.expense += Math.abs(transaction.amount);

        }

        analytics.categories[transaction.category] += Math.abs(transaction.amount);

    });

    return analytics;

}
