import { twitterSquare } from "react-icons-kit/fa/twitterSquare";
import { medium } from "react-icons-kit/fa/medium";
import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare";
import { instagram } from "react-icons-kit/fa/instagram";
import { fileTextO } from "react-icons-kit/fa/fileTextO";
import { githubSquare } from "react-icons-kit/fa/githubSquare";
import { envelope } from "react-icons-kit/fa/envelope";
import {youtubePlay} from "react-icons-kit/fa/youtubePlay";
import Icon from "react-icons-kit";
import styles from "../styles/Footer.module.css";

const date = new Date();

const links = [
  {
    link: "https://www.instagram.com/jamaltheodds/",
    type: "ig",
  },
  {
    link: "https://www.linkedin.com/in/jamal-cao-218b781b5/",
    type: "li",
  },
  {
    link: "https://github.com/fr0m-scratch",
    type: "github",
  },
  /* {
    link: "",
    type: "resume",
  }, */
  /* {
    link: "mailto:jamaltheodds@gmail.com",
    type: "email",
  }, */
  {
    link:"https://www.youtube.com/channel/UCAyb8jNR575xu42rUIwXslg",
    type:"youtube"
  }
];

const iconMap = {
  ig: <Icon icon={instagram} size={20} />,
  li: <Icon icon={linkedinSquare} size={20} />,
  twitter: <Icon icon={twitterSquare} size={20} />,
  md: <Icon icon={medium} size={20} />,
  github: <Icon icon={githubSquare} size={20} />,
  resume: <Icon icon={fileTextO} size={20} />,
  email: <Icon icon={envelope} size={20} />,
  youtube: <Icon icon={youtubePlay} size={20}/>,
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        {links.map((e, i) => {
          const currIcon = iconMap[e.type];
          return (
            <li className={styles.horizontal} key={i}>
              <a href={e.link} className={styles.noHighlight} target="_blank">
                {currIcon}
              </a>
            </li>
          );
        })}
      </ul>

      <div className={styles.footerText}>
        © {date.getFullYear()} Jamal Cao, all dedicated to his cat 🐱
      </div>
    </footer>
  );
}
