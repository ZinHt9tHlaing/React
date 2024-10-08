import { Link } from "react-router-dom";
import Container from "./Container";

const Header = () => {
  return (
    <header className="mb-5">
      <Container>
        <Link to={"/"}>
          <h1 className="text-3xl font-bold">Voucher App</h1>
        </Link>
        <p className="text-neutral-500">MMS Software</p>
      </Container>
    </header>
  );
};

export default Header;
