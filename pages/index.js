import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import NavBar from "../components/NavBar";
import Card from "./card";

export default function Home({ allPostsData }) {
  const projects = [
    {
      id: 1,
      title: "Hide.io",
      header: "Multiplayer Sockect.io game",
      description:
        "Hide.io is an online multiplayer hide and seek game. It uses socket.io to connect with players around the world.",
      src: "/images/hideio.gif",
      link: "",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 2,
      title: "MediTrack",
      header: "iOS Medical tracking app",
      description:
        "MediTrack is a medication reminder and analytics app for iOS. It was developed to help remind and track medicine usage for those who have to take their medicine daily.",
      src: "/images/medi-small.png",
      link: "",
      technologies: ["React-Native", "AWS", "MongoDB"],
    },
    {
      id: 3,
      title: "Lane Detection",
      header: "OpenCV Lane Detection",
      description:
        "Hough transformation and selective colour bit maps were used to locate lanes on the automobile camera. A histogram of the lanes was made and averaged across multiple frames to find the direction of the lane curvature. A graphic was made and emplaced over the histogram points to give the use some visual reference.",
      src: "/images/calgary_output.gif",
      link: "",
      technologies: ["C++", "OpenCV"],
    },
  ];
  return (
    <Layout home>
      <Head>
        <title>faviansilva.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="grid grid-cols-4 ">
        <p className="text-gray-900 col-span-2 text-right text-lg font-medium">
          Hi! My name is Favian. I'm a Hispanic/Canadian and sometimes I'm a
          software engineer with a passion for{" "}
          <span className=""> learning</span> and creating.
        </p>
        <p className="text-gray-900 col-span-2 pt-10 text-right text-lg font-medium  md:col-start-2 md:col-span-3 ">
          I like to create things that make people go "oooh" and "ahhh". I also
          like to combine art with technology to create something that is both
          beautiful and functional.
        </p>
      </div>
      <hr className="mt-4 border-black/30 m-auto" />

      <div className="mt-4 space-y-4">
        <h2 className="text-2xl text-blue-600 font-bold ">Recent Work</h2>
        <div className="grid grid-cols-fill-16 gap-6">
          {projects.map((project) => (
            <Card id={project.id} project={project} />
          ))}
        </div>
      </div>
      <hr className="mt-8 border-black/30 m-auto" />

      <h2 className="mt-6 text-blue-600 text-2xl font-bold">This website</h2>
      <p className="mt-4 text-sm font-small  text-gray-900">
        This website is relatively simple, built with{" "}
        <span className="text-blue-500 font-bold ">React</span> using the{" "}
        <span className="font-bold">NextJS</span> framework. I used{" "}
        <span className="font-bold text-green-500">Tailwindcss</span> for the
        styling and I took inspiration from the websites I used to visit in the
        simple and cheesy websites I used to visit in the 2000s.
      </p>
    </Layout>
  );
}
