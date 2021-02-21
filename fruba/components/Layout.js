import Sidebar from "./Sidebar"
import { useRouter } from "next/router"


const Layout = ({ children }) => {
    const router = useRouter()

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className={router.pathname === "/" ? "main-contents col-9 pl-0" : "main-contents pl-0"}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout