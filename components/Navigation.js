'use client'
import styles from '@/styles/navigation.module.css'
import UserLogin from './Utils/UserLogin'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
const Navigation = () => {
    const [isClosed, setClosed] = React.useState(true);
    function close() {
        if(window.screen.width <= 640) {
                document.getElementById(styles.mainNav.toString()).style.width = "0";
        } else if(window.screen.width <= 1007 && window.screen.width > 640) {}
    }
    function open() {
        if(window.screen.width <= 640) {
                document.getElementById(styles.mainNav.toString()).style.width = "100%";
        } else if(window.screen.width <= 1007 && window.screen.width > 640) {}
    }
    return (
        <div>
            { window.screen.width <=1007 && <button type="button" className={styles.navOpen} onClick={open}>
                <FontAwesomeIcon icon={faBars}/>
            </button>}
            <nav className={styles.navBar} id ={styles.mainNav}>
            <Image priority src="/images/logo.webp"
            className={styles.logo}
            height={250}
            width={201}
            alt="The sites logo. A snake with a green eye eating its own tail surounding a sigil with 7 green gems and one large blue one"/>
            { window.screen.width <=1007 && <button type="button" className={styles.navClose} onClick={close}>
                <FontAwesomeIcon icon={faXmark}/>
            </button>}
                <Link href="/"className={styles.navLink} onClick={close}>Home</Link>
                <Link href="/blog"className={styles.navLink} onClick={close}>Blog</Link>
                <UserLogin></UserLogin>
            </nav>
        </div>
    )
}

export default Navigation