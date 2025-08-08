import { useState } from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col h-fit relative">
      <Navbar onMenuToggle={() => setMenuOpen(!menuOpen)} />

      <div className="hidden md:block">
        <Menu />
      </div>

      <Menu
        mobile
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
