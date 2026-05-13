import Container from "./Container";
import { Link } from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import siteData from '../data/site.json'
const Footer = () => {
   const contact=siteData.contact
   const footer=siteData.footer
  return (
    <footer className="bg-(--surface) border-t border-t-(--primary) p-5 text-(--text-muted) w-full ">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className=" text-center sm:text-right">
            <h2 className="mb-3 text-[18px]">
              درباره <span className="text-(--primary) font-black">CORVEX</span>
            </h2>
            <p className="text-[14px] leading-6 max-w-[320px] mx-auto sm:max-w-none">
              {footer.description}
            </p>
            <div className="flex items-center gap-3 mt-4 justify-center sm:justify-start">
              <a
                href={contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-(--bg) hover:bg-(--primary) hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href={contact.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-(--bg) hover:bg-(--primary) hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={contact.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-(--bg) hover:bg-(--primary) hover:text-white transition"
              >
                <FaTelegramPlane />
              </a>
              <a
                href={contact.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-(--bg) hover:bg-(--primary) hover:text-white transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className=" text-center sm:text-right">
            <p className="mb-3 text-[18px]">دسترسی سریع</p>
            <ul className="text-[14px] flex flex-col gap-2">
              {footer.links.map(l=><li key={l.title} className="sm:hover:-translate-x-1 transition-all duration-300 hover:text-(--primary) hover:font-bold">
                <Link to={l.url}>{l.title}</Link>
              </li>)}
             
            </ul>
          </div>
          <div className="text-center sm:text-right">
            <p className="mb-3 text-[18px]">اطلاعات تماس</p>
            <ul className="flex flex-col gap-3 text-[14px] sm:items-start items-center">
              <li className="flex flex-col sm:flex-row items-center sm:items-start   gap-1.5">
                <div className="flex items-center gap-1">
                  <HiPhone className="text-(--primary)" />
                  <span>تلفن:</span>
                </div>
                <span>{contact.phone}</span>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start   gap-1.5">
                <div className="flex items-center gap-1">
                  <MdOutlineAlternateEmail className="text-(--primary)" />
                  <span>ایمیل:</span>
                </div>
                
                <span>{contact.email}</span>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start   gap-1.5">
                <div className="flex items-center gap-1">

                <IoLocationOutline className="text-(--primary)" />
                <span>آدرس:</span>
                </div>
                <p>{contact.address}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-(--border) text-center text-[13px]">
          {footer.copyright}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
