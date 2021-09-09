import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { BASE_CURR } from "../../constants";
import "./style.css";

const Converter = ({
  match: {
    params: { curr },
  },
}) => {
  const [rates, setRates] = useState({});
  const [state, setState] = useState({ base: 1, selected: 0 });
  useEffect(() => {
    if (localStorage["rates"]) setRates(JSON.parse(localStorage["rates"]));
    else setRates(undefined);
  }, []);

  const handleBase = ev => {
    const { value } = ev.target;
    setState({ selected: (rates[curr] * value).toFixed(2), base: value });
  };

  const handleCurr = ev => {
    const { value } = ev.target;
    setState({ selected: value, base: (value * (rates[BASE_CURR] / rates[curr])).toFixed(2) });
  };

  if (rates === undefined) return <Redirect to="/" />;
  return (
    <div className="converter-container">
      {rates[BASE_CURR] ? (
        <>
          <div>
            <input onChange={handleBase} value={state.base} type="number" inputMode="decimal" />
            <span>{BASE_CURR}</span>
          </div>
          <hr />
          <div>
            <input onChange={handleCurr} value={state.selected} type="number" inputMode="decimal" />
            <span>{curr}</span>
          </div>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default Converter;
