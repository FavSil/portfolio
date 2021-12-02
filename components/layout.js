import Head from "next/head";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import NavBar from "./NavBar";

const name = "Favian Silva";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Favian Silva's personal development website"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="relative min-h-screen lg:flex">
        <NavBar title="faviansilva.dev" links={navLinks} />
        <div className="flex-1 min-h-screen bg-gray-100 p-6 flex flex-col sm:py-12 md:ml-72">
          <header></header>
          <main>{children}</main>
          {!home && (
            <div className="mt-12">
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
