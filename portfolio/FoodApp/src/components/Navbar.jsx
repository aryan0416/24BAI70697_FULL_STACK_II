import useUser from "../hooks/useUser";

function Navbar({ cartCount }) {

  const user = useUser();

  return (
    <>
      <h2>Welcome, {user.name}</h2>

      <p>
        Location: {user.location}
      </p>

      <h3>Cart: {cartCount} items</h3>

      <hr />
    </>
  );
}

export default Navbar;