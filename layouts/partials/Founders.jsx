import Image from 'next/image';

const Founders = ({ founders }) => {
  return (
    <div className="container">
      <ul className="flex flex-wrap items-center justify-center space-x-6 space-y-6 lg:flex-nowrap lg:space-y-0">
        <li
          className="text-md mb-2 w-full text-center leading-snug lg:mb-0 lg:w-[12rem] lg:text-start lg:text-[15px]"
          data-aos="fade"
          data-aos-delay="200"
          data-aos-offset="0">
          <span className="text-light-quaternary opacity-70">
            {founders.title}
          </span>
        </li>
        {founders.brands.map((item, i) => (
          <li
            className="opacity-100 transition-all md:opacity-40 md:hover:opacity-100"
            key={i}>
            <Image
              src={item}
              alt="supernova founder"
              width={260}
              height={100}
              style={{ maxHeight: '30px', width: 'auto' }}
              data-aos="fade"
              data-aos-offset="0"
              data-aos-delay={`${250 + i * 100 - 50}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Founders;
