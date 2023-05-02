import Logo from "@components/Logo";
import config from "@config/config.json";
import menu from "@config/menu.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { logo } = config.site;
  const { footer_copy, copyright } = config.params;
  return (
    <footer className="pt-14 md:pt-24 bg-dark-secondary">
      <div className="container">
        <div className="row">
          <div className="md:col-8">
            <Logo src={logo} />
            {markdownify(footer_copy, "p", "text-[#8E8E8E] mt-8 max-w-[320px]")}

            <div className="mt-12 hidden md:block">
              {markdownify(copyright, "p", "text-light text-[16px] opacity-75 mb-4")}
              <ul className="text-[16px]">
                {menu.footer.map((menu) => (
                  <li className="inline-block mr-8" key={menu.name}>
                    <Link href={menu.url} className="py-4 text-[#8E8E8E] hover:text-white underline hover:no-underline transition-all">
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-4 mt-12 md:mt-0">
            <div className="flex space-x-16">
              <ul>
                <li className="font-semibold mb-6">Company</li>
                {menu.company.map((menu) => (
                  <li className="mb-2" key={menu.name}>
                    <Link href={menu.url} className="text-white hover:opacity-75 hover:underline transition-all">
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul>
                <li className="font-semibold mb-6">Join Us</li>
                {menu.join_us.map((menu) => (
                  <li className="mb-2" key={menu.name}>
                    <Link href={menu.url} className="text-white hover:opacity-75 hover:underline transition-all">
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 block md:hidden">
              {markdownify(copyright, "p", "text-light text-[16px] opacity-75 mb-4")}
              <ul className="text-[16px]">
                {menu.footer.map((menu) => (
                  <li className="inline-block mr-8" key={menu.name}>
                    <Link href={menu.url} className="py-4 text-[#8E8E8E] hover:text-white underline hover:no-underline transition-all">
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-line mt-12 md:mt-24 h-2"></div>
    </footer>
  );
};

export default Footer;
