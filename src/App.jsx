import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <main></main>
      <Footer></Footer>
    </>
  );
}

export default App;
