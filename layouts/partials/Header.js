import Logo from "@components/Logo";
import config from "@config/config.json";
import menu from "@config/menu.json";
import settings from "@config/settings.json";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Header = () => {
  // distructuring the main menu from menu object
  const { main } = menu;

  // get current path
  const { asPath } = useRouter();

  // logo source
  const { logo } = config.site;

  // navbar open/close
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const handleClick = () => {
    setToggleNavbar(!toggleNavbar);
    document.body.style.overflow = toggleNavbar ? "unset" : "hidden";
  };

  useEffect(() => {
    const announcement = document.querySelector(".announcement-bar");
    const navbarBrand = document.querySelector(".navbar-brand");
    const navbar = document.querySelector(".navbar");
    function setHeight() {
      if (window.innerWidth < 540) {
        toggleNavbar
          ? (navbar.style.height = `calc(100vh - (${announcement.offsetHeight}px + ${navbarBrand.offsetHeight}px))`)
          : (navbar.style.height = null);
      }
    }
    setHeight();
    window.addEventListener("resize", setHeight);
  }, [toggleNavbar]);

  // smooth scroll to section when click on menu
  useEffect(() => {
    const anchors = document.querySelectorAll("a[href*='#']");
    for (let anchor of anchors) {
      if (asPath === "/") {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document
            .querySelector(this.getAttribute("href").replace("/", ""))
            .scrollIntoView({
              behavior: "smooth",
            });
        });
      }
    }
  }, [asPath]);

  return (
    <header className={`header ${toggleNavbar ? "navbar-open" : ""}`}>
      <nav className="navbar container items-start px-0 sm:items-center sm:px-4">
        {/* logo */}
        <div className="order-0 mr-auto pl-4 sm:pl-0">
          <Logo src={logo} />
        </div>
        {/* navbar toggler */}
        <input
          id="nav-toggle"
          type="checkbox"
          className="hidden"
          onClick={handleClick}
        />
        <label
          id="show-button"
          htmlFor="nav-toggle"
          className="order-2 flex cursor-pointer items-center pr-4 sm:pr-0 lg:order-1 lg:hidden"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path
              opacity="0.4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 9.89159C5 8.84689 5.84689 8 6.89159 8H32.1128C33.1575 8 34.0044 8.84689 34.0044 9.89159C34.0044 10.9363 33.1575 11.7832 32.1128 11.7832H6.89159C5.84689 11.7832 5 10.9363 5 9.89159Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 19.98C5 18.9353 5.84689 18.0884 6.89159 18.0884H32.1128C33.1575 18.0884 34.0044 18.9353 34.0044 19.98C34.0044 21.0247 33.1575 21.8716 32.1128 21.8716H6.89159C5.84689 21.8716 5 21.0247 5 19.98Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 30.0681C5 29.0234 5.84689 28.1765 6.89159 28.1765H32.1128C33.1575 28.1765 34.0044 29.0234 34.0044 30.0681C34.0044 31.1128 33.1575 31.9597 32.1128 31.9597H6.89159C5.84689 31.9597 5 31.1128 5 30.0681Z"
              fill="currentColor"
            />
          </svg>
        </label>
        <label
          id="hide-button"
          htmlFor="nav-toggle"
          className="order-2 hidden cursor-pointer items-center pr-4 sm:pr-0 lg:order-1"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-light-primary"
          >
            <path
              opacity="0.4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.53889 30.551C7.74255 29.7547 7.74255 28.4636 8.53889 27.6672L27.7643 8.44186C28.5606 7.64552 29.8517 7.64552 30.6481 8.44186C31.4444 9.2382 31.4444 10.5293 30.6481 11.3257L11.4227 30.551C10.6264 31.3474 9.33523 31.3474 8.53889 30.551Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.44192 8.86012C9.23826 8.06377 10.5294 8.06377 11.3257 8.86012L30.5511 28.0855C31.3474 28.8818 31.3474 30.173 30.5511 30.9693C29.7548 31.7656 28.4636 31.7656 27.6673 30.9693L8.44192 11.7439C7.64558 10.9476 7.64558 9.65646 8.44192 8.86012Z"
              fill="currentColor"
            />
          </svg>
        </label>
        {/* /navbar toggler */}

        <ul
          id="nav-menu"
          className="navbar-nav order-3 hidden h-full w-full md:h-auto lg:order-1 lg:flex lg:w-auto lg:space-x-2"
        >
          {main.map((menu, i) => (
            <React.Fragment key={`menu-${i}`}>
              {menu.hasChildren ? (
                <li className="nav-item nav-dropdown group relative">
                  <span className="nav-link inline-flex items-center">
                    {menu.name}
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                  <ul className="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
                    {menu.children.map((child, i) => (
                      <li className="nav-dropdown-item" key={`children-${i}`}>
                        <Link
                          href={child.url}
                          className={`nav-dropdown-link block ${
                            asPath === child.url && "active"
                          }`}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    href={menu.url}
                    className={`nav-link block ${
                      asPath === menu.url && "active"
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
          <li className="mobile-cta">
            <p className="z-10 mb-6 text-2xl font-semibold">
              {config.site.mobile_nav_text}
            </p>
            <Link
              className="btn btn-sm btn-light py-4 leading-none"
              href={settings.header_cta_link}
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              Book a Call
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 inline align-[-4px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.8333 1.875C10.4882 1.875 10.2083 2.15482 10.2083 2.5C10.2083 2.84518 10.4882 3.125 10.8333 3.125C11.6267 3.125 12.4124 3.28127 13.1454 3.58489C13.8784 3.88852 14.5444 4.33354 15.1054 4.89456C15.6665 5.45558 16.1115 6.12161 16.4151 6.85462C16.7187 7.58763 16.875 8.37326 16.875 9.16667C16.875 9.51184 17.1548 9.79167 17.5 9.79167C17.8452 9.79167 18.125 9.51184 18.125 9.16667C18.125 8.20911 17.9364 7.26093 17.57 6.37627C17.2035 5.4916 16.6664 4.68777 15.9893 4.01068C15.3122 3.33359 14.5084 2.79649 13.6237 2.43005C12.7391 2.0636 11.7909 1.875 10.8333 1.875ZM17.5 15.8333V14.4617C17.5 13.7802 17.0851 13.1674 16.4523 12.9143L14.7572 12.2362C13.9524 11.9143 13.0352 12.263 12.6475 13.0383L12.5 13.3333C12.5 13.3333 10.4167 12.9167 8.75 11.25C7.08333 9.58333 6.66667 7.5 6.66667 7.5L6.96168 7.35249C7.73698 6.96484 8.08571 6.04761 7.76379 5.2428L7.08574 3.54768C6.83263 2.91492 6.21979 2.5 5.53828 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667C2.5 11.5305 8.46954 17.5 15.8333 17.5C16.7538 17.5 17.5 16.7538 17.5 15.8333ZM10.2083 5.83333C10.2083 5.48816 10.4882 5.20833 10.8333 5.20833C11.3531 5.20833 11.8679 5.31072 12.3481 5.50964C12.8284 5.70857 13.2647 6.00014 13.6323 6.3677C13.9999 6.73527 14.2914 7.17163 14.4904 7.65188C14.6893 8.13213 14.7917 8.64685 14.7917 9.16667C14.7917 9.51185 14.5118 9.79167 14.1667 9.79167C13.8215 9.79167 13.5417 9.51185 13.5417 9.16667C13.5417 8.811 13.4716 8.45882 13.3355 8.13023C13.1994 7.80164 12.9999 7.50308 12.7484 7.25159C12.4969 7.00009 12.1984 6.8006 11.8698 6.66449C11.5412 6.52839 11.189 6.45833 10.8333 6.45833C10.4882 6.45833 10.2083 6.17851 10.2083 5.83333Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </li>
        </ul>

        <div className="order-1 mx-5 hidden items-center sm:block lg:order-2 lg:mr-0">
          <Link
            className="btn btn-sm btn-dark py-4 leading-none"
            href={settings.header_cta_link}
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            Book a Call
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 inline align-[-4px]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.8333 1.875C10.4882 1.875 10.2083 2.15482 10.2083 2.5C10.2083 2.84518 10.4882 3.125 10.8333 3.125C11.6267 3.125 12.4124 3.28127 13.1454 3.58489C13.8784 3.88852 14.5444 4.33354 15.1054 4.89456C15.6665 5.45558 16.1115 6.12161 16.4151 6.85462C16.7187 7.58763 16.875 8.37326 16.875 9.16667C16.875 9.51184 17.1548 9.79167 17.5 9.79167C17.8452 9.79167 18.125 9.51184 18.125 9.16667C18.125 8.20911 17.9364 7.26093 17.57 6.37627C17.2035 5.4916 16.6664 4.68777 15.9893 4.01068C15.3122 3.33359 14.5084 2.79649 13.6237 2.43005C12.7391 2.0636 11.7909 1.875 10.8333 1.875ZM17.5 15.8333V14.4617C17.5 13.7802 17.0851 13.1674 16.4523 12.9143L14.7572 12.2362C13.9524 11.9143 13.0352 12.263 12.6475 13.0383L12.5 13.3333C12.5 13.3333 10.4167 12.9167 8.75 11.25C7.08333 9.58333 6.66667 7.5 6.66667 7.5L6.96168 7.35249C7.73698 6.96484 8.08571 6.04761 7.76379 5.2428L7.08574 3.54768C6.83263 2.91492 6.21979 2.5 5.53828 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667C2.5 11.5305 8.46954 17.5 15.8333 17.5C16.7538 17.5 17.5 16.7538 17.5 15.8333ZM10.2083 5.83333C10.2083 5.48816 10.4882 5.20833 10.8333 5.20833C11.3531 5.20833 11.8679 5.31072 12.3481 5.50964C12.8284 5.70857 13.2647 6.00014 13.6323 6.3677C13.9999 6.73527 14.2914 7.17163 14.4904 7.65188C14.6893 8.13213 14.7917 8.64685 14.7917 9.16667C14.7917 9.51185 14.5118 9.79167 14.1667 9.79167C13.8215 9.79167 13.5417 9.51185 13.5417 9.16667C13.5417 8.811 13.4716 8.45882 13.3355 8.13023C13.1994 7.80164 12.9999 7.50308 12.7484 7.25159C12.4969 7.00009 12.1984 6.8006 11.8698 6.66449C11.5412 6.52839 11.189 6.45833 10.8333 6.45833C10.4882 6.45833 10.2083 6.17851 10.2083 5.83333Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
