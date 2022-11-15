import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="bg-primary px-4 py-6 flex justify-between items-center font-rose cursor-pointer border-b border-[#ccc]">
      <div className="w-32 sm:w-40">
        <img src={logo} alt="logo" />
      </div>
      <ul className="hidden sm:flex justify-between items-center gap-10 text-xl sm:text-base">
        <li>Home</li>
        <li>Place to Stay</li>
        <li>NFTs</li>
        <li>Community</li>
      </ul>
      <div>
        <button className="px-3 py-2 bg-secondary rounded-[10px] text-primary text-xs">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Header;
