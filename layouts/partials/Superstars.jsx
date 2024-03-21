import useLoadMore from '@hooks/useLoadMore';
import useWindow from '@hooks/useWindow';
import { markdownify, slugify } from '@lib/utils/textConverter';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Advisory = ({ superstars }) => {
  let allMembers = superstars.frontmatter.team;
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState('');
  const [filteredMember, setFilteredMember] = useState(allMembers);
  const mobile = useWindow(539) < 540;

  const { loadedItems, loadItemsHandler, loadItemsFinished } = useLoadMore(
    filteredMember,
    6,
    mounted
  );

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
      setActive('');
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
                'h2',
                'font-medium mb-4'
              )}
            </div>
            <div data-aos="fade-up-sm" data-aos-delay="100">
              {markdownify(
                superstars.frontmatter.subtitle,
                'p',
                'text-light-secondary'
              )}
            </div>

            <div data-aos="fade-up-sm" data-aos-delay="200">
              {markdownify(
                superstars.frontmatter.quote,
                'p',
                'text-secondary-800 font-secondary mt-6 text-2xl -rotate-1'
              )}
            </div>
          </div>

          <div
            className="mb-10 overflow-x-auto"
            data-aos="fade-in"
            data-aos-delay="250">
            <div className="mt-20 flex text-left sm:flex-wrap">
              {superstars.frontmatter.group_list.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    active === slugify(item.name) ? 'active' : ''
                  } group mb-5 mr-5 inline-flex cursor-pointer select-none items-center rounded-2xl bg-dark-quaternary px-4 py-2 transition duration-200 hover:bg-secondary-200/10 [&.active]:bg-primary-800`}
                  data-target={slugify(item.name)}
                  onClick={() => handleFilter(slugify(item.name))}>
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
          <div className="row gy-4 pt-10">
            {filteredMember.map((item, index) => (
              <div key={index} className="md:col-3">
                <div className={`relative overflow-hidden group rounded-3xl [&.active]:border-primary-200 border-2 border-transparent ${
                  item.department.map((d) => slugify(d)).includes(active)
                    ? 'active'
                    : ''
                }`}>
                  <div className="relative bg-gradient-to-t from-black/60 from-0% to-transparent to-50%">
                    <Image
                      className="relative -z-10 max-h-[250px] w-full rounded-t-3xl object-cover object-center"
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="bg-dark-tertiary px-5 pt-6">
                    <div className="pb-5">
                      <h3 className="h4">{item.name}</h3>
                      {item.bulletpoints && (
                        <div className="content content-superstar mt-2 [&>*]:text-sm">
                          <ul>
                            {item.bulletpoints?.map((d, i) => (
                              <li key={i}>{d}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    {item.logo && item.logo.file && (
                      <div className="border-t border-t-primary/10 pb-8 pt-5 text-center">
                        <Image
                          className="mx-auto block rounded-t-2xl object-cover"
                          src={item.logo && item.logo.file}
                          alt="company logo"
                          width={150}
                          height={100}
                        />
                      </div>
                    )}
                  </div>
                  {/* Overlay Content */}
                  <div className="absolute inset-0 h-full w-full bg-dark-quaternary group-hover:visible invisible opacity-50 group-hover:opacity-100 duration-300 transition-[opacity]">
                    <Image
                      className="relative mx-auto mt-2 mb-4 block h-[70px] w-[70px] rounded-full object-cover"
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                    />
                    {item.content &&
                      markdownify(item.content, 'div', 'content content-superstar [&>*]:text-sm p-5 pt-0 pb-10 overflow-y-auto h-[calc(100%_-_75px)]')}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!loadItemsFinished ? (
            <button
              onClick={loadItemsHandler}
              className="btn btn-light ml-auto block sm:hidden">
              <span className="pointer-events-none me-2">
                See More Superstars
              </span>
              ✨
            </button>
          ) : (
            <button className="btn btn-light ml-auto block sm:hidden">
              <span className="pointer-events-none me-2">
                That's All Superstars
              </span>
              ✨
            </button>
          )}
        </div>
      </section>
    )
  );
};

export default Advisory;
