import Restaurant from "./Restaurant";

function Home({ cartCount, setCartCount }) {

  return (
    <Restaurant
      cartCount={cartCount}
      setCartCount={setCartCount}
    />
  );
}

export default Home;