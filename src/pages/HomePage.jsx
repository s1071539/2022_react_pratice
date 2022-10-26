import { React, useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import Test from "../components/test";

const HomePage = () => {
  const auth = "563492ad6f91700001000001ac22187f3df749b5ac359637c75cb9b5";

  const curatedURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";

  const [myPhotos, setMyPhotos] = useState([]);

  const fetchPhoto = async (url) => {
    console.log(url);
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setMyPhotos(parsedData.photos);
  };

  useEffect(() => {
    fetchPhoto(curatedURL);
  }, []);

  return (
    <div>
      <h1>HomePage</h1> <Search fetchPhoto={fetchPhoto} />
      <div className="myPhotos">
        {myPhotos &&
          myPhotos.map((myP, index) => {
            return <Picture content={myP} key={index} />;
          })}
      </div>
    </div>
  );
};

export default HomePage;
