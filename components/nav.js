import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function NavBar(props) {
  return (
    <>
      <div class="bg-gray-400 text-gray-100 flex  justify-between md:hidden">
        <a href="#" class="block p-4 text-blue-600 font-bold ">
          {props.title}
        </a>

        <button class="mobile-menu-button p-4 rounded-lg focus:outline-none focus:bg-blue-600">
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div class="sidebar flex flex-col text-right content-end bg-gray-400 text-gray-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full  md:fixed md:translate-x-0 transition duration-200 ease-in-out md:w-72">
        <div className="m-2">
          <Link href="/">
            <Image
              priority
              className="rounded-full"
              src="/images/profile.jpg"
              alt="favian silva profile picture"
              width={100}
              height={100}
            ></Image>
          </Link>
        </div>

        <div className="px-4">
          <Link href="#">
            <a className="text-blue-600 space-x-2">
              <span class="text-2xl font-bold tracking-wider uppercase">
                {props.title}
              </span>
            </a>
          </Link>
          <h2 className="text-md text-white uppercase tracking-wide">
            software engineer
          </h2>
        </div>

        <nav className="flex-1">
          {props.links.map((link) => (
            <a
              href={link.href}
              class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex space-x-4 py-8 px-4 ml-auto">
          <a href="https://www.github.com/FavSil" className="">
            <AiFillGithub className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/favian-silva" className="">
            <AiFillLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </>
  );
}
