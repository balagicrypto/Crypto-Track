import { createContext, useEffect, useState } from 'react';

export const CoinContext1 = createContext(); // Create context object

const CoinContextProvider = (props) => {
  const [allCoin1, setAllCoin1] = useState([]);
  const [currency1, setCurrency1] = useState({
    name: "usd",
    symbol: "$"
  });

  const fetchAllCoin1 = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-D6rrUff8ik6z3vPsPkAYgQ3t'
      }
    };

    try { //await keyword pauses the execution of the code untill the promise is resolved
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency1.name}`, options);
      const data = await response.json();
      console.log('Fetched data:', data); // Log the fetched data for verification
      setAllCoin1(data); //update the state with the fetched data.
    } catch (err) {
      console.error('Error fetching data:', err); // Log any errors
    }
  };
 //useEffect is used to handle 
  useEffect(() => {
    fetchAllCoin1(); // Fetch data when component mounts
  }, [currency1]);

  const contextValue = {
    allCoin1,
    currency1,
    setCurrency1
  };

  return (
    <CoinContext1.Provider value={contextValue}>
      {props.children}
    </CoinContext1.Provider>
  );
};

export default CoinContextProvider;
