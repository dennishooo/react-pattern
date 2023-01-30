import { useContext } from "react";
import { CountryContext } from "../pages/CountrySetting";
import "./Item.css";
import { Country } from "./model";

type Props = {
  name: string;
  selected: boolean;
};

export default function Item({ name, selected }: Props) {
  const { countries, setCountries } = useContext(CountryContext);
  return (
    <tr className="row">
      <td
        className={selected ? "selected" : ""}
        onClick={() => {
          console.log({ name, selected });
          setCountries((pv: Country[]) => {
            let newCountries = [...pv];
            let prevSelected = newCountries.find(
              (c: Country) => c.selected === true
            );
            if (prevSelected) prevSelected.selected = false;

            let foundCountry = newCountries.find(
              (c: Country) => c.name === name
            );
            if (foundCountry) foundCountry.selected = true;
            return newCountries;
          });
        }}
      >
        {name}
      </td>
    </tr>
  );
}
