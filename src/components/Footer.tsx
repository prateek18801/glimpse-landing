import { Link } from "react-router-dom";
import { BsLinkedin, BsInstagram, BsGithub, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center w-full py-8 mt-16 text-white bg-zinc-900">
            <div className="flex flex-col items-center justify-center w-full max-w-5xl px-8 mb-16 md:mb-0 md:justify-between">
                <div className="flex flex-col items-center mb-8 text-3xl font-logo">
                    GLIMPSE
                    <div className="font-sans text-base">Education Pvt. Ltd.</div>
                </div>
                <ul className="flex gap-8 text-sm">
                    <li className="cursor-pointer"><Link to="/services">Services</Link></li>
                    <li className="cursor-pointer"><Link to="/about">About</Link></li>
                    <li className="cursor-pointer"><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="flex gap-4 mb-6 text-lg">
                <a href=""><BsLinkedin /></a>
                <a href=""><BsGithub /></a>
                <a href=""><BsWhatsapp /></a>
                <a href=""><BsInstagram /></a>
            </div>
            <div className="text-xs">&copy; Glimpse Education Pvt. Ltd. All rights reserved.</div>
        </footer>
    );
}

export default Footer;