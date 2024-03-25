import Logo from '@components/Logo';
import config from '@config/config.json';
import menu from '@config/menu.json';
import settings from '@config/settings.json';
import { markdownify } from '@lib/utils/textConverter';
import Link from 'next/link';

const Footer = () => {
  const { logo } = config.site;
  const { footer_copy, copyright } = settings;
  return (
    <footer className="bg-dark-secondary pt-14 md:pt-24">
      <div className="container">
        <div className="row">
          <div className="md:col-8">
            <div data-aos="fade-up-sm">
              <Logo src={logo} />
            </div>
            <div data-aos="fade-up-sm" data-aos-delay="100">
              {markdownify(
                footer_copy,
                'p',
                'text-[#8E8E8E] mt-8 max-w-[320px]'
              )}
            </div>

            <div
              className="mt-12 hidden md:block"
              data-aos="fade-up-sm"
              data-aos-delay="200">
              {markdownify(
                copyright,
                'p',
                'text-light text-[16px] opacity-75 mb-4'
              )}
              <ul className="text-[16px]">
                {menu.footer.map((menu) => (
                  <li className="mr-8 inline-block" key={menu.name}>
                    <Link
                      href={menu.url}
                      className="py-4 text-[#8E8E8E] underline transition-all hover:text-white hover:no-underline">
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 md:col-4 md:mt-0">
            <div className="flex space-x-16">
              <ul data-aos="fade-up-sm" data-aos-delay="50">
                <li className="mb-6 font-semibold">Company</li>
                {menu.company.map((menu) => (
                  <li className="mb-2" key={menu.name}>
                    <Link
                      href={menu.url}
                      className="text-white transition-all hover:underline hover:opacity-75">
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul data-aos="fade-up-sm" data-aos-delay="100">
                <li className="mb-6 font-semibold">Join Us</li>
                {menu.join_us.map((menu) => (
                  <li className="mb-2" key={menu.name}>
                    <Link
                      href={menu.url}
                      className="text-white transition-all hover:underline hover:opacity-75">
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 block md:hidden">
              {markdownify(
                copyright,
                'p',
                'text-light text-[16px] opacity-75 mb-4'
              )}
              <ul className="text-[16px]">
                {menu.footer.map((menu) => (
                  <li className="mr-8 inline-block" key={menu.name}>
                    <Link
                      href={menu.url}
                      className="py-4 text-[#8E8E8E] underline transition-all hover:text-white hover:no-underline">
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 h-2 bg-gradient-line md:mt-24"></div>
    </footer>
  );
};

export default Footer;
