import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import { useState } from "react";

const Homepage = () => {
  const [isSurpriseClicked, setSurpriseClicked] = useState(false);
  const [isButtonClicked, setisButtonClicked] = useState(true);

  const handleSurprise = () => {
    // Set the state to true when the button is clicked
    setSurpriseClicked(true);
    setisButtonClicked(false);
  };

  return (
    <>
      <Header />
      <Navbar />
      { isButtonClicked &&

        <div className="container align-items-center d-flex justify-content-center" style={{ height: '80vh' }}>        <button
        className="btn btn-success my-2 my-sm-0"
        type="submit"
        onClick={handleSurprise} 
      >
        Surprise!!
      </button>
      </div>
      }
      {isSurpriseClicked && <Banner />}
  
    </>
  );
};

export default Homepage;
