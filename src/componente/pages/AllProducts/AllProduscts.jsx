import React from "react";
import { useState, useEffect } from "react";

export default function AllProducts() {
  const [data, setData] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://imdb146.p.rapidapi.com/v1/find/?query=love";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "f570871e4emsh4b47b548b95dfeep199f97jsn61147652d32b",
          "X-RapidAPI-Host": "imdb146.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello page</h1>
      <div></div>
    </div>
  );
}
