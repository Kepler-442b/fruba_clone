import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
    return (
        <>
            <div className="row">
                <Sidebar />
                <div className="d-none d-sm-block col-9 pl-0"> {/* hide(d-none) on screen smaller than small */}      
                        {children}
                </div>
            </div>
        </>
    )
}

export default Layout