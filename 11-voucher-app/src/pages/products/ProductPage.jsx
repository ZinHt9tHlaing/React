import Breadcrumb from "../../components/BreadCrumb";
import Container from "../../components/Container";
import ProductList from "../../components/products/ProductList";

const ProductPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"Product Module"} />
        <ProductList />
      </Container>
    </section>
  );
};

export default ProductPage;
