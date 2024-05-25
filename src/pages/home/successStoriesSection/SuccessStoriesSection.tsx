import Container from "@/components/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { CookingPot, HandPlatter, HeartHandshake, Users } from "lucide-react";
import CountUp from "react-countup";
const SuccessStoriesSection = () => {
  const iconStyle = "mx-auto size-[50px]";
  const features = [
    {
      icon: <CookingPot className={`${iconStyle}`} />,
      text: "Endless Recipe",
    },
    {
      icon: <Users className={`${iconStyle}`} />,
      text: "Vast Community",
    },
    {
      icon: <HandPlatter className={`${iconStyle}`} />,
      text: "Simple and Intuitive",
    },
    {
      icon: <HeartHandshake className={`${iconStyle}`} />,
      text: "Get Inspired",
    },
  ];

  const numberStyle = "text-3xl font-bold";
  const textStyle = "text-3xl font-semibold mt-2";

  const counters = [
    {
      id: 1,
      number: <CountUp className={`${numberStyle}`} end={400} />,
      text: <p className={`${textStyle}`}>Total Recipes</p>,
    },
    {
      id: 2,
      number: <CountUp className={`${numberStyle}`} end={1200} />,
      text: <p className={`${textStyle}`}>Active Users</p>,
    },
    {
      id: 3,
      number: <CountUp className={`${numberStyle}`} end={2000} />,
      text: <p className={`${textStyle}`}>Total Users</p>,
    },
  ];

  return (
    <Container className="my-10">
      <SectionHeader className="w-[200px]" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-14 mt-10">
        {features.map((item) => (
          <div
            key={item.text}
            className="flex flex-col w-[360px] lg:w-[240px] border border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 py-10 rounded-md hover:shadow-2xl mx-auto"
          >
            {item.icon}
            <span className="text-center text-2xl font-semibold mt-10">
              {item.text}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-36 grid md:grid-cols-2 lg:grid-cols-3">
        {counters.map((item) => (
          <div key={item.id} className="text-center">
            {item.number}
            {item.text}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SuccessStoriesSection;
