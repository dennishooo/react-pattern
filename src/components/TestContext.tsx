import { useContext } from "react";
import { CountryContext } from "../pages/CountrySetting";

export default function TestContext() {
  const { countries } = useContext(CountryContext);
  return (
    <>
      <button onClick={() => console.log({ countries })}>
        check countries
      </button>
    </>
  );
}
