import Breadcrumb from "../../components/BreadCrumb";
import Container from "../../components/Container";
import ProductEditCard from "../../components/products/ProductEditCard";

const ProductEditPage = () => {
  return (
    <div>
      <Container>
        <Breadcrumb
          currentPageTitle={"Edit Product"}
          links={[{ title: "Product Module", path: "/product" }]}
        />
        <ProductEditCard />
      </Container>
    </div>
  );
};

export default ProductEditPage;
