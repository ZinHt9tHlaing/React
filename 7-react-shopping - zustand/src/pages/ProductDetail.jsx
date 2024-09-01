import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Rating from "../components/products/Rating";
import Breadcrumb from "../components/Breadcrumb";
import useProductStore from "../store/useProductStore";

const ProductDetail = () => {
  const { productSlug } = useParams();

  const { products } = useProductStore();

  // const currentProduct = products.find(
  //   (product) => product.id === parseInt(productSlug)
  // );

  const currentProduct = products.find((product) => product.slug == productSlug);
  // console.log(currentProduct);

  return (
    <Container className={"px-5"}>
      <Breadcrumb currentPageTitle={"ProductDetail"} />
      <div className="border-2 border-black rounded-md mb-3 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className=" col-span-1">
            <img
              src={currentProduct.image}
              className=" w-[30%] md:w-[70%] md:hauto block mb-5 md:mb-0 md:mx-auto hover:-rotate-3 duration-300"
            />
          </div>
          <div className=" col-span-1 flex flex-col items-start gap-5">
            <h3 className=" font-bold text-2xl">{currentProduct.title}</h3>
            <p className=" bg-gray-200 rounded-md text-gray-700 inline-block px-5 py-1">
              {currentProduct.category}
            </p>
            <p>{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />
            <div className="flex justify-between items-center w-full">
              <p className="font-medium">Price ($ {currentProduct.price})</p>
              <button className=" border-2 border-black font-medium rounded-md text-sm px-4 py-1 hover:bg-black hover:text-white active:scale-95 duration-200">
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
