import { Link } from "react-router-dom";
import RoundedImage from "./RoundedImage";

const SubCurrCard = ({ curr, price }) => {
  return (
    <Link to={`/${curr}`} className="curr-card">
      <div>
        <RoundedImage currency={curr} type="sub" />
        <span>{curr}</span>
      </div>
      <p>{price.toFixed(2)}</p>
    </Link>
  );
};
export default SubCurrCard;
