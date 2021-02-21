import Sidebar from "./Sidebar"
import { useRouter } from "next/router"
import layoutStyle from "../styles/Layout.module.css"

const Layout = ({ children }) => {
    const router = useRouter()
    const isMainPage = router.pathname === "/" ? true : false
    return (
        <>
                <style jsx global>
        {`
            .main-contents {
                margin-left: 240px;
            }
        `}
        </style>
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="main-contents col-9">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout