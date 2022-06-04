import {
  ProductCard,
  ProductImg,
  ProductName,
  ProductCategory,
  ProductPrice,
  ProductButton,
} from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Product({
  product,
  addCart,
  currentSale,
  filteredProducts,
}) {

  function add () {
    toast.success("Produto adicionado", {
      position: "bottom-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: 1,
    });
  }

  function renderize () {
   return ((currentSale[0] === undefined)
    ? addCart(product)
    : currentSale.some((item) => product.id === item.id)
    ? (addCart(currentSale.find((item) => item.id === product.id)),
      add())
    : (addCart(product), add()));
  }
  
  return (
    <ProductCard key={product.id}>
      <ProductImg image={product.img} />
      <ProductName>{product.name}</ProductName>
      <ProductCategory>{product.category}</ProductCategory>
      <ProductPrice>
        R$ {product.price.toFixed(2).toString().replace(".", ",")}
      </ProductPrice>
      <ProductButton
        onClick={() => {
          add();
          renderize();
        }}
      >
        Adicionar
      </ProductButton>
      <ToastContainer
        onClick={add}
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ transform: "scale(0.6)" }}
      />
    </ProductCard>
  );
}
