import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube, Phone, Mail, MapPin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* TOP GRID */}
      <div className="max-w-[1200px] mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* CONTACT */}
       <div className="flex flex-col gap-4">
         <h2 className="text-lg font-bold">CONTACT</h2>

        {/* PHONE */}
        <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 mt-1" />
            <p>
            +234 (907) 088-8888<br />
            +234 (806) 000-4322
            </p>
        </div>

        {/* EMAIL */}
        <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 mt-1" />
            <p>enquiries@mountainoffire.org</p>
        </div>

        {/* ADDRESS */}
        <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-1" />
            <p>
            MFM IJAIYE REGION 4<br />
            13 Olasimbo St, [Onike], Yaba,<br />
            Lagos 100213.
            </p>
        </div>
        </div>


        {/* NAVIGATION */}
        <div>
          <h2 className="text-lg font-bold mb-2">NAVIGATIONS</h2>
          <ul className="flex flex-col gap-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/mission">Mission and Vision</Link></li>
            <li><Link href="/give">Give</Link></li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-lg font-bold mb-2">QUICK LINKS</h2>
          <ul className="flex flex-col gap-2">
            <li><Link href="/dko-ebooks">D.K.O E-Books</Link></li>
            <li><Link href="/mfm-ebooks">MFM E-Books</Link></li>
            <li><Link href="/dko-foundation">D.K.O Foundation M.T.U</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
          </ul>
        </div>

        {/* SOCIALS + SERVICE TIMES */}
        <div>
          <h2 className="text-lg font-bold mb-2">SOCIALS</h2>
          <div className="flex gap-4 mb-4">
            <Facebook className="w-7 h-7" />
            <Instagram className="w-7 h-7" />
            <Twitter className="w-7 h-7" />
            <Youtube className="w-7 h-7" />
          </div>

          <h2 className="text-lg font-bold mb-2">SERVICE TIMES</h2>
          <ul className="flex flex-col gap-2">
            <li>Sundays at 7:00 am</li>
            <li>Mondays at 5:00 am</li>
            <li>Wednesdays at 4:30 pm</li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="bg-purple-600 flex items-center justify-center min-h-[10vh]">
        <p className="text-white text-center py-4">
          Copyright © 2025 - Mountain of Fire and Miracles Ministries.
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
