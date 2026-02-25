import React, { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader';

const HowItWorks = ({ data }) => {
  const [height, setHeight] = useState(0);
  const [itemHeights, setItemHeights] = useState({});

  //  get the height of h3 tag and setHeight the large one of the  height from all
  useEffect(() => {
    const getH3Height = (h3Element) => {
      if (h3Element) {
        return h3Element.offsetHeight;
      }
      return 0;
    };

    const h3Elements = document.querySelectorAll('#how-it-works h3');
    const h3Heights = Array.from(h3Elements).map(getH3Height);
    const maxH3Height = Math.max(...h3Heights);
    setHeight(maxH3Height);
  }, []);

  // Measure item heights across all three columns - only for lg and above
  useEffect(() => {
    const measureItems = () => {
      // Only measure on lg screens and above (1024px and up)
      if (window.innerWidth < 1024) {
        setItemHeights({});
        return;
      }

      const newHeights = {};
      
      for (let i = 0; i < data.comparison_table.length; i++) {
        const categoryLi = document.querySelector(`#category-${i}`);
        const traditionalLi = document.querySelector(`#traditional-${i}`);
        const supernovaLi = document.querySelector(`#supernova-${i}`);
        
        if (categoryLi || traditionalLi || supernovaLi) {
          const maxHeight = Math.max(
            categoryLi?.offsetHeight || 0,
            traditionalLi?.offsetHeight || 0,
            supernovaLi?.offsetHeight || 0
          );
          newHeights[i] = maxHeight;
        }
      }
      
      setItemHeights(newHeights);
    };
    
    // Measure after DOM updates
    const timer = setTimeout(measureItems, 50);
    
    // Debounce resize to avoid measuring on scroll
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(measureItems, 300);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, [data.comparison_table]);
  return (
    data.enable && (
      <section className="section bg-primary-800" id="how-it-works">
        <div className="container">
          <SectionHeader data={data} />

          <div className="relative grid gap-6 lg:grid-cols-3 lg:pr-10">
            <ul
              data-aos="fade-up"
              className={`absolute bottom-5 z-0 hidden w-full overflow-hidden  rounded-3xl lg:flex lg:flex-col lg:justify-between`} style={{
                height: `calc(100% - ${height+50}px)`,
              }}>
              {data.comparison_table.map((item, index) => (
                <li
                  id={`category-${index}`}
                  key={index}
                  style={{ minHeight: itemHeights[index] ? `${itemHeights[index]}px` : 'auto' }}
                  className={
                    'h-full py-8 pl-8 xl:pl-16 text-2xl font-medium flex items-center' +
                    (index % 2 === 0
                      ? ' bg-primary-1000/80'
                      : ' bg-primary-1000/60')
                  }>
                  {item.category}
                </li>
              ))}
            </ul>
            <div className="hidden lg:block"></div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="relative z-10 flex  flex-col justify-between rounded-3xl bg-dark-quaternary p-6 text-center">
              <h3 className="mb-10 text-2xl font-semibold uppercase">
                traditional
              </h3>
              <ul className="flex h-full flex-col justify-between gap-y-4">
                {data.comparison_table.map((item, index) => (
                  <li 
                    id={`traditional-${index}`}
                    key={index} 
                    style={{ minHeight: itemHeights[index] ? `${itemHeights[index]}px` : 'auto' }}
                    className="flex items-center justify-center text-light-primary/70">
                    {item.traditional}
                  </li>
                ))}
              </ul>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="relative z-10 flex  flex-col justify-between rounded-3xl bg-dark-quaternary p-6 text-center">
              <h3 className="mb-10 text-2xl font-semibold uppercase">
                supernova
              </h3>
              <ul className="flex h-full flex-col justify-between gap-y-4">
                {data.comparison_table.map((item, index) => (
                  <li 
                    id={`supernova-${index}`}
                    key={index} 
                    style={{ minHeight: itemHeights[index] ? `${itemHeights[index]}px` : 'auto' }}
                    className="flex items-center justify-center text-light-primary/70">
                    {item.supernova}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default HowItWorks;
