import { useState, useEffect } from "react";
import MainNavigation from "../MainNavigation";
import SideBar from "../SideBar";
import classes from "./index.module.css";

const Layout = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  useEffect(() => {
    if (isMobile) {
      setShowSidebar(false);
    }
  }, [isMobile]);

  const handleClick = () => {
    if (showSidebar) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  };

  return (
    <>
      <MainNavigation sidebarStatus={showSidebar} handle={handleClick} />
      <main className={classes.main}>
        {!isMobile && (
          <div className={classes.main_content}>
            {showSidebar ? <SideBar show={showSidebar}></SideBar> : null}

            <div className={classes.main_main_content}>{props.children}</div>
          </div>
        )}

        {isMobile && (
          <div>
            {showSidebar ? <SideBar show={showSidebar}></SideBar> : null}

            <div className={classes.main_main_content}>{props.children}</div>
          </div>
        )}
      </main>
    </>
  );
};

export default Layout;
