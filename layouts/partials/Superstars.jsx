import ImageFallback from '@components/ImageFallback';
import useWindow from '@hooks/useWindow';
import { markdownify, slugify } from '@lib/utils/textConverter';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Advisory = ({ superstars }) => {
  let allMembers = superstars.frontmatter.team;
  const [active, setActive] = useState('');
  const [lastLoadedItems, setLastLoadedItems] = useState(4);
  const [filteredMember, setFilteredMember] = useState(allMembers);
  const mobile = useWindow(767) < 768;
  const [loadedItems, setLoadedItems] = useState({
    items: [],
    finished: false,
  });

  const handleLoadMore = ({ btnClicked }) => {
    let items = [];
    items = filteredMember.slice(
      0,
      btnClicked ? loadedItems.items.length + 4 : lastLoadedItems
    );

    setLoadedItems({
      ...loadedItems,
      items,
      finished: items.length === filteredMember.length,
    });
  };

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

  // show loadedItems on initial render and window innerWidth change (Didn't show increased loadedItems because btn is not clicked. Show increased loadedItems only after btn is clicked)
  useEffect(() => {
    handleLoadMore({ btnClicked: false });
  }, [filteredMember, mobile]);

  // Save last loaded items to state
  useEffect(() => {
    loadedItems.items.length && setLastLoadedItems(loadedItems.items.length);
  }, [loadedItems.items.length]);

  const membersToRender = mobile ? loadedItems.items : filteredMember;

  const items = superstars.frontmatter.group_list;
  const ww = [];
  items.filter((item) => {
    if (filteredMember[0]?.department.includes(item.name)) {
      ww.push(item);
    }
  });

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
                'text-light-secondary md:text-xl'
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
            {membersToRender &&
              membersToRender.map((item, index) => (
                <div
                  key={index}
                  className="col-8 sm:col-6 md:col-4 lg:col-3 max-sm:mx-auto max-sm:w-[320px] max-sm:max-w-full">
                  <div
                    className={`group relative flex min-h-full flex-col overflow-hidden rounded-3xl border-2 border-transparent [&.active]:border-primary-200 ${
                      item.department.map((d) => slugify(d)).includes(active)
                        ? 'active'
                        : ''
                    }`}>
                    <div className="relative bg-gradient-to-t from-black/60 from-0% to-transparent to-50%">
                      <Image
                        className="relative -z-10 max-h-[250px] w-full rounded-t-3xl object-cover object-top"
                        src={item.image}
                        alt={item.name}
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="flex-1 bg-dark-tertiary px-5 pt-6">
                      <div className="pb-5">
                        <div className="relative mb-5">
                          <h3 className="h6 pe-10">{item.name}</h3>
                          <div className="absolute -right-5 -top-2 inline-block rounded-s-md bg-dark-secondary p-2.5">
                            <img
                              src="/images/favicon.png"
                              alt="1supernova"
                              width={20}
                            />
                          </div>
                        </div>
                        {item.bulletpoints && (
                          <div className="content content-superstar mt-2 [&>*]:text-[16px] [&>ul>li]:my-0">
                            <ul>
                              {item.bulletpoints?.map((d, i) => (
                                <li key={i}>{d}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Overlay Content */}
                    <div className="invisible absolute inset-0 h-full w-full overflow-auto bg-white opacity-50 transition-[opacity] duration-300 group-hover:visible group-hover:opacity-100">
                      <Image
                        className="relative mx-auto mb-4 mt-2 block h-[70px] w-[70px] rounded-full object-cover"
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={100}
                      />
                      <div className="flex flex-wrap bg-black gap-2 justify-center py-4 mx-2 px-1 rounded-md text-center">
                        {item.department &&
                          item.department.map((d, i) => (
                            <div
                              key={i}
                              className={`group inline-flex select-none items-center rounded-md bg-dark-quaternary p-2 transition duration-200 hover:bg-secondary-200/10 [&.active]:bg-primary-800`}>
                              <ImageFallback
                                className="group-[.active]:contrast-200 group-[.active]:grayscale"
                                src={
                                  `/images/superstars/icons/` +
                                  d.toLowerCase() +
                                  `.svg`
                                }
                                fallback="/images/superstars/icons/fallback.svg"
                                alt={d}
                                width={20}
                                height={20}
                              />
                              <span className="ml-2 block whitespace-nowrap text-sm">
                                {d}
                              </span>
                            </div>
                          ))}
                      </div>
                      {item.content &&
                        markdownify(
                          item.content,
                          'div',
                          'content content-superstar [&>*]:text-sm py-5 px-2.5 [&>*]:text-black text-center mt-3 pt-0 pb-10 overflow-y-auto'
                        )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {!loadedItems.finished ? (
            mobile && (
              <button
                onClick={() => {
                  handleLoadMore({ btnClicked: true });
                }}
                className="btn btn-light mx-auto mt-10 block">
                <span className="pointer-events-none me-2">
                  See More Superstars
                </span>
                ✨
              </button>
            )
          ) : (
            <button className="btn btn-light mx-auto mt-10 block">
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
