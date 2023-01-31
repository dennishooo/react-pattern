import { createContext, useContext, useMemo, useState } from "react";
import ListOfCountries from "../components/ListOfCountries";
import { Country, data, Mode, Theme } from "../components/model";
import SelectedCountry from "../components/SelectedCountry";
import TestContext from "../components/TestContext";

export const CountryContext = createContext<any>(null);
const ThemeContext = createContext<Theme>({ mode: "dark" });

export const useTheme = () => useContext(ThemeContext);

export default function CountrySettings() {
  const [mode, setMode] = useState<Mode>("light");
  const [countries, setCountries] = useState(data);
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [savedCountry, setSavedCountry] = useState<Country>(countries[0]);

  const [counter, setCounter] = useState(0);

  const theme = useMemo(
    () => ({
      mode,
    }),
    [mode]
  );

  const allData = useMemo(
    () => ({
      countries,
      setSelectedCountry,
      setSavedCountry,
    }),
    []
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
      // {/* <ThemeContext.Provider value={theme}> */}
      <CountryContext.Provider value={allData}>
        <div>page: {counter}</div>
        <button onClick={() => setCounter((pv) => pv + 1)}>set counter</button>
        {countriesList}
        {selectedCountryInfo}
        <TestContext />
        <button
          onClick={() => setMode((pv) => (pv === "light" ? "dark" : "light"))}
        >
          toogle theme
        </button>
        //{" "}
      </CountryContext.Provider>
      {/* </ThemeContext.Provider> */}
    </>
  );
}
