import { data } from "autoprefixer";
import "./style.css";

const fetchBtn = document.querySelector("#fetchBtn");

const handleFetchBtn = () => {
  console.log("U click");
  //   fetch("http://localhost:5000/tasks")
  //     .then((res) => res.text())
  //     .then((data) => {
  //       // json string to json object
  //       console.log(JSON.parse(data));
  //     });

  fetch("http://localhost:5000/tasks")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

fetchBtn.addEventListener("click", handleFetchBtn);
