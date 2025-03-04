"use client"

import { useEffect, useState } from "react"
import UseThemeHook from "../../../Hooks/UseThemeHook"
import "./Header.style.css"
import Link from "next/link"
export const Header = () => {
    const { currentTheme } = UseThemeHook()
    console.log(currentTheme?.links, "currentThem.links ")
    return (
        <div className=" header-outer w-[98%] h-full ">
            <div className={`  header-inner open-sans `} style={{ "--header-background": currentTheme?.header, color: currentTheme?.links }}>
                <div className="header-text" style={{ "--header-hover-text": currentTheme?.linkHover }}>
                    <Link href={"/home"}>Home</Link>
                </div>
                <div className="header-text" style={{ "--header-hover-text": currentTheme?.linkHover }}>
                    <Link href={"/register"}> Products</Link>
                </div>
                {/* <div className="header-text" style={{ "--header-hover-text": currentTheme?.linkHover }}>
                    ShopNow
                </div> */}
                <div className="header-text" style={{ "--header-hover-text": currentTheme?.linkHover }}>
                    <Link href={"/register"}> SignUp</Link>

                </div>
            </div>
        </div>
    )
}