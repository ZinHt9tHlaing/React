import { Link } from "react-router-dom";

const ModuleBtn = ({ name, icon, url }) => {
  return (
    <Link
      to={url}
      className="flex flex-col h-full gap-3 items-center bg-blue-600 text-white p-5 rounded-lg hover:ring-2 hover:ring-gray-700 duration-300"
    >
      {icon} {name}
    </Link>
  );
};

export default ModuleBtn;
