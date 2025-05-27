import styles from "./Header.module.css";
import Link from "next/link"
import NavIcons from "./NavIcons";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.navbar}>

      <div>
        <Link href="/">
          <Image width={1} height={1} alt="" src="/logo.svg" className={styles.logo}></Image>
          POTS & TEA
        </Link>
      </div>

      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href={`/about`}>About</Link></li>
          <li><Link href={`/menu`}>Menu</Link></li>
          <li><Link href="">Gallery</Link></li>
          <li><Link href={`/shop`}>Shop</Link></li>
          {/* <li><Link href="">Blog</Link></li> */}
          <li><Link href={`/contactus`}>Contact Us</Link></li>
        </ul>
      </nav>

      <NavIcons/>

    </div>
  )
}
  
export default Header