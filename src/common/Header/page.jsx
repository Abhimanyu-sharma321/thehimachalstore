"use client"

import { useEffect, useState } from "react"
import UseThemeHook from "../../../Hooks/UseThemeHook"
import "./Header.style.css"
export const Header = () => {
    const { currentTheme } = UseThemeHook()
    console.log(currentTheme?.links, "currentThem.links ")
    return (
        <div className=" header-outer w-[98%] h-full ">
            <div className={`  header-inner open-sans `} style={{ "--header-background": currentTheme?.header, color: currentTheme?.links }}>
                <div className="header-text" style={{ "--header-hover-text": currentTheme?.linkHover }}>
                    Home
                </div>
                <div className="header-text" style={{ "--header-hover-text": currentTheme?.linkHover }}>
                    Products
                </div>
                <div className="header-text" style={{ "--header-hover-text": currentTheme?.linkHover }}>
                    ShopNow
                </div>

            </div>
        </div>
    )
}