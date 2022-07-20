import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Styles from './sidebar.module.scss'
import Image from 'next/image'
import Logo from '../public/img/Shoes.svg'

export default function Sidebar() {
  const [scrollTop, setScrollTop] = useState(0);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const coords = document.getElementById('sidebar-coord');
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
   // console.log(coords)
    if(coords != null ) {
      const coordStatus = coords.getBoundingClientRect()
      if(coordStatus.bottom < 0) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div className={`${Styles.sidebar} ${scroll ? Styles.bgBlack : Styles.bgTransparent}`}>
        <nav>
          <div>
              <Image
                src={Logo}
                alt="logo"
                width={50}
              />
          </div>
          <div className={`${scroll ? Styles.navWhite : Styles.navBlack}`}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/shoping">
                <a>shoping</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
            <input className={Styles.inputSearch} placeholder="Search..." />
          </div>
        </nav>
    </div>
  )
}