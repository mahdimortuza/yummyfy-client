import bgVideo from "@/assets/videos/background reel.mp4";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col gap-14 bg-black bg-opacity-70">
        <h1 className="text-white text-3xl md:text-6xl text-center leading-relaxed">
          Where Every Recipe <br /> Tells a Story
        </h1>
        <div className="flex gap-5">
          <Link to="/recipes">
            <Button>See recipes</Button>
          </Link>
          <Link to="/add-recipe">
            <Button>Add recipes</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
