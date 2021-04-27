import Sidebar from "./Sidebar"
import { useRouter } from "next/router"
import styles from "../styles/Layout.module.css"
import React, { useEffect, useState } from 'react';

const Layout = ({ children }) => {

    const [isMainPage, setIsMainPage] = useState(true)
    const router = useRouter()

    useEffect(() => {
        if (router.pathname === "/") {
            setIsMainPage(true)
        } else {
            setIsMainPage(false)
        }
    }, [isMainPage, router.pathname])

    return (
        <div className={isMainPage ? styles.main_wrapper : styles.non_main_wrapper}>
                <Sidebar isMainPage={isMainPage} />
            <div className={isMainPage ? styles.main_contents : styles.non_main_contents}>
                {children}
            </div>
        </div>
    )
}

export default Layout