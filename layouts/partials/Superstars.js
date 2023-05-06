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
            {markdownify(
              superstars.frontmatter.title,
              "h2",
              "font-medium mb-4"
            )}
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
          </div>

          <div className="mb-10 overflow-x-auto">
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

          <div className="row row-cols-1 sm:row-cols-2 md:row-cols-4 lg:row-cols-5 xl:row-cols-6">
            {slicedMember.map((item, i) => (
              <div
                className={`${item.content && "team-card"} group col mb-8 ${
                  item.department.map((d) => slugify(d)).includes(active)
                    ? "active"
                    : ""
                }`}
                key={i}
              >
                <div className="team-card-body">
                  <div className="team-card-author">
                    <div className="team-card-author-image shrink-0 rounded-full group-[.active]:ring-[5px] group-[.active]:ring-primary-600">
                      <Image
                        className="rounded-full"
                        src={item.image}
                        alt={item.name}
                        width={160}
                        height={160}
                      />
                    </div>
                    <div className="team-card-author-content">
                      <h3 className="mb-0 text-[18px] font-semibold leading-snug">
                        {item.name}
                      </h3>
                      <div className="text-[#868686] group-[.active]:text-primary-200">
                        {item.department.map((d, i) => (
                          <small key={d}>
                            {d}
                            {i < item.department.length - 1 ? ", " : ""}
                          </small>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="team-card-content">
                    {markdownify(
                      item.content,
                      "p",
                      "text-[18px] font-medium text-dark-primary"
                    )}
                    {/* <ul>
                        <li className="inline-block">
                          <Image src="" alt="" />
                        </li>
                      </ul> */}
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
