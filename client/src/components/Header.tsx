import { useNavigate } from "react-router-dom";
import Theme from "./theme";
import { BsChatFill } from "react-icons/bs";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-none flex justify-between items-center px-6 sm:px-12 lg:px-16 py-4 backdrop-blur-xl shadow-lg bg-neutral-100 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 h-16">
      <button
        onClick={() => navigate("/")}
        className="font-extrabold font-bricolage-grotesque text-2xl sm:text-3xl flex gap-3 items-center"
      >
        Chattr <BsChatFill />
      </button>
      <Theme />
    </div>
  );
};

export default Header;
