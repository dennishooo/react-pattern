import { useContext } from "react";
import { CountryContext } from "../pages/CountrySetting";
import { Country } from "./model";

type Props = {
  country?: Country;
};

export default function SelectedCountry({ country }: Props) {
  const { setSavedCountry } = useContext(CountryContext);
  console.log("selected country rerendered");

  if (!country) return <>no country selected!</>;
  return (
    <>
      <div>Country: {country.name}</div>
      <div>Capital: {country.capital}</div>
      <div>Region: {country.region}</div>
      <div>Subregion: {country.subregion}</div>
      <div>Currency: {country.currency}</div>
      <button onClick={() => setSavedCountry(country)}>save</button>
    </>
  );
}
