"use client"

import { useEffect, useState } from "react"

export const Header = () => {
    const [scrool, setScrool] = useState("")


    useEffect(() => {
        setScrool(window.screenX)
    }, [])

    console.log(window.scrollX, window.scrollY, "scroolx,yheader")

    return (
        <div className=" header-outer w-[98%] h-full ">
            <div className="header-inner open-sans ">
                <div>
                    Home
                </div>
                <div>
                    Products
                </div>
                <div>
                    ShopNow
                </div>

            </div>
        </div>
    )
}