function Button({ children, ...rest }) {
  return (
    <button
      {...rest}
      className="bg-slate-200 dark:bg-zinc-800 py-1 px-2 rounded-sm text-xs md:text-sm mr-1 mt-1"
    >
      {children}
    </button>
  );
}

export default Button;
