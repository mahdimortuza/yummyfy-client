import Container from "@/components/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import "../../../common.css";

const TechnologiesSection = () => {
  const technologies = [
    {
      _id: "664739a20b19dd44ef7425b3",
      title: "Material Tailwind",
      image:
        "https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/main/src/assets/logos/material-tailwind.webp",
    },
    {
      _id: "6646ee4bada092e35584d170",
      title: "HTML",
      image:
        "https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/1e928d0b957dc197068dec11522ef19ecd25b189/src/assets/logos/html.svg",
      createdAt: "2024-05-17T05:42:35.547Z",
    },
    {
      _id: "6646ed70ada092e35584d164",
      title: "Tailwind",
      image:
        "https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/1e928d0b957dc197068dec11522ef19ecd25b189/src/assets/logos/tailwind.svg",
    },
    {
      _id: "6646f7a0ada092e35584d17c",
      title: "HeadLessUI",
      image:
        "https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/d8fc1e4a97d6ed73c1b0ba519aecfe309869cb5d/src/assets/logos/headlessui.svg",
    },
    {
      _id: "6646eee9ada092e35584d174",
      title: "Firebase",
      image:
        "https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/1e928d0b957dc197068dec11522ef19ecd25b189/src/assets/logos/firebase.svg",
    },
    {
      _id: "6646ee0eada092e35584d16c",
      title: "MongoDB",
      image:
        "https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/1e928d0b957dc197068dec11522ef19ecd25b189/src/assets/logos/mongodb.svg",
    },
    {
      _id: "664739be0b19dd44ef7425b5",
      title: "ShadcnUI",
      image:
        "https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/65538f2825bbcea6c9ecf13cac421127aa3ac19e/src/assets/logos/shadcn.svg",
    },
    {
      _id: "6646ecaaada092e35584d15e",
      title: "ReactJS",
      image:
        "https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/1e928d0b957dc197068dec11522ef19ecd25b189/src/assets/logos/react.svg",
    },
    {
      _id: "6646ee5cada092e35584d172",
      title: "CSS",
      image:
        "https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/1e928d0b957dc197068dec11522ef19ecd25b189/src/assets/logos/css.svg",
    },
    {
      _id: "6646eda1ada092e35584d166",
      title: "Redux",
      image:
        "https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/1e928d0b957dc197068dec11522ef19ecd25b189/src/assets/logos/redux.svg",
    },
    {
      _id: "6646f784ada092e35584d17a",
      title: "Framer Motion",
      image:
        "https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/d8fc1e4a97d6ed73c1b0ba519aecfe309869cb5d/src/assets/logos/framer.svg",
    },
    {
      _id: "6646f73eada092e35584d176",
      title: "MaterialUI",
      image:
        "https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/d8fc1e4a97d6ed73c1b0ba519aecfe309869cb5d/src/assets/logos/materialui.svg",
    },
    {
      _id: "6646edd7ada092e35584d16a",
      title: "ExpressJS",
      image:
        "https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/1e928d0b957dc197068dec11522ef19ecd25b189/src/assets/logos/express.svg",
    },
    {
      _id: "6646f7beada092e35584d17e",
      title: "Zustand",
      image:
        "https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/main/src/assets/logos/zustand.webp",
    },
    {
      _id: "6646ece2ada092e35584d162",
      title: "JavaScript",
      image:
        "https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/1e928d0b957dc197068dec11522ef19ecd25b189/src/assets/logos/js.svg",
    },
    {
      _id: "6646ee20ada092e35584d16e",
      title: "Mongoose",
      image:
        "https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/1e928d0b957dc197068dec11522ef19ecd25b189/src/assets/logos/mongoose.svg",
    },
    {
      _id: "6646ec55ada092e35584d159",
      title: "NextJS",
      image:
        "https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/1e928d0b957dc197068dec11522ef19ecd25b189/src/assets/logos/next.svg",
    },
    {
      _id: "6646ecc2ada092e35584d160",
      title: "TypeScript",
      image:
        "https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/1e928d0b957dc197068dec11522ef19ecd25b189/src/assets/logos/ts.svg",
    },
    {
      _id: "6646edb6ada092e35584d168",
      title: "NodeJS",
      image:
        "https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/1e928d0b957dc197068dec11522ef19ecd25b189/src/assets/logos/node.svg",
    },
    {
      _id: "6646f760ada092e35584d178",
      title: "AntDesign",
      image:
        "https://raw.githubusercontent.com/mahdimortuza/portfolio-client-2.0/d8fc1e4a97d6ed73c1b0ba519aecfe309869cb5d/src/assets/logos/antdesign.svg",
    },
  ];
  return (
    <Container>
      <SectionHeader className="w-[300px]" text="Technologies I use" />
      <div className="my-10 grid grid-cols-4 md:grid-cols-7 gap-10 items-center md:px-32">
        {technologies.map((technology) => (
          <div key={technology._id} className="tooltip ">
            {" "}
            <img
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px] cursor-pointer"
              src={technology.image}
            />
            <span className="tooltiptext">{technology.title}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TechnologiesSection;
