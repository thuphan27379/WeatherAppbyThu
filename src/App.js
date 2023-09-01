// fetch data from API with useEffect
import React, { useState, useEffect } from "react";

const api = {
  key: "1acde3f7d0c9db2f0b808ca933d86888",
  base: "https://api.openweathermap.org/data/2.5/",
};

// function fetch data: fetchWeatherData
function App() {
  const [searchInput, setSearchInput] = useState(""); //input value
  const [searchCity, setSearchCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(""); //ket qua cua fetch
  const [loading, setLoading] = useState("false"); //dang cho doi
  const [errorMessage, setErrorMessage] = useState(""); //thong bao khi co loi

  useEffect(() => {
    // fetch data
    const fetchWeatherData = async () => {
      // use async function
      if (!searchCity) return;
      // console.log("Searching")
      //
      setLoading(true); //bat dau
      // loading process, nam giua 2 setloading bat dau va ket thuc
      try {
        const url = `${api.base}weather?q=${searchCity}&units=metric&appid=${api.key}`;
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
          // setWeatherInfo(JSON.stringify(data));
          setWeatherInfo(
            `${data.name} ${data.sys.country}, ${data.weather[0].description}, ${data.main.temp} degree.`
          );
          setErrorMessage("");
        } else {
          setErrorMessage(data.message);
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
      setLoading(false); //ket thuc
      //
    };
    fetchWeatherData(); //goi function ngay ben trong useEffect nay
  }, [searchCity]); //dependency chi khi searchcity thay doi, chi thuc hien sau khi click button

  const handleSubmit = (e) => {
    //step 2:
    e.preventDefault();
    setSearchCity(searchInput); //goi function setsearchcity voi gia tri la searchinput
  };

  return (
    //render
    <>
      <h1>Fetch data from API with useEffect</h1>
      <form onSubmit={handleSubmit}>
        <input
          // step 1: get value & click
          // key={}
          type="text"
          placeholder="City"
          value={searchInput} //value
          onChange={(e) => setSearchInput(e.target.value)} //event
        />
        &nbsp;
        <button>Search</button>
      </form>
      <br />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {errorMessage ? (
            <div style={{ color: "red" }}>{errorMessage}</div>
          ) : (
            <div>{weatherInfo}</div>
          )}
        </>
      )}
    </>
  );
}

export default App;
