import Link from "next/link"
import styles from "../styles/Sidebar.module.css"

const Sidebar = (props) => {
const {isMainPage} = props
    return (
        <section className={`${styles.side_bar_wrapper}`}>
            <nav className={`${styles.nav}`}>
                <div className={`${styles.menu}`}>
                    <ul className="list-group">
                        <li className={`${styles.title}`}>
                            <Link href="/">
                                <svg
                                    className={`${styles.logo}`}
                                    alt="logo"
                                />
                            </Link>
                        </li>
                        <li className={`list-group-item ${styles.li}`}>
                            <Link href="/character">
                                <img
                                    className={`${styles.img}`}
                                    alt="character"
                                    src="/assets/gnav_nav_character.jpg"
                                />
                            </Link>
                        </li>
                        <li className={`list-group-item ${styles.li}`}>
                            <Link href="/test" className={`${styles.link}`}>
                                <img
                                    className={`${styles.img}`}
                                    alt="news"
                                    src="/assets/gnav_nav_news.jpg"
                                />
                            </Link>
                        </li>
                        <li className={`list-group-item ${styles.li}`}>
                            <Link href="/">
                                <img
                                    className={`${styles.img}`}
                                    alt="onair"
                                    src="/assets/gnav_nav_onair.jpg"
                                />
                            </Link>
                        </li>
                        <li className={`list-group-item ${styles.li}`}>
                            <Link href="/">
                                <img
                                    className={`${styles.img}`}
                                    alt="introduction"
                                    src="/assets/gnav_nav_introduction.jpg"
                                />
                            </Link>
                        </li>
                        <li className={`list-group-item ${styles.li}`}>
                            <Link href="/">
                                <img
                                    className={`${styles.img}`}
                                    alt="cast_staff"
                                    src="/assets/gnav_nav_caststaff.jpg"
                                />
                            </Link>
                        </li>
                        <li className={`list-group-item ${styles.li}`}>
                            <Link href="/">
                                <img
                                    className={`${styles.img}`}
                                    alt="story"
                                    src="/assets/gnav_nav_story.jpg"
                                /></Link>
                        </li>
                        <li className={`list-group-item ${styles.li}`}>
                            <Link href="/">
                                <img
                                    className={`${styles.img}`}
                                    alt="goods"
                                    src="/assets/gnav_nav_goods.jpg"
                                />
                            </Link>
                        </li>
                        <li className={`list-group-item ${styles.li}`}>
                            <Link href="/">
                                <img
                                    className={`${styles.img}`}
                                    alt="event"
                                    src="/assets/gnav_nav_event.jpg"
                                />
                            </Link>
                        </li>
                        <li className={`list-group-item ${styles.li}`}>
                            <Link href="/">
                                <img
                                    className={`${styles.img}`}
                                    alt="movie"
                                    src="/assets/gnav_nav_movie.jpg"
                                />
                            </Link>
                        </li>
                        <li className={`list-group-item ${styles.li}`}>
                            <Link href="/">
                                <img
                                    className={`${styles.img}`}
                                    alt="special"
                                    src="/assets/gnav_nav_special.jpg"
                                />
                            </Link>
                        </li>
                        <li className={`list-group-item ${styles.li}`}>
                            <Link href="/">
                                <img
                                    className={`${styles.img}`}
                                    alt="instagram-logo"
                                    src="/assets/gnav_sns_instagram.jpg"
                                />
                            </Link>
                        </li>
                        <li className={`list-group-item ${styles.li}`}>
                            <Link href="/">
                                <img
                                    className={`${styles.img}`}
                                    alt="twitter-logo"
                                    src="/assets/gnav_sns_twitter.jpg"
                                /></Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={isMainPage ? `${styles.side_info_wrap}` : `${styles.hide_side_info_wrap}`}>
                <a
                    className={styles.movie_thumb}
                    href="https://www.youtube.com/embed/MFmwHt4edSU?rel=0&autoplay=1&showinfo=0">
                    <img
                        alt="thumbnail"
                        src="/assets/movie_thumbnail.jpg"
                    />
                </a>
            </div>
        </section>
    )
}

export default Sidebar