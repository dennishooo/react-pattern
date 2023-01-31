import { createContext, useContext, useMemo, useState } from "react";
import ListOfCountries from "../components/ListOfCountries";
import { Country, data } from "../components/model";
import SelectedCountry from "../components/SelectedCountry";
import TestContext from "../components/TestContext";

export const CountryContext = createContext<any>(null);

export default function CountrySettings() {
  const [countries, setCountries] = useState(data);
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [savedCountry, setSavedCountry] = useState<Country>(countries[0]);

  const [counter, setCounter] = useState(0);
  const value = useMemo(
    () => ({
      countries,
      setCountries,
    }),
    [countries]
  );

  const countriesList = useMemo(() => {
    return (
      <ListOfCountries
        countries={countries}
        savedCountry={savedCountry}
        selectedCountry={selectedCountry}
      />
    );
  }, [countries, savedCountry, selectedCountry]);

  const selectedCountryInfo = useMemo(() => {
    return <SelectedCountry country={selectedCountry} />;
  }, [selectedCountry, savedCountry]);

  return (
    <>
      //{" "}
      <CountryContext.Provider
        value={{ countries, setCountries, setSelectedCountry }}
      >
        <div>page: {counter}</div>
        <button onClick={() => setCounter((pv) => pv + 1)}>set counter</button>
        {countriesList}
        {selectedCountryInfo}
        <TestContext />
        //{" "}
      </CountryContext.Provider>
    </>
  );
}
