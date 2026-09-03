import FoodMenu from './FoodMenu'

function Restaurant({ user, setCartCount }) {
  return <FoodMenu user={user} setCartCount={setCartCount} />
}

export default Restaurant
