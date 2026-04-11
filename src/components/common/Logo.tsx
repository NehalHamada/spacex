import { Link } from "react-router-dom";
import logo from "/logo.png";

function Logo() {
  return (
    <Link to="/" className="inline-flex items-center  gap-3">
      <img src={logo} alt="" className="h-30 w-30 object-contain" />
    </Link>
  );
}

export default Logo;
