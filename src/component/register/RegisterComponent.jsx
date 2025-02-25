"use client"

import { useState } from "react"
import { registerContext } from "./RegisterContext"


const RegisterComponent = ({ children }) => {

    const [userData, setuserdata] = useState({

    })

    return (
        <registerContext.Provider value={{ userData, setuserdata }} >
            {children}
        </registerContext.Provider >
    )

}
export default RegisterComponent