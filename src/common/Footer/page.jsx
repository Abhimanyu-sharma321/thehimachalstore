"use client"


export const Footer = () => {
    return (
        <section className="p-40 text-center " >
            <div>
                <p className="text-center">Fresh Greens Co.</p>
            </div>

            <div className="flex footer-div ">
                <p>About Us</p>
                <p>Our Work</p>
                <p>Follow Us</p>
                <p>Get in Touch</p>
            </div>

            <div className="footer-second-div w-full h-[90px]">
                <div className="flex ">
                    <div>© 2024 Fresh Greens Co. All rights reserved.</div>

                    <div className="flex   ml-40">
                        <p className="text-gray-950   border border-black  width">Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookie Preferences</p>
                    </div>
                </div>

            </div>
        </section>
    )
}