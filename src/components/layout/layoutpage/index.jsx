import { Footers, LandingPage, ListMachine, Navbar } from "../../oragnism";
export const LayoutPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <LandingPage />
        <ListMachine />
      </main>
      <footer>
        <Footers />
      </footer>
    </>
  );
};
