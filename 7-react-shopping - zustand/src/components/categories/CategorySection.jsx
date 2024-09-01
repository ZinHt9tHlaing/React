import useCategoryStore from "../../store/useCategoryStore";
import Container from "../Container";
import CategoryBtn from "./CategoryBtn";

const CategorySection = () => {
  const title = "Product Categories";
  const { categories } = useCategoryStore();

  return (
    <section id="category-section" className="p-5">
      <Container>
        <p className=" text-sm text-gray-500 mb-3">{title}</p>
        <div className=" flex overflow-scroll category-btn">
          {/* <CategoryBtn categoryName="All" current={true} /> */}
          {categories.map((category) => (
            <CategoryBtn key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
