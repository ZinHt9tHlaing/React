import "./style.css";

const fetchBtn = document.querySelector("#fetchBtn");

const handleFetchBtn = async () => {

  const res = await fetch("https://fakestoreapi.com/products/1")
  const data = await res.json();
  console.log(data);

  // const res = fetch("https://fakestoreapi.com/products/1")
  //   .then((data) => data.text())
  //   .then((result) => console.log(JSON.parse(result)));

  // new Promise(function (resolve, reject) {
  //   setTimeout(() => {
  //     const value = Math.floor(Math.random() * 10);
  //     console.log(value);
  //     if (value > 5) {
  //       resolve(value);
  //     } else {
  //       reject(value);
  //     }
  //   }, 1000);
  // }).then(
  // todo: resolve
  //   function (x) {
  //     console.log("success", x);
  //   },
  // todo: reject
  //   function (y) {
  //     console.log("fail", y);
  //   }
  // );
  // let x = 0;
  // const p = new Promise(function (resolve, reject) {
  //   setTimeout(() => {
  //     resolve(5);
  //   }, 2000);
  // });
  // p.then(function (data) {
  //   x = data;
  //   console.log(x === 5 ? "good" : "bad");
  // });
  // console.log("U click");
  //   fetch("http://localhost:5000/tasks")
  //     .then((res) => res.text())
  //     .then((data) => {
  // todo: Json string to Js object
  //       console.log(JSON.parse(data));
  //     });
  // fetch("http://localhost:5000/tasks")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
};

fetchBtn.addEventListener("click", handleFetchBtn);
