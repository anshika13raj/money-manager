/**
 * Global transaction state.
 */

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import {
  getTransactions,
  getAnalytics
} from "../services/api";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {

  const [transactions, setTransactions] = useState([]);

  const [analytics, setAnalytics] = useState(null);

  const [loading, setLoading] = useState(true);

  /**
   * Fetch data from backend
   */
  const fetchData = async () => {

    try {

      const transactionResponse =
        await getTransactions();

      const analyticsResponse =
        await getAnalytics();

      setTransactions(transactionResponse.data);

      setAnalytics(analyticsResponse.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchData();

  }, []);

  return (

    <TransactionContext.Provider

      value={{

        transactions,

        analytics,

        loading,

        refresh: fetchData

      }}

    >

      {children}

    </TransactionContext.Provider>

  );

};

export const useTransactions = () =>
  useContext(TransactionContext);
