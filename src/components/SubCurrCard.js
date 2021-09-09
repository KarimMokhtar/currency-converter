import RoundedImage from "./RoundedImage";

const SubCurrCard = ({ curr, price }) => {
  return (
    <div className="curr-card">
      <div>
        <RoundedImage currency={curr} type="sub" />
        <span>{curr}</span>
      </div>
      <p>{price.toFixed(2)}</p>
    </div>
  );
};
export default SubCurrCard;
