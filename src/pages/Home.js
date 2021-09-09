import { useEffect } from "react";
import RoundedImage from "../components/RoundedImage";
const BASE_CURR = "EUR";

const Home = () => {
  useEffect(() => {
    fetch(`http://data.fixer.io/api/latest?access_key=${process.env.ACCESS_KEY}`);
  }, []);
  return (
    <div>
      <div className="base-container">
        <RoundedImage currency={BASE_CURR} />
        <h2>{BASE_CURR}</h2>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
