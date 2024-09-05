import { IoIosSend } from "react-icons/io";
import laptopScreen from "../assets/laptop-screen.png";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

export default function Hero() {
  return (
    <section className="bg-hero-bg bg-no-repeat bg-center bg-cover">
      <Container>
        <Navbar />
        <div className="text-center text-white max-w-[800px] mx-auto my-10">
          <h1 className="font-chivo text-3xl md:text-6xl font-bold">
            Get your work done with Management Tool
          </h1>
          <div className="max-w-[500px] mx-auto">
            <p className="my-6">
              The world's first project management platform that connects
              everything
            </p>
            <div className="flex items-center justify-between w-full bg-white p-2 rounded-lg">
              <input
                className="w-[100px] flex-grow text-xl text-dark-400 px-2.5 focus-visible:outline-none"
                type="text"
              />
              <button className="text-dark-400 font-medium bg-light-400 px-5 py-2.5 rounded-md">
                <span className="hidden md:block">Try for Free</span>
                <span className="md:hidden">
                  <IoIosSend />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto">
          <img className="w-full" src={laptopScreen} alt="Laptop Screen" />
        </div>
      </Container>
    </section>
  );
}
