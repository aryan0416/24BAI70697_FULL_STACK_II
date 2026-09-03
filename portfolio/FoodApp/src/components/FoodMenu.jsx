import UserInfo from "./UserInfo";

function FoodMenu({ cartCount, setCartCount }) {

  return (
    <>
      <h2>FOOD MENU</h2>

      <div>Pizza - ₹299 <button onClick={() => setCartCount(cartCount + 1)}>Add to Cart</button></div>
      <br />
      <div>Burger - ₹149<button onClick={() => setCartCount(cartCount + 1)}>Add to Cart</button></div>
      <br />
      <div>Pasta - ₹199<button onClick={() => setCartCount(cartCount + 1)}>Add to Cart</button></div>
      <hr />
      <UserInfo />
    </>
  );
}

export default FoodMenu;