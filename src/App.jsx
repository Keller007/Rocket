import { Contact } from "./pages/Contact";
import { Header } from "./pages/Header";
import { Hero } from "./pages/Hero";
import { Rockets } from "./pages/Rockets";
import { Testimonials } from "./pages/Testimonials";

function App() {
  return (
    <div className="">
      <div className=" min-h-lvh bg-slate-50 dark:bg-black dark:text-white  ">
        <Header />
        <Hero />
        <Rockets />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
