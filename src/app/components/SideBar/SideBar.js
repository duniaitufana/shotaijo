"use client";

import DialogSideBar from "./dialogSidebar/DialogSidebar";
import Styles from "./SideBar.module.css";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const [activeIcon, setActiveIcon] = useState({
    icon: { library: false, bookmarks: false, notes: false, language: false },
  });
  const dialogRef = useRef(null);
  const pathname = usePathname();
  console.log("Current pathname:", pathname);
  return (
    <>
      <div className={Styles.Sidebar}>
        <ul className={Styles.SidebarList}>
          <li className={Styles.SidebarItem}>
            <DialogSideBar ref={dialogRef} data="library" />
            <span>
              <svg
                className={Styles.SidebarIcon}
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  if (dialogRef.current) {
                    dialogRef.current.showModal();
                  }
                  console.log("Library icon clicked");
                  console.log(dialogRef.current);
                }}
                onMouseEnter={(prev) => {
                  return setActiveIcon({
                    ...prev,
                    icon: { ...prev.icon, library: true },
                  });
                }}
                onMouseLeave={(prev) => {
                  return setActiveIcon({
                    ...prev,
                    icon: { ...prev.icon, library: false },
                  });
                }}
              >
                <title>Library</title>
                <rect
                  x="32"
                  y="96"
                  width="64"
                  height="368"
                  rx="16"
                  ry="16"
                  style={{
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                  className={`${Styles.SidebarIconRectLibrary} ${
                    activeIcon.icon.library ? Styles.active : ""
                  }`}
                />
                <line
                  x1="112"
                  y1="224"
                  x2="240"
                  y2="224"
                  style={{
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                  className={`${Styles.SidebarIconRectLibrary} ${
                    activeIcon.icon.library ? Styles.active : ""
                  }`}
                />
                <line
                  x1="112"
                  y1="400"
                  x2="240"
                  y2="400"
                  style={{
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                  className={`${Styles.SidebarIconRectLibrary} ${
                    activeIcon.icon.library ? Styles.active : ""
                  }`}
                />
                <rect
                  x="112"
                  y="160"
                  width="128"
                  height="304"
                  rx="16"
                  ry="16"
                  style={{
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                  className={`${Styles.SidebarIconRectLibrary} ${
                    activeIcon.icon.library ? Styles.active : ""
                  }`}
                />
                <rect
                  x="256"
                  y="48"
                  width="96"
                  height="416"
                  rx="16"
                  ry="16"
                  style={{
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                  className={`${Styles.SidebarIconRectLibrary} ${
                    activeIcon.icon.library ? Styles.active : ""
                  }`}
                />
                <path
                  d="M422.46,96.11l-40.4,4.25c-11.12,1.17-19.18,11.57-17.93,23.1l34.92,321.59c1.26,11.53,11.37,20,22.49,18.84l40.4-4.25c11.12-1.17,19.18-11.57,17.93-23.1L445,115C443.69,103.42,433.58,94.94,422.46,96.11Z"
                  style={{
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                  className={`${Styles.SidebarIconRectLibrary} ${
                    activeIcon.icon.library ? Styles.active : ""
                  }`}
                />
              </svg>
            </span>
          </li>
          <li className={Styles.SidebarItem}>
            <span>
              <svg
                className={Styles.SidebarIcon}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onMouseEnter={(prev) => {
                  return setActiveIcon({
                    ...prev,
                    icon: { ...prev.icon, notes: true },
                  });
                }}
                onMouseLeave={(prev) => {
                  return setActiveIcon({
                    ...prev,
                    icon: { ...prev.icon, notes: false },
                  });
                }}
              >
                <title>Notes</title>
                <path
                  d="M16 3.98999H8C6.93913 3.98999 5.92178 4.41135 5.17163 5.1615C4.42149 5.91164 4 6.92912 4 7.98999V17.99C4 19.0509 4.42149 20.0682 5.17163 20.8184C5.92178 21.5685 6.93913 21.99 8 21.99H16C17.0609 21.99 18.0783 21.5685 18.8284 20.8184C19.5786 20.0682 20 19.0509 20 17.99V7.98999C20 6.92912 19.5786 5.91164 18.8284 5.1615C18.0783 4.41135 17.0609 3.98999 16 3.98999Z"
                  className={`${Styles.SidebarIconRectNote} ${
                    activeIcon.icon.notes ? Styles.active : ""
                  }`}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 2V7"
                  className={`${Styles.SidebarIconRectNote} ${
                    activeIcon.icon.notes ? Styles.active : ""
                  }`}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 2V7"
                  className={`${Styles.SidebarIconRectNote} ${
                    activeIcon.icon.notes ? Styles.active : ""
                  }`}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 16H14"
                  className={`${Styles.SidebarIconRectNote} ${
                    activeIcon.icon.notes ? Styles.active : ""
                  }`}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 12H16"
                  className={`${Styles.SidebarIconRectNote} ${
                    activeIcon.icon.notes ? Styles.active : ""
                  }`}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </li>
          <li className={Styles.SidebarItem}>
            <span>
              <svg
                className={Styles.SidebarIcon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onMouseEnter={(prev) => {
                  return setActiveIcon({
                    ...prev,
                    icon: { ...prev.icon, bookmarks: true },
                  });
                }}
                onMouseLeave={(prev) => {
                  return setActiveIcon({
                    ...prev,
                    icon: { ...prev.icon, bookmarks: false },
                  });
                }}
              >
                <title>Bookmarks</title>
                <path
                  d="M21 16.0909V11.0975C21 6.80891 21 4.6646 19.682 3.3323C18.364 2 16.2426 2 12 2C7.75736 2 5.63604 2 4.31802 3.3323C3 4.6646 3 6.80891 3 11.0975V16.0909C3 19.1875 3 20.7358 3.73411 21.4123C4.08421 21.735 4.52615 21.9377 4.99692 21.9915C5.98402 22.1045 7.13673 21.0849 9.44216 19.0458C10.4612 18.1445 10.9708 17.6938 11.5603 17.5751C11.8506 17.5166 12.1494 17.5166 12.4397 17.5751C13.0292 17.6938 13.5388 18.1445 14.5578 19.0458C16.8633 21.0849 18.016 22.1045 19.0031 21.9915C19.4739 21.9377 19.9158 21.735 20.2659 21.4123C21 20.7358 21 19.1875 21 16.0909Z"
                  className={`${Styles.SidebarIconRectBookmark} ${
                    activeIcon.icon.bookmarks ? Styles.active : ""
                  }`}
                  strokeWidth="1.5"
                />
                <path
                  d="M15 6H9"
                  className={`${Styles.SidebarIconRectBookmark} ${
                    activeIcon.icon.bookmarks ? Styles.active : ""
                  }`}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </li>
          <li className={Styles.SidebarItem}>
            <span>
              <svg
                className={`${Styles.SidebarIcon} ${
                  Styles.SidebarIconLanguage
                } ${activeIcon.icon.language ? Styles.active : ""}`}
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby="languageIconTitle"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                onMouseEnter={(prev) => {
                  return setActiveIcon({
                    ...prev,
                    icon: { ...prev.icon, language: true },
                  });
                }}
                onMouseLeave={(prev) => {
                  return setActiveIcon({
                    ...prev,
                    icon: { ...prev.icon, language: false },
                  });
                }}
              >
                <title>Language</title>
                <circle cx="12" cy="12" r="10" />
                <path
                  strokeLinecap="round"
                  d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"
                />
                <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15" />
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
