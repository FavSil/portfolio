import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import NavBar from '../components/nav';
import Card from '../components/card';
import { MdOutlineEmail } from 'react-icons/md';

export default function Home({ allPostsData }) {
    const projects = [
        {
            id: 1,
            title: 'Hide.io',
            header: 'Multiplayer Sockect.io game',
            description:
                'Hide.io is a simple, stylized online multiplayer hide and seek game. Players take turns searching for each other in a modern re-imagining of the classic childhood game. This version of Hide.io uses socket.io to handle the in-game communication and React for the UI and Javascript Canvas for the game graphics.',
            src: '/images/hideio.gif',
            link: 'https://hideio.herokuapp.com/#/',
            active: true,
            technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
        },
        {
            id: 2,
            title: 'MediTrack',
            header: 'iOS Medical tracking app',
            description:
                'MediTrack is a medication reminder and analytics app for iOS, developed to help remind and track medicine usage through the use of daily reminders, set timers and custom calendar components. I used a publisher/subscriber model for the reminders backend architecture. This app is deprecated from the App Store and is no longer maintained.',
            src: '/images/medi-small.png',
            link: '',
            active: false,
            technologies: ['React-Native', 'AWS', 'MongoDB'],
        },
        {
            id: 3,
            title: 'Lane Detection',
            header: 'OpenCV Lane Detection',
            description:
                'A lane detection program to detect lane drift and lane curvature in real-time. This program used Hough transformation, and selective colour bit maps to locate lanes on the automobile camera. A histogram of the lane markings was detected and averaged across multiple frames to find the direction of the lane curvature. A graphic was made and placed over the video stream to give the user some visual reference.',
            src: '/images/calgary_output.gif',
            link: '',
            active: false,
            technologies: ['C++', 'OpenCV'],
        },
    ];
    return (
        <Layout home>
            <Head>
                <title>faviansilva.dev</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div class='grid grid-cols-4 '>
                <p className='text-gray-900 col-span-2 text-right text-lg font-medium'>
                    Hi! My name is Favian. I'm a software engineer with a
                    passion for <span className=''> learning</span> and
                    creating.
                </p>
                <p className='text-gray-900 col-span-2 pt-10 text-right text-lg font-medium  md:col-start-2 md:col-span-3 '>
                    I like to create things that make people go "oooh" and
                    "ahhh". I also like to combine art with technology to create
                    something that is both beautiful and functional. My recent
                    explorations have been with WEB3.0 and generative code art
                    in the form of compute shaders. I will be posting these
                    soon.
                </p>
            </div>
            <hr className='mt-4 border-black/30 m-auto' />

            <div className='mt-4 space-y-4'>
                <h2 className='text-2xl text-blue-600 font-bold '>
                    Recent Work
                </h2>
                <div className='grid grid-cols-fill-16 gap-6'>
                    {projects.map((project) => (
                        <Card id={project.id} project={project} />
                    ))}
                </div>
            </div>
            <hr className='mt-8 border-black/30 m-auto' />

            <h2 className='mt-6 text-blue-600 text-2xl font-bold'>
                This website
            </h2>
            <p className='mt-4 text-sm font-small  text-gray-900'>
                This website was built with{' '}
                <span className='text-blue-500 font-bold '>React</span> using
                the <span className='font-bold'>NextJS</span> framework. I used{' '}
                <span className='font-bold text-green-500'>Tailwindcss</span>{' '}
                for the styling (
                <a
                    className='text-blue-600 animate-pulse '
                    href='https://github.com/FavSil/portfolio'
                >
                    source
                </a>
                ).
            </p>
            <hr className='mt-8 border-black/30 m-auto' />
            <h2 className='mt-6 text-blue-600 text-2xl font-bold'>Contact</h2>
            <div className='pt-2 flex items-center space-x-1 animate-bounce text-gray-800'>
                <MdOutlineEmail className='h-4 w-4 ' />
                <p>s.favian@gmail.com</p>
            </div>
        </Layout>
    );
}
