import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState, useEffect } from "react";

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
    <div style={{ padding: "20px" }}>
      <h1>FOOD ORDERING APP</h1>

      <Navbar user={user} cartCount={cartCount} />

      <Home
        user={user}
        setCartCount={setCartCount}
      />
    </div>
  );
}

export default App;