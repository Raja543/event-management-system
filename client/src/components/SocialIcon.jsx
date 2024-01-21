import React from "react";
import { HashLink } from "react-router-hash-link";

const SocialIcon = ({ to, src, alt }) => (
  <HashLink
    to={to}
    className="bg-[#7848F4] bg-opacity-10 rounded-3xl p-4 cursor-pointer"
  >
    <img src={src} className="w-full h-full" alt={alt} />
  </HashLink>
);

const SocialIcons = () => (
  <div className="flex flex-row items-center justify-center gap-5">
    <SocialIcon to="" src="/assets/images/InstagramIcon.svg" alt="Instagram" />
    <SocialIcon to="" src="/assets/images/FacebookIcon.svg" alt="Facebook" />
    <SocialIcon to="" src="/assets/images/LinkedinIcon.svg" alt="LinkedIn" />
    <SocialIcon to="" src="/assets/images/TwitterIcon.svg" alt="Twitter" />
    <SocialIcon to="" src="/assets/images/YoutubeIcon.svg" alt="YouTube" />
  </div>
);

export default SocialIcons;
