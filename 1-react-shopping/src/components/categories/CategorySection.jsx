import Container from "../Container";
import CategoryBtn from "./CategoryBtn";

const CategorySection = () => {
  const title = "Product Categories";
  const categories = [
    "electronics",
    "jewelry",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <section id="category-section" className="p-5">
      <Container>
        <p className=" text-sm text-gray-500 mb-3">{title}</p>
        <div className=" flex overflow-scroll category-btn">
          <CategoryBtn categoryName="All" current={true} />
          {categories.map((category, i) => (
            <CategoryBtn key={i} categoryName={category} current={false} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
