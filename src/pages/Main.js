import { useState, useEffect, useCallback } from "react";
import { getWeatherData } from "../services/WeatherService";
import Search from "../components/Search";
import Weather from "../components/Weather";
// import Carousel from "../components/Carousel";

const Main = () => {
  const title = "In-Class Weather";
  const persistedLocation = localStorage.getItem("searchTerm");
  const [searchTerm, setSearchTerm] = useState(persistedLocation || "95054");
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState(searchTerm || '');
  const fetchDataCallback = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getWeatherData(location);
      setWeatherData(res.data.list);
      setLoading(false);
      setError(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  }, [location]);

  useEffect(() => {
    fetchDataCallback();
  }, [fetchDataCallback]);

  useEffect(() => {
    localStorage.setItem("searchTerm", searchTerm);
  }, [searchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocation(searchTerm);
  };


  return (
      <main>
        <h1 className='title-label'>{title}</h1>
        {/* <Notes /> */}
        <Search
          handleChange={(e) => setSearchTerm(e.target.value)}
          handleSubmit={handleSubmit}
          searchTerm={searchTerm}
          isFocused={true}
        >
          <label htmlFor="search">
            <strong>Search: {searchTerm}</strong>
          </label>
        </Search>
        {error && <p>There was an error loading your data</p>}
        {loading ? <p>Data Loading</p> : <Weather weatherData={weatherData} />}
        {/* <Carousel/> */}
      </main>
  );
}

export default Main;