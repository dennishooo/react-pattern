import { Country } from "./model";

type Props = {
  country?: Country;
};

export default function SelectedCountry({ country }: Props) {
  if (!country) return <>no country selected!</>;
  return (
    <>
      <div>Country: {country.name}</div>
      <div>Capital: {country.capital}</div>
      <div>Region: {country.region}</div>
      <div>Subregion: {country.subregion}</div>
      <div>Currency: {country.currency}</div>
    </>
  );
}
