import { useState } from "react";
import Item from "./Item";
import { Country } from "./model";

type Props = {
  countries: Country[];
  savedCountry: Country;
  selectedCountry: Country;
};

export default function ListOfCountries({
  countries,
  savedCountry,
  selectedCountry,
}: Props) {
  console.log("list country rerendered");

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>countries</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <Item
              key={country.name}
              id={country.id}
              name={country.name}
              category={
                country.id === selectedCountry.id
                  ? "selected"
                  : country.id === savedCountry.id
                  ? "saved"
                  : ""
              }
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
