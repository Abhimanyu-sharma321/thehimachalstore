"use client"

import { inputclass, labelclass } from "@/common/commonStyles/CommonStyle"
import "./Login.style.css"
const LoginCompo = () => {

    return (
        <>
            <div className="w-full h-screen  ">
                <div className="   bg-white   w-[460px] relative  left-[690px]  top-[100px] h-[400px]  p-5  shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] ">

                    <h2 className="text-center open-sans text-2xl    shadow-blue-500/100  "> Login</h2>

                    <div className="relative left-[2pc]">
                        <label htmlFor="" className={`${labelclass}`}> Email</label>
                        <br />
                        <div>
                            <input type="text" placeholder="Enter Here" name="" id="" className={`${inputclass}`} />
                        </div>
                    </div>
                    <div className=" relative left-[2pc] ">
                        <label htmlFor="" className={`${labelclass}`}>  Password</label>
                        <br />
                        <input type="text" placeholder="Enter Here" name="" id="" className={`${inputclass} `} />
                    </div>

                    <div className="relative  text-center">
                        <button className="register-button bg-[#1C2028] shadow-lg shadow-blue-500/100 w-[200px] h-[43px] relative top-[20px]    text-white open-sans rounded-md  hover:bg-white hover:text-black hover:border border-black scale-110">Login</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default LoginCompo