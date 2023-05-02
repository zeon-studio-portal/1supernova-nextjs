import Image from "next/image";

const Founders = ({ founders }) => {
  return (
    <div className="container mt-24">
      <ul className="flex flex-wrap items-center justify-center space-x-6 space-y-6 lg:flex-nowrap lg:justify-start lg:space-y-0">
        <li className="text-md mb-2 w-full text-center leading-snug text-[#747474] lg:mb-0 lg:w-[12rem] lg:text-start lg:text-[15px]"
            data-aos="fade" data-aos-delay="200">
          {founders.title}
        </li>
        {founders.brands.map((item, i) => (
          <li className="opacity-100 md:opacity-40 md:hover:opacity-100 transition-all" key={i}>
            <Image
              src={item}
              alt="supernova founder"
              width={260}
              height={100}
              style={{ maxHeight: "30px", width: "auto" }}
              data-aos="fade" data-aos-delay={`${250 + (i * 100) - 50}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Founders;
