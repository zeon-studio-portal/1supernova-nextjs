import useWindow from "@hooks/useWindow";
import { markdownify, slugify } from "@lib/utils/textConverter";
import Image from "next/image";
import { useEffect, useState } from "react";

const Advisory = ({ superstars }) => {
  let allMembers = superstars.frontmatter.team;
  const [active, setActive] = useState("");
  const [filteredMember, setFilteredMember] = useState(allMembers);
  const [slicedMember, setSlicedMember] = useState(filteredMember);
  const mobile = useWindow(539) < 540;

  useEffect(() => {
    setSlicedMember(mobile ? filteredMember.slice(0, 12) : filteredMember);
  }, [filteredMember, mobile]);

  const handleFilter = (item) => {
    setActive(item);
    const filtered = allMembers.filter((member) =>
      member.department.map((d) => slugify(d)).includes(item)
    );

    const otherMembers = allMembers.filter(
      (member) => !member.department.map((d) => slugify(d)).includes(item)
    );
    allMembers = [...filtered, ...otherMembers];
    setFilteredMember(allMembers);

    if (active === item) {
      setActive("");
      setFilteredMember(allMembers);
    }
  };

  return (
    superstars.frontmatter.enable === true && (
      <section id="superstars" className="py-24">
        <div className="container">
          <div className="text-center">
            <div data-aos="fade-up-sm">
              {markdownify(
                superstars.frontmatter.title,
                "h2",
                "font-medium mb-4"
              )}
            </div>
            <div data-aos="fade-up-sm" data-aos-delay="100">
              {markdownify(
                superstars.frontmatter.subtitle,
                "p",
                "text-light-secondary"
              )}
            </div>

            <div data-aos="fade-up-sm" data-aos-delay="200">
              {markdownify(
                superstars.frontmatter.quote,
                "p",
                "text-secondary-800 font-secondary mt-6 text-2xl -rotate-1"
              )}
            </div>
          </div>

          <div
            className="mb-10 overflow-x-auto"
            data-aos="fade-in"
            data-aos-delay="250"
          >
            <div className="mt-20 flex text-left sm:flex-wrap">
              {superstars.frontmatter.group_list.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    active === slugify(item.name) ? "active" : ""
                  } group mb-5 mr-5 inline-flex cursor-pointer select-none items-center rounded-2xl bg-dark-quaternary px-4 py-2 transition duration-200 hover:bg-secondary-200/10 [&.active]:bg-primary-800`}
                  data-target={slugify(item.name)}
                  onClick={() => handleFilter(slugify(item.name))}
                >
                  <Image
                    className="group-[.active]:contrast-200 group-[.active]:grayscale"
                    src={item.icon}
                    alt={item.name}
                    width={32}
                    height={32}
                  />
                  <span className="ml-2 block whitespace-nowrap pr-8 sm:pr-0">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="row row-cols-1 sm:row-cols-2 md:row-cols-4 lg:row-cols-5 xl:row-cols-6"
            data-aos="fade-in"
          >
            {slicedMember.map((item, i) => (
              <div
                key={i}
                className={`${item.content && "team-card"} group col mb-8 ${
                  item.department.map((d) => slugify(d)).includes(active)
                    ? "active"
                    : ""
                }`}
              >
                <div className="team-card-body">
                  <div className="team-card-author">
                    <div className="team-card-author-image shrink-0 rounded-full group-[.active]:border-[5px] group-[.active]:border-primary-600">
                      <Image
                        className="rounded-full object-cover"
                        src={item.image}
                        alt={item.name}
                        width={160}
                        height={160}
                      />
                    </div>
                    <div className="team-card-author-content">
                      <h3 className="my-2 text-[18px] font-semibold leading-snug">
                        {item.name}
                      </h3>
                      <div className="text-[16px] leading-[1.3] text-[#868686] group-[.active]:text-primary-200">
                        <ul className="ml-4 text-left lg:ml-0">
                          {item.bulletpoints?.map((d, i) => (
                            <li className="list-disc" key={i}>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="team-card-content">
                    {markdownify(
                      item.content,
                      "div",
                      "text-[16px] font-medium text-dark-primary"
                    )}
                    {item.brands && (
                      <ul className="mt-5">
                        {item.brands.map((b, i) => (
                          <li key={i} className="mx-3 inline-block">
                            <Image
                              src={b}
                              alt="brand logo"
                              className="w-auto"
                              width={100}
                              height={40}
                            />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default Advisory;
