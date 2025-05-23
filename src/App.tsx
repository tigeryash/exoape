import Nav from "./Nav";
import Content from "./Content";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <>
      <Nav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isAnimating={isAnimating}
        setIsAnimating={setIsAnimating}
      />
      <Content isAnimating={isAnimating} />
    </>
  );
}

export default App;
