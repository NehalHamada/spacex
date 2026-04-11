import Logo from "./Logo";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/40 backdrop-blur supports-backdrop-filter:bg-background/70">
      <div className="mx-auto flex justify-center">
        <Logo />
      </div>
    </header>
  );
}

export default Navbar;
