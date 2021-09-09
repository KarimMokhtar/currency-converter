import { useEffect, useState } from "react";
import { getData } from "../../api/api";
import RoundedImage from "../../components/RoundedImage";
import SubCurrCard from "../../components/SubCurrCard";
import { BASE_CURR } from "../../constants";
import "./style.css";

const Home = () => {
  const [rates, setRates] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const rates = await getData();
      const data = Object.keys(rates).map(key => ({ curr: key, price: rates[key] }));
      setRates(data);
      localStorage["rates"] = JSON.stringify(rates);
    }
    fetchData();
  }, []);
  return (
    <div>
      <div className="base-container">
        <RoundedImage type="main" currency={BASE_CURR} />
        <h2>{BASE_CURR}</h2>
      </div>
      <div className="prices-container">
        <div className="prices">
          {rates.map(({ curr, price }) => (
            <SubCurrCard key={curr} curr={curr} price={price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
