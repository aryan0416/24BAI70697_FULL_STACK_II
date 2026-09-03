import FoodMenu from "./FoodMenu";

function Restaurant({ user, cartCount, setCartCount }) {

  return (
    <FoodMenu
      user={user}
      cartCount={cartCount}
      setCartCount={setCartCount}
    />
  );
}

export default Restaurant;