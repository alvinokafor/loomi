import CartProductImg from "./partials/cart-product-img";
import CardProductInfo from "./partials/cart-product-info";
import DeleteCartItem from "./partials/delete-cart-item";

export default function CartCard() {
  return (
    <div className="flex items-start justify-between border-b pb-8">
      <div className="flex">
        <CartProductImg />
        <CardProductInfo />
      </div>

      <DeleteCartItem />
    </div>
  );
}
