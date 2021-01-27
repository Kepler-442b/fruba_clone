// import navStyles from "../styles/Nav.module.css"
import Link from "next/link"

const Nav = ({ children }) => {
    return (
       <nav className="">
           <ul>
           <li>
                   <Link className="" href="/">フルーツバスケット</Link>
               </li>
               <li>
                   <Link className="" href="/">NEWS</Link>
               </li>
               <li>
                   <Link className="" href="/">ONAIR</Link>
               </li>
               <li>
                   <Link className="" href="/">INTRODUCTION</Link>
               </li>
               <li>
                   <Link className="" href="/">CAST/STAFF</Link>
               </li>
               <li>
                   <Link className="" href="/">STORY</Link>
               </li>
               <li>
                   <Link className="" href="/">CHARACTER</Link>
               </li>
               <li>
                   <Link className="" href="/">GOODS</Link>
               </li>
               <li>
                   <Link className="" href="/">EVENT</Link>
               </li>
               <li>
                   <Link className="" href="/">MOVIE</Link>
               </li>
               <li>
                   <Link className="" href="/">SPECIAL</Link>
               </li>
               <li>
                   <Link className="" href="/">インスタグラム</Link>
               </li>
               <li>
                   <Link className="" href="/">ツイッター</Link>
               </li>
           </ul>
       </nav>
    )
}

export default Nav