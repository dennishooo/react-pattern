import { useState } from "react";
import Item from "./Item";
import { Country } from "./model";

type Props = {
  countries: Country[];
};

export default function ListOfCountries({ countries }: Props) {
  const [counter, setCounter] = useState(0);
  console.log("list country rerendered");

  return (
    <>
      <div>list: {counter}</div>
      <button onClick={() => setCounter((pv) => pv + 1)}>set counter</button>

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
              name={country.name}
              selected={country.selected}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
