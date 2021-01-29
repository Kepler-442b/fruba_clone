import Link from "next/link"
import sideBarStyle from "../styles/Sidebar.module.css"

const Sidebar = () => {
    return (
        <nav className={`${sideBarStyle.nav}`}>
            <div className={`${sideBarStyle.menu}`}>
            <ul className="list-group">
                <li className={`list-group-item ${sideBarStyle.li}`}>
                    <Link href="/">
                        <img
                            className={`${sideBarStyle.logo}`}
                            alt="logo"
                            src="/assets/char_others/gnav_logo.svg"
                        />
                    </Link>
                </li>
                <li className={`list-group-item ${sideBarStyle.li}`}>
                    <Link href="/test" className={`${sideBarStyle.link}`}>
                        <img
                            className={`${sideBarStyle.img}`}
                            alt="news"
                            src="/assets/gnav_nav_news.jpg"
                        />
                    </Link>
                </li>
                <li className={`list-group-item ${sideBarStyle.li}`}>
                    <Link href="/">
                        <img
                            className={`${sideBarStyle.img}`}
                            alt="onair"
                            src="/assets/gnav_nav_onair.jpg"
                        />
                    </Link>
                </li>
                <li className={`list-group-item ${sideBarStyle.li}`}>
                    <Link href="/">
                        <img
                            className={`${sideBarStyle.img}`}
                            alt="introduction"
                            src="/assets/gnav_nav_introduction.jpg"
                        />
                    </Link>
                </li>
                <li className={`list-group-item ${sideBarStyle.li}`}>
                    <Link href="/">
                        <img
                            className={`${sideBarStyle.img}`}
                            alt="cast_staff"
                            src="/assets/gnav_nav_caststaff.jpg"
                        />
                    </Link>
                </li>
                <li className={`list-group-item ${sideBarStyle.li}`}>
                    <Link href="/">
                        <img
                            className={`${sideBarStyle.img}`}
                            alt="story"
                            src="/assets/gnav_nav_story.jpg"
                        /></Link>
                </li>
                <li className={`list-group-item ${sideBarStyle.li}`}>
                    <Link href="/">
                        <img
                            className={`${sideBarStyle.img}`}
                            alt="character"
                            src="/assets/gnav_nav_character.jpg"
                        />
                    </Link>
                </li>
                <li className={`list-group-item ${sideBarStyle.li}`}>
                    <Link href="/">
                        <img
                            className={`${sideBarStyle.img}`}
                            alt="goods"
                            src="/assets/gnav_nav_goods.jpg"
                        />
                    </Link>
                </li>
                <li className={`list-group-item ${sideBarStyle.li}`}>
                    <Link href="/">
                        <img
                            className={`${sideBarStyle.img}`}
                            alt="event"
                            src="/assets/gnav_nav_event.jpg"
                        />
                    </Link>
                </li>
                <li className={`list-group-item ${sideBarStyle.li}`}>
                    <Link href="/">
                        <img
                            className={`${sideBarStyle.img}`}
                            alt="movie"
                            src="/assets/gnav_nav_movie.jpg"
                        />
                    </Link>
                </li>
                <li className={`list-group-item ${sideBarStyle.li}`}>
                    <Link href="/">
                        <img
                            className={`${sideBarStyle.img}`}
                            alt="special"
                            src="/assets/gnav_nav_special.jpg"
                        />
                    </Link>
                </li>
                <li className={`list-group-item ${sideBarStyle.li}`}>
                    <Link href="/">
                        <img
                            className={`${sideBarStyle.img}`}
                            alt="instagram-logo"
                            src="/assets/gnav_sns_instagram.jpg"
                        />
                    </Link>
                </li>
                <li className={`list-group-item ${sideBarStyle.li}`}>
                    <Link href="/">
                        <img
                            className={`${sideBarStyle.img}`}
                            alt="twitter-logo"
                            src="/assets/gnav_sns_twitter.jpg"
                        /></Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Sidebar