import useCategoryStore from "../../store/useCategoryStore";
import useProductStore from "../../store/useProductStore";
import Container from "../Container";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  const { products } = useProductStore();
  const { categories } = useCategoryStore();

  const currentCategory = categories.find((el) => el.isActive === true);

  return (
    <section className="px-5 mb-5">
      <Container>
        <p className=" text-sm text-gray-500 mb-3">Available Product Lists</p>
        <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products
            .filter(
              (el) =>
                currentCategory.name === "All" ||
                el.category === currentCategory.name
            )
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
