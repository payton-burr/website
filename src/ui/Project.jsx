function Project({ children }) {
  // console.log(children);
  return (
    <section className="not-prose bg-slate-100 dark:bg-zinc-800/20 my-4 p-4 rounded-md max-w-xs md:min-w-full md:flex">
      {children}
    </section>
  );
}

export default Project;
