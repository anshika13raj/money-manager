/**
 * Single transaction card.
 */

import CategoryDropdown from "./CategoryDropdown";
import ExpectedSavings from "./ExpectedSavings";

function TransactionCard({ transaction }) {

  const {

    message,

    amount,

    category,

    expectedSavings

  } = transaction;

  return (

    <div className="transaction-card">

      <div className="transaction-top">

        <div>

          <h3>

            {message}

          </h3>

          <CategoryDropdown
            category={category}
          />

        </div>

        <div
          className={
            amount >= 0
              ? "income-text"
              : "expense-text"
          }
        >

          {amount >= 0 ? "+" : "-"}

          ₹

          {Math.abs(amount)}

        </div>

      </div>

      {

        expectedSavings && (

          <ExpectedSavings

            amount={expectedSavings}

          />

        )

      }

    </div>

  );

}

export default TransactionCard;
