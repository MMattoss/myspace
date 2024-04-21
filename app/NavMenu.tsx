import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css"

export default function NavMenu() {
    return (
        <nav className=" flex justify-between items-center text-white h-16 bg-blue-700">
            <Link href="/">
                <Image src="/logo.svg" width={216} height={30} alt="NextSpace Logo"/>
            </Link>
            <ul className=" list-none flex mr-3">
                <li className=" h-16 flex items-center p-1">
                    <Link href="/about">About</Link>
                </li>
                <li className=" h-16 flex items-center p-1">
                    <Link href="/blog">Blog</Link>
                </li>
                <li className=" h-16 flex items-center p-1">
                    <Link href="/users">Users</Link>
                </li>
                

            </ul>
        </nav>
    )
}