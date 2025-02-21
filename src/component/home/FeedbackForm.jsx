"use client"

export const FeedBacckForm = () => {


    return (
        <>
            <div className="w-full h-full bg-[#064E3B] ml-[50px] ">
                <div className="w-full h-full">
                    <label htmlFor="">YourName</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">YourEmail</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">YourMessage</label>
                    <textarea></textarea>
                </div>
            </div>
        </>
    )
}