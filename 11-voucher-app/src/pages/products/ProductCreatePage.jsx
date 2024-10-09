import Breadcrumb from "../../components/BreadCrumb";
import Container from "../../components/Container";
import ProductCreateCard from "../../components/products/ProductCreateCard";

const ProductCreatePage = () => {
  return (
    <div>
      <Container>
        <Breadcrumb
          currentPageTitle={"Create Product"}
          links={[{ title: "Product Module", path: "/product" }]}
        />
        <ProductCreateCard />
      </Container>
    </div>
  );
};

export default ProductCreatePage;
