import UserInfo from './UserInfo'

function FoodMenu({ user,setCartCount }) {
  return (
    <>
      <h2>FOOD MENU</h2>
      <button onClick={() => setCartCount(a=>a+1)}>Add Pizza - ₹299</button>
      <button onClick={() => setCartCount(a=>a+1)}>Add Burger - ₹149</button>
      <button onClick={() => setCartCount(a=>a+1)}>Add Pasta - ₹199</button>
      
      <hr />
      <UserInfo user={user} />
    </>
  )
}

export default FoodMenu
