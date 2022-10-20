import { React, useState } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import Test from "../components/test";

const HomePage = () => {
  const auth = "563492ad6f91700001000001ac22187f3df749b5ac359637c75cb9b5";

  const [myPhotos, setMyPhotos] = useState([]);

  const goSearch = async () => {
    let myurl = "https://api.pexels.com/v1/search?query=nature&per_page=1";
    const dataFetch = await fetch(myurl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setMyPhotos(parsedData.photos);
  };

  return (
    <div>
      <Test />
      <h1>HomePage</h1> <Search goSearch={goSearch} />
      <img
        src="https://www.pexels.com/photo/mountain-covered-snow-under-star-572897"
        alt=""
      />
      <div className="myPhotos">
        {myPhotos &&
          myPhotos.map((myP) => {
            return <Picture content={myP} key={myP} />;
          })}
      </div>
    </div>
  );
};

export default HomePage;
