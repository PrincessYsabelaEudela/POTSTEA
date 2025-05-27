"use client"

import styles from "./NavIcons.module.css";
import Link from "next/link"
import Image from "next/image"
import {useRouter} from "next/navigation"
import {useState} from "react"
import CartModal from "./CartModal";

const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const router = useRouter();

    //TEMP
    const isLoggedIn = false

    const handleProfile = ()=>{
        if (!isLoggedIn) {
            router.push("/login")
        }
        setIsProfileOpen((prev) => !prev)
    }

    return (
        <div className={styles.icons}>
            <Image 
                width={1} 
                height={1} 
                src="/profile.svg" 
                alt="User Icon" 
                className={styles.usericon}
                onClick={handleProfile}
            />
            {isProfileOpen && 
                <div className={styles.dropdown}>
                    <Link href="/">Profile</Link>
                    <div>Logout</div>
                </div>}
            <div>
                <Image 
                    width={1} 
                    height={1} 
                    src="/bag.svg" 
                    alt="Cart" 
                    className={styles.carticon}
                    onClick={() => setIsCartOpen((prev) => !prev)}
                />
                {/* <div className={styles.itemnum}>2</div> */}
            </div>
            {isCartOpen && (
                <CartModal/>
            )}

        </div>
    )
}

export default NavIcons