import { Link } from "@remix-run/react";
import React from "react";
interface LinkProps {
  name: string;
  to: string;
}
const LinkRouter: React.FC<LinkProps> = ({ name, to }) => {
  return (
    <div className="mt-7">
      <Link
        to={to}
        className="bg-blue-800 rounded-md hover:bg-blue-900 p-3 px-9 poppins"
      >
        {name}
      </Link>
    </div>
  );
};
export default LinkRouter;
