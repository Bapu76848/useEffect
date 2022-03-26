import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((r) => {
      setData(r.data[0].email);
    });
  }, []);

  return (
    <div className="App">
      Hello World
      <li>{data}</li>
    </div>
  );
}
