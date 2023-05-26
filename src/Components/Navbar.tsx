const Navbar = () => {
  return (
    <div className="bg-accent h-12 text-text flex flex-row">
      <div className="h-full w-1/2 flex items-center pl-8">
        <a className="font-semibold" href="/">
          Home
        </a>
      </div>
      <div className="h-full w-1/2 flex items-center justify-end"></div>
    </div>
  );
};

export default Navbar;
