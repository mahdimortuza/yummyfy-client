import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="h-full w-full max-w-[1300px] px-[15px] mx-auto py-10">
      <ul className="flex item-center justify-center gap-16 ">
        <li>
          <a href="https://www.linkedin.com/in/mahdi-mortuza">
            <FaLinkedinIn className="w-6 h-5 text-[#222A35]" />
          </a>
        </li>

        <li>
          <a href="https://github.com/mahdimortuza">
            <FaGithub className="w-6 h-5 text-[#222A35]" />
          </a>
        </li>

        <li>
          <a href="https://twitter.com/mahdi_mortuza">
            <RiTwitterXLine className="w-6 h-5 text-[#222A35]" />
          </a>
        </li>
      </ul>
      <h1 className=" mt-[35px] font-raleway text-[15px] font-[400] text-center text-[#5C606C]">
        &copy; Copyright Mahdi Mortuza, {year}
      </h1>
    </footer>
  );
};

export default Footer;
