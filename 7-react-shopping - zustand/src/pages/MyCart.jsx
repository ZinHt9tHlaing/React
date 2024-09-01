import Breadcrumb from "../components/Breadcrumb";
import CartSection from "../components/cart/CartSection";
import Container from "../components/Container";

const MyCart = () => {
  return (
    <Container className={"flex-grow px-5"}>
      <Breadcrumb currentPageTitle={"My Cart"} />
      <CartSection />
    </Container>
  );
};

export default MyCart;
