import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import { Image } from "./indexStyles";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        {/* <BgAnimation /> */}
        <Image
          src="./images/somaliafarm.jpg"
          alt="photo"
          style={{
            width: "90%",
            height: "auto",
            borderRadius: "10px",
            flex: "1",
            marginTop: "8rem",
            marginLeft: "2rem",
          }}
        />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
