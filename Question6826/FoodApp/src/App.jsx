import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UserContext from "./context/UserContext";

function App() {

  const user = {
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    location: "Chandigarh",
  };

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    console.log(`Cart updated. Total items: ${cartCount}`);
  }, [cartCount]);

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>FOOD ORDERING APP</h1>

        <Navbar user={user} cartCount={cartCount} />

        <Home
          cartCount={cartCount}
          setCartCount={setCartCount}
        />
      </div>
    </UserContext.Provider>
  );
}

export default App;