import Header from "../components/header";
// import BottomNavbar from "../components/BottomNavbar";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import shared from "../styles/Shared.module.css";
import cabin from "../public/city.jpg";

export default function Home() {
    return (
        <div className={shared.page}>
            <Header title={"Jamal Cao"} />
            <NavBar />
            <div className={[shared.container, styles.container].join(" ")}>
            <div
                    className={styles.tabletDiv}
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="50"
                >
                    <img
                        src={cabin}
                        alt="photo of me"
                        className={styles.photo}
                    />
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="750"
                    data-aos-delay="50"
                    className={styles.textBoxWrapper}
                >
                    <p className={styles.title}>Welcome my friend, this is Jamal!</p>
                    <div className={styles.textBox}>
                        <p>
                            A curious college freshman learning, exlporing, building, and involving. And my friend, we are one, same sapeins on earth; let us make this world a better place, together!
                        </p>
                    </div>
                </div>
                
            </div>

            <Footer />
        </div>
    );
}
