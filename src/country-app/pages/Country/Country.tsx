import { useLocation } from "react-router-dom";

function Country() {
  const {
    state: { key: country },
  } = useLocation();

  return (
    <div>
      <img src={country.flags.png} />
      <div>
        <div>
          <span>Name: {country.name.common}</span>
        </div>
        <div>
          <span>Capital: {country.capital[0]}</span>
        </div>
        <div>
          Language: 
          {Object.values(country.languages).map((lng, index) => (
            <span key={index}>{" " +lng + " " as string}</span>
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default Country;
