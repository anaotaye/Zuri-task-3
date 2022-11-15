import React from "react";
import logo from "../../assets/footer_logo.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-tertiary pl-4 text-primary flex flex-col-reverse md:flex-row md:justify-between md:items-center md:px-14 pt-8 pb-9 cursor-pointer font-rose">
      <div className="mt-4">
        <img className="w-28 sm:w-40 mb-2" src={logo} alt="logo" />
        <div className="flex gap-3 my-4 md:my-9">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
        </div>
        <p>&copy; 2022 Metanb</p>
      </div>

      <ul>
        <li className="font-bold text-lg mb-2 xlg:text-2xl mt-4 gap-x-5">
          Community
        </li>
        <li className="text-sm xlg:text-lg mb-2">NFT</li>
        <li className="text-sm xlg:text-lg mb-2">Tokens</li>
        <li className="text-sm xlg:text-lg mb-2">Landlords</li>
        <li className="text-sm xlg:text-lg">Discord</li>
      </ul>

      <ul>
        <li className="font-bold text-lg mb-2 xlg:text-2xl mt-4">Places</li>
        <li className="text-sm xlg:text-lg mb-2">Castle</li>
        <li className="text-sm xlg:text-lg mb-2">Farms</li>
        <li className="text-sm xlg:text-lg mb-2">Beach</li>
        <li className="text-sm xlg:text-lg">Learn More</li>
      </ul>

      <ul>
        <li className="font-bold text-lg mb-2 xlg:text-2xl mt-4 gali-x-5">
          About us
        </li>
        <li className="text-sm xlg:text-lg mb-2">Road Map</li>
        <li className="text-sm xlg:text-lg mb-2">Creators</li>
        <li className="text-sm xlg:text-lg mb-2">Career</li>
        <li className="text-sm xlg:text-lg">Contact us</li>
      </ul>
    </div>
  );
};

export default Footer;
