import image from "@/assets/image/mahdi.png";
import Container from "@/components/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const DevInfoSection = () => {
  return (
    <Container className="my-20">
      <SectionHeader className="w-[300px]" text="About me" />
      <div>
        <div className="grid md:grid-cols-12 items-center">
          <div className="my-10 md:col-span-8">
            <h1 className="text-3xl font-semibold">
              Hi there...👋! <br /> I&apos;m Mahdi Mortuza...😎,
            </h1>
            <p className="text-lg mt-2">
              I&apos;m a Fullstack Web Developer specializing in the MERN stack
              and Next.js. I graduated from
              <span className="font-bold">
                {" "}
                Bangladesh University of Professionals{" "}
              </span>
              with a degree in
              <span className="font-bold">
                {" "}
                Mass Communication and Journalism{" "}
              </span>
              —skills that help me create engaging user experiences both in
              print and on the web! 📰➡️💻
              <br />
              <br />I honed my web development skills through
              <span className="font-bold"> Programming Hero&apos;s </span>
              bootcamps. Level 1 covered JavaScript, React, HTML, CSS, and
              basics of Node.js, Express.js, and MongoDB.
              <br />
              <br />
              In Level 2, I advanced to TypeScript, Mongoose, advanced MongoDB,
              Express, Node, Redux, MVC architecture, and Next.js. I also
              mastered design libraries like Ant Design, Material-UI, ShadcnUI,
              NextUI, and state management with Zustand, along with web
              animations! 😉
            </p>
          </div>

          <img className="md:col-span-4" src={image} />
        </div>
      </div>
    </Container>
  );
};

export default DevInfoSection;
