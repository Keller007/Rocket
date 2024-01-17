import { Wrapper } from "../components/wrapper";
import { rocketsData } from "../components/constant";

export const Rockets = () => {
  return (
    <Wrapper title="Our Rockets" id="rockets">
     
        {rocketsData.map((rocket) => (
          <li
            className="  flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2  py-6 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6"
            key={rocket.id}
          >
            <img src={rocket.image} alt="rocket.name" />
            <h3 className="text-center text-3xl text-slate-900 dark:text-white ">
              {rocket.name}
            </h3>
            <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400  sm:block">
              {rocket.price}
            </p>
            <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden   ">
              {rocket.price}
            </p>
          </li>
        ))}
      
    </Wrapper>
  );
};
