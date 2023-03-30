import SecondaryButton from '../SecondaryButton'
import classes from './index.module.css'
import Link from 'next/link'
import Gradient from 'rgt'
import {
  AiOutlineDashboard,
  AiOutlineCalendar,
  AiOutlineUser,
} from "react-icons/ai";
import { VscOrganization } from "react-icons/vsc";
import { GiPodiumWinner } from "react-icons/gi";
import { MdOutlineSafetyDivider } from "react-icons/md";
import { FaPeopleCarry } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";
import { useRouter } from "next/router";

const SideBar = (props) => {
  const router = useRouter()

  const cssClasses = [props.show ? "ModalOpen" : 'ModalClosed']
    return (
      <div className={classes.outer + " " + cssClasses.join(" ")}>
        <div className={classes.inner_ex}>
          <div className={classes.main_page_container}>
            <div className={classes.m_5}>
              <h2 className={classes.h2}>
                <Gradient dir="left-to-right" from="#DE631C" to="#E03221">
                  Pemilra FTI UAJY
                </Gradient>
              </h2>
            </div>
            <Link className={" link"} href="/">
              <SecondaryButton>
                <p className="main_button">Main Page</p>
              </SecondaryButton>
            </Link>
          </div>
        </div>
        <div className={classes.inner}>
          <p className={classes.content_name}>Konten</p>
          <ul className={classes.ul}>
            <Link className={classes.this_link + " link "} href="/">
              <li
                className={
                  router.pathname === "/"
                    ? classes.active + " " + classes.li
                    : classes.li
                }
              >
                <AiOutlineDashboard
                  className={classes.icon}
                ></AiOutlineDashboard>
                Dashboard
              </li>
            </Link>
            <Link className={classes.this_link + " link"} href="/timeline">
              <li
                className={
                  router.pathname === "/timeline"
                    ? classes.active + " " + classes.li
                    : classes.li
                }
              >
                <CiViewTimeline className={classes.icon}></CiViewTimeline>
                Timeline
              </li>
            </Link>
            <Link className={classes.this_link + " link"} href="/">
              <li
                className={
                  router.pathname === "/periode"
                    ? classes.active + " " + classes.li
                    : classes.li
                }
              >
                <AiOutlineCalendar className={classes.icon}></AiOutlineCalendar>
                Periode
              </li>
            </Link>
            <Link className={classes.this_link + " link"} href="/">
              <li className={classes.li}>
                <VscOrganization className={classes.icon}></VscOrganization>
                Organisasi
              </li>
            </Link>
            <Link className={classes.this_link + " link"} href="/">
              <li className={classes.li}>
                <GiPodiumWinner className={classes.icon}></GiPodiumWinner>
                Kandidat
              </li>
            </Link>
            <Link className={classes.this_link + " link"} href="/users">
              <li
                className={
                  router.pathname === "/users"
                    ? classes.active + " " + classes.li
                    : classes.li
                }
              >
                <AiOutlineUser className={classes.icon}></AiOutlineUser>
                Users
              </li>
            </Link>
          </ul>
        </div>
        <div className={classes.inner}>
          <p className={classes.content_name}>Kepanitiaan</p>
          <ul className={classes.ul}>
            <Link className={classes.this_link + " link"} href="/">
              <li className={classes.li}>
                <MdOutlineSafetyDivider
                  className={classes.icon}
                ></MdOutlineSafetyDivider>
                Divisi
              </li>
            </Link>
            <Link className={classes.this_link + " link"} href="/">
              <li className={classes.li}>
                <FaPeopleCarry className={classes.icon}></FaPeopleCarry>
                Keanggotaan
              </li>
            </Link>
          </ul>
        </div>

        <div className={classes.inner}>
          <p className={classes.content_name}>Akses</p>
          <Link className={classes.m_5 + " link"} href="/">
            <SecondaryButton>
              <p className="main_button">Log Out</p>
            </SecondaryButton>
          </Link>
        </div>
      </div>
    );
}

export default SideBar