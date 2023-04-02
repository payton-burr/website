function Project({ children }) {
  // console.log(children);
  return (
    <div className="not-prose bg-zinc-800 my-4 p-4 rounded-md max-w-xs md:max-w-xl md:flex">
      {children}
    </div>
  );
}

export default Project;
