import logo from "../../assets/logo.svg";
import wolfIcon from "../../assets/wolf_icon.svg";
import walletIcon from "../../assets/wallet_icon.svg";
import Modal from "react-modal";
import { useState } from "react";

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(true);

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
          className="relative flex flex-col justify-center items-center h-full w-full"
        >
          <div className="w-96 mx-auto bg-primary rounded-md pl-2">
            <div className="w-full flex justify-between items-center border-b border-[#ddd] p-3">
              <h3 className="font-semibold text-lg">Connect Wallet</h3>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  onClick={closeModal}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                </svg>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center p-3">
              <p className="text-sm text-gray-400">
                Choose your preferred wallet:
              </p>
              <ul className="my-3 flex flex-col justify-center">
                <li>
                  <a
                    href="/"
                    className="flex justify-between items-center w-full px-3 py-1 rounded-md border border-[#ddd]"
                  >
                    <span className="inline-flex justify-start items-center">
                      <img src={wolfIcon} className="w-12 h-12" alt="icon" />
                      <span className="ml-5 font-semibold text-lg">Metamask</span>
                    </span>
                    <span className="inline-flex justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="flex justify-between items-center w-full px-3 py-1 rounded-md border border-[#ddd]"
                  >
                    <span className="inline-flex justify-start items-center">
                      <img src={walletIcon} className="w-12 h-12" alt="icon" />
                      <span className="ml-5 font-semibold text-lg font-sora">WalletConnect</span>
                    </span>
                    <span className="inline-flex justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
