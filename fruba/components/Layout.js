import styles from "../styles/Layout.module.css"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
    return (
        <>
            <div className="row">
                <Sidebar />
                <div className="col-sm-10 d-none d-sm-block"> {/* hide(d-none) on screen smaller than small */}      
                    <main className="">
                        {children}
                    </main>

                </div>
            </div>
        </>
    )
}

export default Layout