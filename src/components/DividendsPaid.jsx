import { useEffect, useState } from "react";

const DividendsPaid = () => {
  const [dividende, setDividene] = useState();
  const API_KEY = "27c5f7bf1c6b4c07a032c2a0954ff34e";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.twelvedata.com/dividends?symbol=AAPL&start_date=1970-01-01&apikey=${API_KEY}`
      );
      console.log("HEREEE", response);
      const result = await response.json();
      setDividene(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>
        Dividends request as part of the fundamentals dataset. The request below
        returns the amount of dividends paid out for the last 20+ years for
        Apple Inc.
      </h1>
      <p> DividendsPaid: </p>
    </div>
  );
};

export default DividendsPaid;
