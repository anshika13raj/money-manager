/**
 * Dashboard Page
 */

import Header from "../components/Header";
import Analytics from "../components/Analytics";
import TransactionList from "../components/TransactionList";

function Dashboard() {

  return (

    <div className="container">

      <Header />

      <Analytics />

      <TransactionList />

    </div>

  );

}

export default Dashboard;
