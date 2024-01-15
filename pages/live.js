import Base from "@layouts/Baseof";

const Live = () => {
  return (
    <Base>
      <div className="container py-24 text-center">
        <iframe
          className="aspect-video h-[50vh] w-full rounded lg:h-[600px]"
          src="https://player.restream.io/?token=a716ed9131b44143b203c19056e1d4f0"
          allow="autoplay"
          allowfullscreen
          frameborder="0"
        ></iframe>
      </div>
    </Base>
  );
};

export default Live;
