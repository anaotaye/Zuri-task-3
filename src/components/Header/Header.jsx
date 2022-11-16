import logo from "../../assets/logo.svg";
import wolfIcon from "../../assets/wolf_icon.svg";
import walletIcon from "../../assets/wallet_icon.svg";
import Modal from "react-modal";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="bg-primary px-4 py-6 flex justify-between items-center font-rose border-b border-[#ccc]">
        <div className="w-32 sm:w-40">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="hidden lg:flex justify-between items-center gap-10 text-xl sm:text-base">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Place to Stay</Link>
          </li>
          <li>
            <a href="/">NFTs</a>
          </li>
          <li>
            <a href="/">Community</a>
          </li>
        </ul>
        <div className="hidden md:flex">
          <button
            onClick={openModal}
            className="px-3 py-2 bg-secondary rounded-[10px] text-primary text-xs"
          >
            Connect Wallet
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="relative flex flex-col justify-center  items-center h-full  w-full bg-primary/10"
          >
            <div className="w-96 mx-auto border-2 rounded-2xl border-primary bg-primary pl-2">
              <div className="w-full flex justify-between items-center p-3">
                <h3 className="font-bold font-rose text-lg">Connect Wallet</h3>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    onClick={closeModal}
                    className="cursor-pointer"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                  </svg>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center p-3">
                <p className="text-sm text-gray-400 font-rose">
                  Choose your preferred wallet:
                </p>
                <ul className="my-3 flex flex-col justify-center gap-3">
                  <li>
                    <a
                      href="/"
                      className="flex justify-between items-center w-full px-3 py-1 rounded-md border border-[#ddd]"
                    >
                      <span className="inline-flex justify-start items-center">
                        <img src={wolfIcon} className="w-12 h-12" alt="icon" />
                        <span className="ml-5 font-bold text-lg font-sora">
                          Metamask
                        </span>
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
                        <img
                          src={walletIcon}
                          className="w-12 h-12"
                          alt="icon"
                        />
                        <span className="ml-5 font-semibold text-lg font-sora">
                          WalletConnect
                        </span>
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
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-100" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-black rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Qroniswap"
                      title="Qroniswap"
                      className="inline-flex items-center"
                    >
                      <span>Metabnb</span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-200" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-8">
                    <li>
                      <a
                        href="/"
                        aria-label="trade"
                        title="trade"
                        className="inline-flex items-center font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                      >
                        <span>Trade</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="text-gray-500 h-5 w-5 ml-2"
                            fill="currentColor"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="earn"
                        title="earn"
                        className="inline-flex items-center font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                      >
                        <span>Earn</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="text-gray-500 h-5 w-5 ml-2"
                            fill="currentColor"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="win"
                        title="win"
                        className="inline-flex items-center font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                      >
                        <span>Win</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="text-gray-500 h-5 w-5 ml-2"
                            fill="currentColor"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                          </svg>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul className="space-y-8">
                    <li className="mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        className="h-10 w-10 text-white"
                        fill="currentColor"
                      >
                        <path d="M7 40c-.8 0-1.5-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1V11c0-.8.3-1.5.9-2.1C5.5 8.3 6.2 8 7 8h34c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1v26c0 .8-.3 1.5-.9 2.1-.6.6-1.3.9-2.1.9H7Zm0-17.1h34v-6.45H7v6.45Z" />
                      </svg>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="rounded-[8px] [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row p-[10px_18px] box-border items-center justify-center cursor-pointer hover:opacity-50"
                        aria-label="Connect Wallet"
                        title="Connect Wallet"
                      >
                        Connect Wallet
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Header;
