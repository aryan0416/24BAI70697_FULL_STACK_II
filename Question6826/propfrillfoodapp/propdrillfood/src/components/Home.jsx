import Restaurant from './Restaurant'

function Home({ user, setCartCount }) {
  return <Restaurant user={user}  setCartCount={setCartCount} />
}

export default Home
