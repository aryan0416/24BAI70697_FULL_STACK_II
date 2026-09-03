function Navbar({ user, cartCount }) {
  return (
    <>
      <h2>Welcome, {user.name}</h2>
      <p>Location: {user.location}</p>
      <h3>Cart: {cartCount} items</h3>
      <hr />
    </>
  )
}

export default Navbar
