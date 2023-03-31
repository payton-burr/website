function Project({ children }) {
  // console.log(children);
  return (
    <div className="not-prose bg-zinc-800 m-4 p-4 rounded-md max-w-xs md:max-w-lg md:flex">
      {children}
    </div>
  );
}

export default Project;
