import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

const TopFounders = ({ top_founders }) => {
  const colors = top_founders.frontmatter.list_colors;

  return (
    top_founders.frontmatter.enable === true && (
      <section className="bg-dark-secondary py-24">
        <div className="container text-center">
          {markdownify(
            top_founders.frontmatter.title,
            "h2",
            "font-medium mb-4"
          )}
          {markdownify(
            top_founders.frontmatter.subtitle,
            "p",
            "text-light-secondary"
          )}

          <div className="mt-20 grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-4">
            {top_founders.frontmatter.lists.map((item, index) => (
              <div key={index} className="mt-8 flex flex-col">
                <div className="relative h-full rounded-b-3xl rounded-tr-3xl bg-[#2D2D2D]">
                  <span
                    className={`absolute left-0 -translate-y-full rounded-t-2xl bg-[#2D2D2D] px-4 pb-1 pt-2 text-[17px]`}
                    style={{ color: colors[index] }}
                  >
                    {item.group}
                  </span>
                  <Image
                    className="h-auto w-full max-w-full rounded-b-3xl rounded-tr-3xl"
                    src={item.image}
                    alt={item.name}
                    width={160}
                    height={160}
                  />
                  <div className="px-4 py-5">
                    <p className="mb-2 text-xl font-semibold leading-snug">
                      {item.name}
                    </p>
                    <span className="block text-[16px] leading-snug">
                      {item.designation}
                    </span>
                  </div>
                </div>
                <Image
                  className="mx-auto mt-6 max-h-[55px]"
                  src={item.brand_logo}
                  alt={item.name}
                  width={160}
                  height={55}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default TopFounders;
