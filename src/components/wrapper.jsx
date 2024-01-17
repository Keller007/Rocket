export const Wrapper = ({ children, title, id }) => {
  return (
    <div className="mx-auto max-w-4xl scroll-mt-20" id={id}>
      <div className=" my-12 p-6">
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          {title}
        </h2>
        <ul className="mx-auto flex list-none flex-col items-center gap-8 sm:flex-row">
          {children}
        </ul>
      </div>
      <hr className="mx-auto w-1/2   bg-black dark:bg-white" />
    </div>
  );
};
