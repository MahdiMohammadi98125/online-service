import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import React from "react";
import FooterList from "./FooterList";
function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid large:grid-cols-3 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
        <p className="py-4">
          Video provides a powerful way to help you prove your point.
        </p>
        <div className="flex md:w-[75%] justify-between my-6">
          <FaDribbbleSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <FooterList title=" Analytics" />
            <FooterList title=" Marketing" />
            <FooterList title=" Commerece" />
            <FooterList title=" Insight" />
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <FooterList title="Analytics" />
            <FooterList title="Marketing" />
            <FooterList title="Commerece" />
            <FooterList title="Insight" />
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <FooterList title="Analytics" />
            <FooterList title="Marketing" />
            <FooterList title="Commerece" />
            <FooterList title="Insight" />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
