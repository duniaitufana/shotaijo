"use client";
import Styles from "./navbar.module.css";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  // const { locale } = usePathname().split("/").slice(1);
  const pathname = usePathname();
  const dataPathname = {
    locale: pathname.split("/")[1] || "en",
    education: pathname.split("/")[2] || "/en/Education",
  };
  const navRef = useRef(null);
  const [isShow, setIsShow] = useState(true);
  const [isOnBottom, setIsOnBottom] = useState(false);
  useEffect(() => {
    let isScrolling;
    let isOnMouse;
    const handleMouseMove = () => {
      setIsShow(true);
      if (isOnMouse) {
        clearTimeout(isOnMouse);
      }
      if (isScrolling) {
        clearTimeout(isScrolling);
      }
      isOnMouse = true;
    };

    const handleScroll = () => {
      if (
        window.scrollY >=
        document.body.scrollHeight - window.innerHeight - 100
      ) {
        // setIsShow(false);
        setIsOnBottom(true);
        return;
      }
      setIsOnBottom(false);
      setIsShow(true);
      if (isOnMouse) {
        clearTimeout(isOnMouse);
      }

      if (isScrolling) {
        clearTimeout(isScrolling);
      }

      isScrolling = setTimeout(() => {
        setIsShow((prev) => {
          return !prev;
        });
      }, 4000);
    };

    window.addEventListener("scroll", handleScroll);
    navRef.current.addEventListener("mouseenter", handleMouseMove);
    navRef.current.addEventListener("mousemove", handleMouseMove);
    navRef.current.addEventListener("mouseleave", () => {
      if (isOnMouse) {
        clearTimeout(isOnMouse);
      }
      if (isScrolling) {
        clearTimeout(isScrolling);
      }
      isOnMouse = setTimeout(() => {
        setIsShow((prev) => {
          return !prev;
        });
      }, 4000);
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      navRef.current?.removeEventListener("mouseenter", handleMouseMove);
      navRef.current?.removeEventListener("mousemove", handleMouseMove);
      navRef.current?.removeEventListener("mouseleave", () => {
        if (isOnMouse) {
          clearTimeout(isOnMouse);
        }
        if (isScrolling) {
          clearTimeout(isScrolling);
        }
        isOnMouse = setTimeout(() => {
          setIsShow((prev) => {
            return !prev;
          });
        }, 4000);
      });
    };
  }, []);
  return (
    <nav
      ref={navRef}
      className={
        Styles.nav +
        (isShow ? " " + Styles.show : " " + Styles.hide) +
        (isOnBottom ? " " + Styles.changeToTop : "")
      }
    >
      <ul className={Styles.navList}>
        <a href="/">
          <li
            className={
              pathname === "/"
                ? Styles.navItem + " " + Styles.active
                : Styles.navItem
            }
          >
            Home
          </li>
        </a>
        <li
          className={
            pathname === "/about"
              ? Styles.navItem + " " + Styles.active
              : Styles.navItem
          }
        >
          About
        </li>
        <li
          className={
            pathname === "/contact"
              ? Styles.navItem + " " + Styles.active
              : Styles.navItem
          }
        >
          Contact
        </li>
        <a href={`/${dataPathname.locale}/education` || "/en/education"}>
          <li
            className={
              pathname.split("/")[2] === "education"
                ? Styles.navItem + " " + Styles.active
                : Styles.navItem
            }
          >
            Learn
          </li>
        </a>

        <li
          className={
            pathname === "/articles"
              ? Styles.navItem + " " + Styles.active
              : Styles.navItem
          }
        >
          Articles
        </li>
      </ul>
    </nav>
  );
}
