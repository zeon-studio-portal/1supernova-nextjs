import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';

const Gallery = ({ gallery }) => {
  const { enable, title, topList, bottomList } = gallery.frontmatter;
  return (
    enable && (
      <section className="section-lg pt-0">
        {title && (
          <h2
            className="mb-10 text-center text-h2_sm font-medium md:text-h2"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        <div>
          {/* UPPER CAROUSEL */}
          {topList && (
            <div
              class="inf-slider mb-4"
              data-inf-slide-width="400px"
              data-inf-scroll-speed="50"
              data-inf-direction="normal"
              data-inf-slide-pause-on-hover="true">
              <div class="inf-slide-track gap-4">
                {topList.map((item, index) => (
                  <div class="inf-slide" key={index}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={404}
                      height={300}
                      className="h-[300px] w-[404px] rounded-md border border-light-quaternary object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* LOWER CAROUSEL */}
          {bottomList && (
            <div
              class="inf-slider"
              data-inf-slide-width="400px"
              data-inf-scroll-speed="50"
              data-inf-direction="reverse"
              data-inf-slide-pause-on-hover="true">
              <div class="inf-slide-track gap-4">
                {bottomList.map((item, index) => (
                  <div class="inf-slide" key={index}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={404}
                      height={300}
                      className="h-[300px] w-[404px] rounded-md border border-light-quaternary object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    )
  );
};

export default Gallery;
