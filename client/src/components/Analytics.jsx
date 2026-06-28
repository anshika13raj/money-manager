// /**
//  * Analytics Section
//  */

// import { useTransactions } from "../context/TransactionContext";

// import ProgressBar from "./ProgressBar";

// function Analytics() {

//   const { analytics, loading } =
//     useTransactions();

//   if (loading) return <h2>Loading...</h2>;

//   if (!analytics) return null;

//   const categories =
//     analytics.categories;

//   const max = Math.max(
//     ...Object.values(categories)
//   );

//   return (

//     <section className="analytics">

//       <div className="summary">

//         <div className="summary-card income">

//           <h3>Total Income</h3>

//           <h2>
//             ₹{analytics.income}
//           </h2>

//         </div>

//         <div className="summary-card expense">

//           <h3>Total Expense</h3>

//           <h2>
//             ₹{analytics.expense}
//           </h2>

//         </div>

//       </div>

//       <div className="progress-grid">

//         {Object.entries(categories).map(
//           ([key, value]) => (

//             <ProgressBar
//               key={key}
//               title={key}
//               value={value}
//               max={max}
//             />

//           )
//         )}

//       </div>

//     </section>

//   );

// }

// export default Analytics;

function Analytics() {
  return (
    <div
      style={{
        background: "red",
        color: "white",
        padding: "20px",
        marginBottom: "20px"
      }}
    >
      Analytics Component Loaded
    </div>
  );
}

export default Analytics;

