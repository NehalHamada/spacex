import Logo from "./Logo";

function Footer() {
  return (
    <footer className="mt-5 border-t bg-muted/30">
      <div className="mx-auto flex flex-col gap-6 px-4 py-3 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-center">
        <div className="space-y-3 text-center">
          <Logo />
          <p className="max-w-md text-sm text-muted-foreground">
            Explore SpaceX launches, view mission details, and understand launch
            trends through a clean analytics dashboard.
          </p>
          <p className="max-w-md text-sm text-muted-foreground">
            &copy;2026 SpaceX Mission Dashboard
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
