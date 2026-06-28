// /**
//  * Dashboard Page
//  */

// import Header from "../components/Header";
// import Analytics from "../components/Analytics";
// import TransactionList from "../components/TransactionList";

// function Dashboard() {

//   return (

//     <div className="container">

//       <Header />

//       <Analytics />

//       <TransactionList />

//     </div>

//   );

// }

// export default Dashboard;


import Header from "../components/Header";
import Analytics from "../components/Analytics";
import TransactionList from "../components/TransactionList";

function Dashboard() {
  return (
    <div className="container">
      <Header />

      <div style={{ background: "yellow", padding: "20px", margin: "20px 0" }}>
        Dashboard is rendering
      </div>

      <Analytics />

      <TransactionList />
    </div>
  );
}

export default Dashboard;
