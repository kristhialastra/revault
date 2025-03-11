import React from "react";
import { SearchInput } from "./SearchInput"
import avatar from "../img/user.jpg";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";


export default function NavBar() {
    return (
        <>
            <header className="flex flex-row align-middle z-50 items-center justify-between text-xl font-mono  w-full bg-dark p-8 px-16">
                <div className="flex align-middle items-center gap-10">
                    <a href="#" className="font-bold text-3xl text-teal">ReVault</a>
                <SearchInput placeholder="Search paper"/>
                </div>
                <ul className="flex flex-row items-center gap-8 text-lg">
                <li>
                    <a href="#">My Vault</a>
                </li>
                <li>
                    <a href="#">Notifications</a>
                </li>
                <button className="bg-teal p-2 px-4 font-sans flex items-center gap-2 rounded-lg cursor-pointer"><FaPlus/>Upload</button>
                <div>
                <Image src={avatar} className="w-10 rounded-full" alt="user profile picture"/>
                </div>
                </ul>
            </header>
        </>
    )
}