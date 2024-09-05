import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo-footer.png";
import Container from "../components/Container";

export default function Footer() {
  return (
    <footer className="mt-[120px]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-y-8 gap-x-10 text-lg">
          <div>
            <img src={logo} alt="Logo" />
            <p className="my-8">
              Build a modern and creative website with Innovate.
            </p>
            <div className="text-dark-400 flex gap-x-8 mt-4">
              <div className="h-10 rounded-full aspect-square flex items-center justify-center bg-light-400">
                <FaGoogle />
              </div>
              <div className="h-10 rounded-full aspect-square flex items-center justify-center bg-light-400">
                <FaTwitter />
              </div>
              <div className="h-10 rounded-full aspect-square flex items-center justify-center bg-light-400">
                <FaInstagram />
              </div>
              <div className="h-10 rounded-full aspect-square flex items-center justify-center bg-light-400">
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-xl">Product</h4>
            <ul className="flex flex-col gap-y-4 mt-4">
              <li>Landing Pges</li>
              <li>Pricing</li>
              <li>Benefits</li>
              <li>Features</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl">Company</h4>
            <ul className="flex flex-col gap-y-4 mt-4">
              <li>About</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Partners</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl">Resources</h4>
            <ul className="flex flex-col gap-y-4 mt-4">
              <li>Guides & Resources</li>
              <li>Tools</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl">Get Latest Updates</h4>
            <p className="my-8">
              Subscribe to our newsletter and get many interesting things every
              week
            </p>
            <input
              className="bg-light-400/50 px-4 py-2 rounded-md w-full"
              type="text"
            />
          </div>
        </div>
        <div className="text-sm text-center border-t-2 lg:text-start pt-10 mt-10">
          <p>© 2024 Innovate - All Right Reserved</p>
        </div>
      </Container>
    </footer>
  );
}
