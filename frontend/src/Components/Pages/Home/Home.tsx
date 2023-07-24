import "./Home.css";

function Home(): JSX.Element {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => console.log(json));
  return <div className="Home">this is home</div>;
}

export default Home;
