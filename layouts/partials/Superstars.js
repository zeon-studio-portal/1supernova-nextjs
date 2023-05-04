import { markdownify, slugify } from "@lib/utils/textConverter";
import Image from "next/image";
import { useState } from "react";

const Advisory = ({ superstars }) => {
  let allMembers = superstars.frontmatter.team;
  const [active, setActive] = useState("");
  const [filteredMember, setFilteredMember] = useState(allMembers);
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
        <div className="container text-center">
          {markdownify(superstars.frontmatter.title, "h2", "font-medium mb-4")}
          {markdownify(
            superstars.frontmatter.subtitle,
            "p",
            "text-light-secondary"
          )}

          {markdownify(
            superstars.frontmatter.quote,
            "p",
            "text-secondary-800 font-secondary mt-6 text-2xl -rotate-1"
          )}

          <div className="overflow-x-auto">
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

          <div className="mt-10 grid gap-x-5 gap-y-4 sm:grid-cols-3 sm:gap-y-10 md:grid-cols-5 lg:grid-cols-6">
            {filteredMember.map((item, index) => (
              <div
                key={index}
                className={`group flex items-center sm:block ${
                  item.department.map((d) => slugify(d)).includes(active)
                    ? "active"
                    : ""
                }`}
              >
                <span className="block rounded-full border-[5px] border-transparent group-[.active]:border-primary-600 sm:mb-4">
                  <Image
                    className="h-auto w-16 max-w-full rounded-full grayscale sm:h-auto sm:w-40"
                    src={item.image}
                    alt={item.name}
                    width={160}
                    height={160}
                  />
                </span>
                <span className="ml-4 text-left sm:ml-0 sm:text-center">
                  <p className="mb-0 text-[18px] font-semibold leading-snug">
                    {item.name}
                  </p>
                  <span className="text-[17px] uppercase text-[#868686] group-[.active]:text-primary-200">
                    {item.department.map((d, i) => (
                      <span key={d}>
                        {d}
                        {i < item.department.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default Advisory;
