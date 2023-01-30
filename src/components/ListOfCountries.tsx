import Item from "./Item";
import { Country } from "./model";

type Props = {
  countries: Country[];
};

export default function ListOfCountries({ countries }: Props) {
  return (
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
  );
}
