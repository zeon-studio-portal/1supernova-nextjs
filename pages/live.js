import Base from "@layouts/Baseof";
import Link from "next/link";

const Live = () => {
  return (
    <Base>
      <div className="container ">
        <div className="lg:colo-8 mx-auto py-20 text-center">
          <iframe
            className="aspect-video h-[50vh] w-full rounded lg:h-[600px]"
            src="https://player.restream.io/?token=a716ed9131b44143b203c19056e1d4f0"
            allow="autoplay"
            allowfullscreen
            frameborder="0"
          ></iframe>
          <Link
            href={"https://i9evkjegsiq.typeform.com/to/i1rwrmDp"}
            className="btn btn-light mt-12 inline-block hover:bg-light-primary"
          >
            Ready Player World ✨
          </Link>
        </div>
      </div>
    </Base>
  );
};

export default Live;
