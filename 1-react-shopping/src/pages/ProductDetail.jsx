import { useParams } from "react-router-dom";
import products from "../data/products";
import Container from "../components/Container";
import Rating from "../components/products/Rating";
import Breadcrumb from "../components/Breadcrumb";

const ProductDetail = () => {
  const { productId } = useParams();

  // const currentProduct = products.find(
  //   (product) => product.id === parseInt(productId)
  // );

  const currentProduct = products.find((product) => product.id == productId);
  // console.log(currentProduct);

  return (
    <Container>
      <Breadcrumb currentPageTitle={"ProductDetail"} />
      <div className="border-2 border-black rounded-md p-10">
        <div className="grid grid-cols-2">
          <div className=" col-span-1">
            <img
              src={currentProduct.image}
              className=" w-3/4 block mx-auto hover:-rotate-3 duration-300"
            />
          </div>
          <div className=" col-span-1 flex flex-col items-start gap-5">
            <h3 className=" font-bold text-3xl">{currentProduct.title}</h3>
            <p className=" bg-gray-200 rounded-md text-gray-700 inline-block px-5 py-1">
              {currentProduct.category}
            </p>
            <p>{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />
            <div className=" flex justify-between items-center w-full">
              <p className=" font-medium">Price ($ {currentProduct.price})</p>
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
