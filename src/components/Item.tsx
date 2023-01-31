import { useCallback, useContext, useEffect, useMemo } from "react";
import { CountryContext, useTheme } from "../pages/CountrySetting";
import "./Item.css";
import { Country } from "./model";

type Props = {
  id: number;
  name: string;
  category: string;
};

export default function Item({ id, name, category }: Props) {
  const { mode } = useTheme();
  const { countries, setSelectedCountry } = useContext(CountryContext);

  useEffect(() => {
    console.log("item mounted");
  }, []);

  console.log("item rendered");

  return (
    <tr className="row">
      <td
        className={category}
        onClick={() => {
          console.log({ name, category });
          setSelectedCountry(countries.find((c: Country) => c.id === id));
        }}
      >
        {name}
      </td>
    </tr>
  );
}
