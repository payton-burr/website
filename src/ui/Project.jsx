function Project({ children }) {
  // console.log(children);
  return (
    <div className="not-prose bg-zinc-800 m-4 p-4 rounded-md max-w-xs">
      {children}
    </div>
  );
}

export default Project;
