import React from "react";
import logo from "../../assets/footer_logo.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-tertiary pl-4 text-primary flex flex-col-reverse md:flex-row md:justify-between md:items-center md:px-14 pt-8 pb-9 font-rose">
      <div className="mt-4">
        <img className="w-28 sm:w-40 mb-2" src={logo} alt="logo" />
        <div className="flex gap-3 my-4 md:my-9">
          <a href="/">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="/">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="/">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
        <p>&copy; 2022 Metanb</p>
      </div>

      <ul>
        <li className="font-bold text-lg mb-2 xlg:text-2xl mt-4 gap-x-5">
          <a href="/">Community</a>
        </li>
        <li className="text-sm xlg:text-lg mb-2">
          <a href="/">NFT</a>
        </li>
        <li className="text-sm xlg:text-lg mb-2">
          <a href="/">Tokens</a>
        </li>
        <li className="text-sm xlg:text-lg mb-2">
          <a href="/">Landlords</a>
        </li>
        <li className="text-sm xlg:text-lg">
          <a href="/">Discord</a>
        </li>
      </ul>

      <ul>
        <li className="font-bold text-lg mb-2 xlg:text-2xl mt-4">
          <a href="/">Places</a>
        </li>
        <li className="text-sm xlg:text-lg mb-2">
          <a href="/">Castle</a>
        </li>
        <li className="text-sm xlg:text-lg mb-2">
          <a href="/">Farms</a>
        </li>
        <li className="text-sm xlg:text-lg mb-2">
          <a href="/">Beach</a>
        </li>
        <li className="text-sm xlg:text-lg">
          <a href="/">Learn More</a>{" "}
        </li>
      </ul>

      <ul>
        <li className="font-bold text-lg mb-2 xlg:text-2xl mt-4 gali-x-5">
          <a href="/">About us</a>
        </li>
        <li className="text-sm xlg:text-lg mb-2">
          <a href="/">Road Map</a>
        </li>
        <li className="text-sm xlg:text-lg mb-2">
          <a href="/">Creators</a>
        </li>
        <li className="text-sm xlg:text-lg mb-2">
          <a href="/">Career</a>
        </li>
        <li className="text-sm xlg:text-lg">
          <a href="/">Contact us</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
