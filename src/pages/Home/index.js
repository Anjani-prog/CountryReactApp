import React, { useState, useContext } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { CountryContext } from "../../context";

function Home() {
  const { setcountries } = useContext(CountryContext);
  const [Loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const fetchCountries = () => {
    setLoader(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setcountries(data);
      })
      .catch((errors) => console.log(errors))
      .finally(() => {
        setLoader(false);
        navigate("/countries");
      });
  };

  return (
    <>
      <div className="center">
        <h1>Welcome To the App...!</h1>
        <Button
          loading={Loader}
          disabled={Loader}
          onClick={() => fetchCountries()}
        >
          Get Countries
        </Button>
      </div>
    </>
  );
}

export default Home;
