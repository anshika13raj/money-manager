// /**
//  * Displays all transactions
//  */

// import { useTransactions } from "../context/TransactionContext";

// import TransactionCard from "./TransactionCard";

// function TransactionList() {

//   const {

//     transactions,

//     loading

//   } = useTransactions();

//   if (loading)

//     return <h2>Loading...</h2>;

//   return (

//     <section className="transaction-section">

//       <h2>

//         Recent Transactions

//       </h2>

//       {

//         transactions.map(

//           transaction => (

//             <TransactionCard

//               key={transaction.id}

//               transaction={transaction}

//             />

//           )

//         )

//       }

//     </section>

//   );

// }

// export default TransactionList;

function TransactionList() {
  return (
    <div
      style={{
        background: "green",
        color: "white",
        padding: "20px"
      }}
    >
      Transaction List Loaded
    </div>
  );
}

export default TransactionList;

