
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 group">
      <span className="text-xl md:text-2xl font-bold transition-all duration-500 ease-in-out
        bg-gradient-to-r from-primary via-primary/90 to-primary/70 
        dark:from-primary dark:via-primary/90 dark:to-sky-400
        bg-clip-text text-transparent 
        group-hover:tracking-wider group-hover:bg-gradient-to-r group-hover:from-primary/90 group-hover:via-primary group-hover:to-blue-500
        relative overflow-hidden">
        MyLife
        <span className="relative z-10 bg-gradient-to-br from-primary to-blue-500 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-primary">Tips</span>
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
      </span>
    </Link>
  );
};

export default NavLogo;
