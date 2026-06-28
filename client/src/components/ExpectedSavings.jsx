/**
 * Displays expected cashback/rewards.
 */

function ExpectedSavings({ amount }) {

  return (

    <div className="expected-savings">

      💚 Expected Savings

      <span>

        ₹{amount.toFixed(2)}

      </span>

    </div>

  );

}

export default ExpectedSavings;
