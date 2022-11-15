import logo from "../../assets/logo.svg";
import wolfIcon from "../../assets/wolf_icon.svg";
import walletIcon from "../../assets/wallet_icon.svg";
import cancel from "../../assets/cancel.svg";
import arrow from "../../assets/arrow.svg";
import Modal from "react-modal";
import { useState } from "react";

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
        <button
          onClick={openModal}
          className="px-3 py-2 bg-secondary rounded-[10px] text-primary text-xs"
        >
          Connect Wallet
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="w-1/2 h-2/3 mx-auto"
        >
          <div className="flex">
            <h3 className="font-semibold">Connect Wallet</h3>
            <img onClick={closeModal} src={cancel} alt="close" />
          </div>
          <div className="block">
            <p>Choose your preferred wallet:</p>
            <div>
              <button className="border border-border ">
                div
                <img src={wolfIcon} alt="icon" />
                <p>Metamask</p>
                <img src={arrow} alt="enter" />
              </button>
              <button>
                <img src={walletIcon} alt="icon" />
                <p>WalletConnect</p>
                <img src={arrow} alt="enter" />
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
