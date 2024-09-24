import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';

const Gallery = ({ gallery }) => {
  const { enable, title, topList, bottomList, galleryImageWidth, animationSpeedForTop, animationSpeedForBottom } =
    gallery.frontmatter;
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
              style={{
                '--slides': topList.length + topList.length,
                '--speed': animationSpeedForTop,
                '--slide-width': galleryImageWidth,
              }}
              className="inf-slider mb-4 flex items-center">
              <div className="inf-slide-track reverse">
                {topList.concat(topList).map((item, index) => (
                  <div className="inf-slide" key={index}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={404}
                      height={300}
                      className=" w-full h-full rounded-md border border-light-quaternary object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="inf-slide-track reverse">
                {topList.concat(topList).map((item, index) => (
                  <div className="inf-slide" key={index}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={404}
                      height={300}
                      className=" w-full h-full rounded-md border border-light-quaternary object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* LOWER CAROUSEL */}
          {bottomList && (
            <div
              style={{
                '--slides': bottomList.length + bottomList.length,
                '--speed': animationSpeedForBottom,
                '--slide-width': galleryImageWidth,
              }}
              className="inf-slider flex items-center">
              <div className="inf-slide-track">
                {bottomList.concat(bottomList).map((item, index) => (
                  <div className="inf-slide" key={index}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={404}
                      height={300}
                      className="w-full h-full rounded-md border border-light-quaternary object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="inf-slide-track">
                {bottomList.concat(bottomList).map((item, index) => (
                  <div className="inf-slide" key={index}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={404}
                      height={300}
                      className="h-full w-full rounded-md border border-light-quaternary object-cover"
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
