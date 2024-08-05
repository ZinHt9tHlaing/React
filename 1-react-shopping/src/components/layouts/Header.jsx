import { Link } from "react-router-dom";
import Container from "../Container";

const Header = () => {
  return (
    <header className="px-5 py-5">
      <Container>
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold">
            Online Shop
          </Link>
          <Link
            to={"/my-cart"}
            className=" border-2 border-black font-medium rounded-md px-5 py-2 relative active:scale-95 hover:bg-black hover:text-white duration-200"
          >
            My Cart
            <span className=" absolute top-0 font-medium rounded right-0 translate-x-1/2 -translate-y-1/2 inline-block bg-red-500 text-xs text-white px-3 py-1">
              1
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
