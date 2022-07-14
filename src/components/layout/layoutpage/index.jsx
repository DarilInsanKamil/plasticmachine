import { useRef } from "react";
import { Footers, LandingPage, ListMachine, Navbar } from "../../oragnism";

export const LayoutPage = () => {
  let element = useRef(null);
  const scrollToElement = () => element.current.scrollIntoView();
  // console.log(element)
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <LandingPage Scroll={scrollToElement} />
        <ListMachine refs={element} />
      </main>
      <footer>
        <Footers />
      </footer>
    </>
  );
};
