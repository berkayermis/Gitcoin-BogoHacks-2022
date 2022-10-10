import UAuth from '@uauth/js'
import React, { useEffect, useState } from 'react';
import college from '../../public/college.png';
import Image from 'next/image';
import styles from './styles.module.css';
import uns from '../../public/uns.webp';
import Link from 'next/link';

const Header = () => {
    const [auth, setAuth] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const uauth = new UAuth({
            clientID: process.env.CLIENT_ID,
            redirectUri: "http://localhost:3000",
            scope: "openid wallet humanity_check",
        }) 
        setAuth(uauth)
        }, [])

        const logingWithUAuth = async () => {
        try{
            const user = await auth.loginWithPopup()
            setUser(user)
            console.log(user)
        }
        catch(err){
            console.log(err)
        }
        }

        const logout = async () => {
        try{
            const result = await auth.logout()
            setUser(result)
            console.log(result)
        }
        catch(err){
            console.log(err)
        }
        }

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href={"/"}>
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image src={college} alt="college" width={60} height={60} />
                    <span className="ml-5 text-2xl text-[#4d47f8]">uniDAO</span>
                    </a>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link href={"/"}>
                    <a className={styles.navLink}>Home</a>
                </Link>
                <Link href={"/universities"}>
                    <a className={styles.navLink}>Universities</a>
                </Link>
                <Link href={"/about"}>
                    <a className={styles.navLink}>About</a>
                </Link>
                <Link href={"/contact"}>
                    <a className={styles.navLink}>Contact</a>
                </Link>
                <Link href={"/apply"}>
                    <a className={styles.navLink}>Apply</a>
                </Link>
                </nav>
                {user ? (
                <p>xd</p> )
                : (
                    <button
                onClick={logingWithUAuth}
                className="inline-flex items-center text-white bg-[#4d47f8] border-0 py-1 px-3 focus:outline-none hover:opacity-90 rounded text-base mt-4 md:mt-0">
                    <span className='mt-2'>
                    <Image src={uns} width="30" height="30" />    
                    </span>
                    Login With Unstoppable
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </button>
                )    
                }
            </div>
        </header>
    );
    }

export default Header;