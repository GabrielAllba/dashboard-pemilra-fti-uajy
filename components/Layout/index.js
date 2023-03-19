import MainNavigation from "../MainNavigation";
import SideBar from "../SideBar";
import classes from './index.module.css'

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main style={{ position: "relative" }} className={classes.main}>
        <div className={classes.main_content}>
          <SideBar></SideBar>
          <div className={classes.main_main_content}>
            {props.children}
          </div>
        </div>
      </main>
    </>
  );
}

export default Layout;
