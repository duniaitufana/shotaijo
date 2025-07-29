"use client";
import { useEffect, useState, useRef } from "react";
import Styles from "./dialogSideBar.module.css";
import { createPortal } from "react-dom";

export default function DialogSideBar({ ref, data }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const portalTarget = document.querySelector(".dialog");
  if (!portalTarget) return null;

  return createPortal(
    <dialog ref={ref} className={Styles.Dialog}>
      <div className={Styles.Content}>
        <h2 className={Styles.Title}>Dialog Sidebar</h2>
        <p className={Styles.Description}>
          This is a dialog sidebar component that can be used to display
          additional information or options.
        </p>
      </div>
    </dialog>,
    portalTarget
  );
}
