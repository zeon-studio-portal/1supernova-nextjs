import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

const TopFounders = ({ join_community }) => {
  return (
    join_community.frontmatter.enable === true && (
      <section className="py-8">
        <div className="container text-center">
          <div data-aos="fade-up-sm">
            {markdownify(
              join_community.frontmatter.title,
              "h2",
              "font-medium mb-4"
            )}
          </div>
          <div data-aos="fade-up-sm" data-aos-delay="100">
            {markdownify(
              join_community.frontmatter.subtitle,
              "p",
              "text-light-secondary"
            )}
          </div>

          <div className="row mt-10 space-y-8 md:space-y-0">
            {join_community.frontmatter.lists.map((item, index) => (
              <div
                key={index}
                className="md:col-4"
                data-aos="fade-up-sm"
                data-aos-delay={(index - 0.5) * 100 + 100}
              >
                <div className="flex h-full flex-col rounded-2xl bg-dark-quaternary px-8 py-10">
                  <div className="mb-6">
                    <Image
                      src={item.icon}
                      alt="supernova"
                      width={96}
                      height={96}
                      className="mx-auto mb-4"
                    />
                    <p className="mb-3 text-2xl font-medium leading-snug md:text-3xl">
                      {item.title}
                    </p>
                    {markdownify(
                      item.content,
                      "div",
                      "block text-[16px] prose-strong:bg-yellow-500 prose-strong:rounded prose-strong:px-1 prose-strong:!font-normal"
                    )}
                  </div>

                  <a
                    href={item.button.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-light mt-auto text-[17px]"
                  >
                    {item.button.label}
                    <svg
                      className="ml-2 inline align-[-5px]"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9161 2.25C13.5018 2.25 13.1661 2.58579 13.1661 3C13.1661 3.41421 13.5018 3.75 13.9161 3.75C14.8681 3.75 15.8109 3.93753 16.6905 4.30187C17.5701 4.66622 18.3694 5.20025 19.0426 5.87348C19.7158 6.5467 20.2498 7.34593 20.6142 8.22554C20.9785 9.10516 21.1661 10.0479 21.1661 11C21.1661 11.4142 21.5018 11.75 21.9161 11.75C22.3303 11.75 22.6661 11.4142 22.6661 11C22.6661 9.85093 22.4397 8.71312 22 7.65152C21.5603 6.58992 20.9158 5.62533 20.1032 4.81282C19.2907 4.0003 18.3261 3.35578 17.2645 2.91605C16.2029 2.47633 15.0651 2.25 13.9161 2.25ZM21.9161 19V17.3541C21.9161 16.5363 21.4182 15.8008 20.6588 15.4971L18.6247 14.6835C17.6589 14.2971 16.5583 14.7156 16.0931 15.646L15.9161 16C15.9161 16 13.4161 15.5 11.4161 13.5C9.41606 11.5 8.91606 9 8.91606 9L9.27008 8.82299C10.2004 8.35781 10.6189 7.25714 10.2326 6.29136L9.41895 4.25722C9.11522 3.4979 8.3798 3 7.562 3H5.91606C4.81149 3 3.91606 3.89543 3.91606 5C3.91606 13.8366 11.0795 21 19.9161 21C21.0206 21 21.9161 20.1046 21.9161 19ZM13.1661 7C13.1661 6.58579 13.5018 6.25 13.9161 6.25C14.5398 6.25 15.1575 6.37286 15.7338 6.61157C16.3101 6.85028 16.8337 7.20016 17.2748 7.64124C17.7159 8.08232 18.0658 8.60596 18.3045 9.18225C18.5432 9.75855 18.6661 10.3762 18.6661 11C18.6661 11.4142 18.3303 11.75 17.9161 11.75C17.5018 11.75 17.1661 11.4142 17.1661 11C17.1661 10.5732 17.082 10.1506 16.9187 9.75628C16.7553 9.36197 16.5159 9.00369 16.2142 8.7019C15.9124 8.40011 15.5541 8.16072 15.1598 7.99739C14.7655 7.83406 14.3429 7.75 13.9161 7.75C13.5018 7.75 13.1661 7.41421 13.1661 7Z"
                        fill="#1B1B1B"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-8 text-center"
            data-aos="fade-up-sm"
            data-aos-delay="50"
          >
            {markdownify(
              join_community.frontmatter.info,
              "div",
              "text-light-secondary has-link has-link-primary"
            )}
          </div>
        </div>
      </section>
    )
  );
};

export default TopFounders;
