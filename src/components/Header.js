import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="wrapper">
      <Link to="/" className="logo">
        Most Wanted
      </Link>
    </div>
  );
};

export default Header;
