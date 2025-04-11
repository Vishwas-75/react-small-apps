import { useEffect, useState } from "react";
import CustomPagination from "../../Components/Pagination/Pagination";
import "./index.css";
import { useNavigate, useNavigation } from "react-router-dom";

interface ResponseType {
  isLoading: boolean;
  data: any;
  error: any;
  isError: boolean;
}
const initialState = {
  isLoading: false,
  data: null,
  error: null,
  isError: false,
};
export function Countries() {
  const [response, setResponse] = useState<ResponseType>(initialState);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(response.data?.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = response.data?.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    async function fetchCountries() {
      try {
        setResponse((prev: ResponseType) => ({ ...prev, isLoading: true }));
        const response = await fetch("https://restcountries.com/v3.1/all").then(
          (resp) => resp.json()
        );
        setResponse((prev: ResponseType) => ({
          ...prev,
          isLoading: false,
          data: response,
        }));
      } catch (error) {
        setResponse((prev: ResponseType) => ({
          ...prev,
          isLoading: false,
          error: error,
          isError: true,
        }));
        console.log(error);
      }
    }
    fetchCountries();
  }, []);

  console.log(response);
  if (response.isLoading) {
    <h1>Loading...</h1>;
  }
  if (response.isError) {
    <h1>Errror</h1>;
  }

  const handleCountry = (country: Record<string, any>) => {
    navigate("/country", { state: { key: country } });
  };

  return (
    <div>
      {
        <ul>
          {currentItems?.map((country: Record<string, any>, index:number) => (
            <div key={index} className="row-wrapper">
              <img
                src={country.flags.png}
                style={{ width: "24px", height: "12px" }}
              />
              <p key={index} style={{ textAlign: "start" }}>
                <a onClick={() => handleCountry(country)}>
                  {country.name.common}
                </a>
              </p>
            </div>
          ))}
        </ul>
      }

      <div>
        <CustomPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}
