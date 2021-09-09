export const getData = async () => {
  try {
    let res = await fetch(`http://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_ACCESS_KEY}`);
    const { rates } = await res.json();
    return rates;
  } catch (err) {
    console.log("something went wrong", err);
    return [];
  }
};
