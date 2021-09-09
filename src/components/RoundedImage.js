import "currency-flags/dist/currency-flags.min.css";
const RoundedImage = ({ currency, type = "main" }) => {
  return (
    <div
      class={`currency-flag ${type === "main" ? "large-curr" : "small-curr"} currency-flag-${currency.toLowerCase()}`}
    />
  );
};
export default RoundedImage;
