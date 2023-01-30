import { createContext, useContext, useMemo, useState } from "react";
import ListOfCountries from "../components/ListOfCountries";
import { Country } from "../components/model";
import SelectedCountry from "../components/SelectedCountry";
import TestContext from "../components/TestContext";

export const CountryContext = createContext<any>(null);

export default function CountrySettings() {
  const data: Country[] = [
    {
      name: "hong kong",
      capital: "central",
      region: "asia",
      subregion: "south east asia",
      currency: "hkd",
      img: "hk",
      selected: true,
    },
    {
      name: "japan",
      capital: "tokyo",
      region: "asia",
      subregion: "south east asia",
      currency: "jp",
      img: "jp",
      selected: false,
    },
    {
      name: "america",
      capital: "washington",
      region: "america",
      subregion: "north america",
      currency: "usd",
      img: "us",
      selected: false,
    },
  ];

  const [countries, setCountries] = useState(data);
  const [counter, setCounter] = useState(0);
  const value = useMemo(
    () => ({
      countries,
      setCountries,
    }),
    [countries]
  );

  const content = useMemo(() => {
    return (
      <>
        <ListOfCountries countries={countries} />
        <SelectedCountry
          country={countries.find((country) => country.selected === true)}
        />
      </>
    );
  }, [countries]);

  return (
    <>
      //{" "}
      <CountryContext.Provider value={{ countries, setCountries }}>
        <div>page: {counter}</div>
        <button onClick={() => setCounter((pv) => pv + 1)}>set counter</button>
        {content}
        {/* <ListOfCountries countries={countries} />
        <SelectedCountry
          country={countries.find((country) => country.selected === true)}
        /> */}
        <TestContext />
        //{" "}
      </CountryContext.Provider>
    </>
  );
}
