import image from "@/assets/image/mahdi.png";
import Container from "@/components/Container";

const DevInfoSection = () => {
  return (
    <Container className="my-20">
      <div>
        <div className="grid md:grid-cols-12 items-center">
          <div className="my-10 md:col-span-8">
            <h1 className="text-3xl font-semibold">
              {" "}
              Hi there...👋! <br /> I&apos;m Mahdi Mortuza...😎,
            </h1>
            <p className="text-lg mt-2">
              {" "}
              A Fullstack Web Developer specializing in the MERN stack and
              Next.js. I graduated from{" "}
              <span className="font-bold">
                Bangladesh University of Professionals
              </span>{" "}
              with a degree in{" "}
              <span className="font-bold">
                Mass Communication and Journalism
              </span>
              , which means I know how to tell a story and create engaging user
              experiences—both in print and on the web! 📰➡️💻
              <br />
              <br />
              After graduation, I dived into the world of web development
              through {""}
              <span className="font-bold">Programming Hero&apos;s</span>{" "}
              fantastic bootcamps. In Level 1, I learned JavaScript, React,
              HTML, CSS, React Router DOM, and got a taste of Node.js,
              Express.js, and MongoDB.
              <br />
              <br />
              Level 2 was where things got serious. I delved into TypeScript,
              Mongoose, advanced MongoDB, Express, Node, Redux, modular
              patterns, MVC architecture, and most important Next.js. I also
              explored a variety of design libraries like Ant Design,
              Material-UI, ShadcnUI, NextUI, and learned state management with
              Zustand. Plus, I can add some pizzazz to your projects with web
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
