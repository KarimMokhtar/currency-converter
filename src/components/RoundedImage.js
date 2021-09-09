import "currency-flags/dist/currency-flags.min.css";
const RoundedImage = ({ currency, type }) => {
  return (
    <div
      className={`currency-flag ${
        type === "main" ? "large-curr" : "small-curr"
      } currency-flag-${currency.toLowerCase()}`}
    />
  );
};
export default RoundedImage;
