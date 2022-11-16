import nfts from "../../assets/nfts_samples.svg";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import logo4 from "../../assets/logo4.svg";
import image1 from "../../assets/image1.svg";
import image2 from "../../assets/image2.svg";
import image3 from "../../assets/image3.svg";
import image4 from "../../assets/image4.svg";
import image5 from "../../assets/image5.svg";
import image6 from "../../assets/image6.svg";
import image7 from "../../assets/image7.svg";
import image8 from "../../assets/image8.svg";
import hero_img from "../../assets/hero.svg";
import stars from "../../assets/stars.svg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="font-rose">
        <div className="px-4 py-6 md:px-10 lg:flex lg:justify-between lg:items-center mx-auto flex smflex-col justify-center items-center">
          <div className="sm:max-w-lg">
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-center">
                Rent a <span className="text-secondary">Place</span> away from{" "}
                <span className="text-secondary">Home</span> in the{" "}
                <span className="text-secondary">Metaverse</span>
              </h1>
            </div>
            <p className="mb-6 text-center">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>

            <div className="flex items-center justify-center mx-8 my-12 text-sm">
              <input
                className="py-3 pl-2 h-9 border-2 border-r-0 border-border rounded-l-md rounded-r-none text-border"
                type="text"
                placeholder="Search for location"
              />
              <div className="bg-secondary rounded-r text-center">
                <button className="text-primary px-4 py-2 text-center">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="w-full mx-auto my-7 md:w-1/3">
            <img className="mx-auto" src={hero_img} alt="pictures of nfts" />
          </div>
        </div>

        <div className="my-5 py-3 bg-secondary flex justify-around items-center">
          <img
            src={logo2}
            alt="mbtoken logo"
            className="w-[28%] sm:w-1/4 md:w-32 lg:w-40"
          />
          <img
            src={logo3}
            alt="metamask logo"
            className="w-[28%] sm:w-1/4 md:w-32 lg:w-40"
          />
          <img
            src={logo4}
            alt="opensea logo"
            className="w-[28%] sm:w-1/4 md:w-32 lg:w-40"
          />
        </div>

        <div className="p-9 mb-5">
          <h3 className="text-2xl font-bold text-center mb-10">
            Inspiration for your next adventure
          </h3>
          <div className="flex flex-col justify-center items-center mx-auto gap-7 sm:flex-row sm:flex-wrap sm:gap-10 lg:gap-5 lg:max-w-5xl">
            <div className="w-56 p-2 border-2 border-border rounded-[15px]">
              <img src={image1} alt="nft" />
              <div className="flex justify-between gap-9 text-[0.8rem] mt-2 mb-2">
                <div className="w-1/2">
                  <p>Desert King</p>
                  <p>2345km away</p>
                </div>
                <div className="w-1/2">
                  <p className="font-bold">1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={stars} alt="rating" />
            </div>
            <div className="w-56 p-2 border-2 border-border rounded-[15px]">
              <img src={image2} alt="nft" />
              <div className="flex justify-between gap-9 text-[0.8rem] mt-2 mb-2">
                <div className="w-1/2">
                  <p>Desert King</p>
                  <p>2345km away</p>
                </div>
                <div className="w-1/2">
                  <p className="font-bold">1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={stars} alt="rating" />
            </div>
            <div className="w-56 p-2 border-2 border-border rounded-[15px]">
              <img src={image3} alt="nft" />
              <div className="flex justify-between gap-9 text-[0.8rem] mt-2 mb-2">
                <div className="w-1/2">
                  <p>Desert King</p>
                  <p>2345km away</p>
                </div>
                <div className="w-1/2">
                  <p className="font-bold">1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={stars} alt="rating" />
            </div>
            <div className="w-56 p-2 border-2 border-border rounded-[15px]">
              <img src={image4} alt="nft" />
              <div className="flex justify-between gap-9 text-[0.8rem] mt-2 mb-2">
                <div className="w-1/2">
                  <p>Desert King</p>
                  <p>2345km away</p>
                </div>
                <div className="w-1/2">
                  <p className="font-bold">1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={stars} alt="rating" />
            </div>
            <div className="w-56 p-2 border-2 border-border rounded-[15px]">
              <img src={image5} alt="nft" />
              <div className="flex justify-between gap-9 text-[0.8rem] mt-2 mb-2">
                <div className="w-1/2">
                  <p>Desert King</p>
                  <p>2345km away</p>
                </div>
                <div className="w-1/2">
                  <p className="font-bold">1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={stars} alt="rating" />
            </div>
            <div className="w-56 p-2 border-2 border-border rounded-[15px]">
              <img src={image6} alt="nft" />
              <div className="flex justify-between gap-9 text-[0.8rem] mt-2 mb-2">
                <div className="w-1/2">
                  <p>Desert King</p>
                  <p>2345km away</p>
                </div>
                <div className="w-1/2">
                  <p className="font-bold">1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={stars} alt="rating" />
            </div>
            <div className="w-56 p-2 border-2 border-border rounded-[15px]">
              <img src={image7} alt="nft" />
              <div className="flex justify-between gap-9 text-[0.8rem] mt-2 mb-2">
                <div className="w-1/2">
                  <p>Desert King</p>
                  <p>2345km away</p>
                </div>
                <div className="w-1/2">
                  <p className="font-bold">1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={stars} alt="rating" />
            </div>
            <div className="w-56 p-2 border-2 border-border rounded-[15px]">
              <img src={image8} alt="nft" />
              <div className="flex justify-between gap-9 text-[0.8rem] mt-2 mb-2">
                <div className="w-1/2">
                  <p>Desert King</p>
                  <p>2345km away</p>
                </div>
                <div className="w-1/2">
                  <p className="font-bold">1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
              <img src={stars} alt="rating" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-5 px-5 lg:px-8 py-12 bg-secondary text-primary">
          <div className="lg:max-w-xl md:pl-10">
            <h1 className="font-semibold text-2xl sm:text-3xl mb-2">
              Metabnb NFTs
            </h1>
            <p className="mb-3 text-lg sm:text-sm lg:text-lg">
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button className="rounded-lg bg-primary text-secondary text-base p-2 my-6 cursor-pointer">
              Learn more
            </button>
          </div>

          <div>
            <img src={nfts} alt="nft samples" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
