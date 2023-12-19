
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(false);

  function fetchData(){
    setLoading(true);
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(response => {
        setData(response);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Data Fetched from API</h1>
        {
          !loading && !!data && (
            <pre>{JSON.stringify(data, null, 2)}</pre>
          )
        }
    </div>
  )
}

export default App
