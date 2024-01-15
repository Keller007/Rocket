import { Header } from "./pages/Header";
import { Hero } from "./pages/Hero";

function App() {
  return (
    <div className="">
      <div className=" min-h-lvh bg-slate-50 dark:bg-black dark:text-white">
        <Header />
		<Hero />
      </div>
    </div>
  );
}

export default App;
