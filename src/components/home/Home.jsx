import { fifthImage, firstImage, fourthImage, secondImage, seventhImage, sixthImage, thirdImage } from "@/assets/page";
import { _H2CLASS, _INPUT_CLASS, _LABEL_P_CLASS, _PCLASS, INPUT_P_CLASS } from "@/common/commonStyles/CommonStyle";
import Image from "next/image";
import { useContext } from "react";

export default function HomeScreen() {

    const _HEADING_AND_PARAGRAPH = [
        {
            id: 1,
            h2Class: _H2CLASS,
            h2Text: "Organic Selection",
            pclass: _PCLASS,
            pText: "Enjoy a variety of organic vegetables that " + "are grown without harmful pesticides."
        },
        {
            id: 2,
            h2Class: _H2CLASS,
            h2Text: "Seasonal Specials",
            pclass: _PCLASS,
            pText: "Discover seasonal vegetables that are  " + " picked at their peak for maximum flavor."
        },
        {
            id: 3,
            h2Class: _H2CLASS,
            h2Text: "Local Sourcing",
            pclass: _PCLASS,
            pText: "We partner with local farmers to provide " + "you with the freshest produce available."
        },
        {
            id: 4,
            h2Class: _H2CLASS,
            h2Text: "Sustainable Practices",
            pclass: _PCLASS,
            pText: "Our commitment to sustainability ensures " + "that our farming practices are eco."
        }
    ]

    const _HEADING_AND_PARAGRAPH2 = [
        {
            id: 1,
            h2Class: _H2CLASS,
            h2Text: "Community Engagement",
            pclass: _PCLASS,
            pText: "We actively engage with our community to promote healthy " + " eating and local agriculture."
        },
        {
            id: 2,
            h2Class: _H2CLASS,
            h2Text: "Quality Assurance",
            pclass: _PCLASS,
            pText: "Every vegetable is carefully inspected to guarantee the " + " highest quality for our customers."
        },

    ]
    const _IMAGES = [
        {
            id: 1,
            image: firstImage,
            imageClass: "p-[5px] rounded-[65px] hover:scale-105 ",
            alt: "firstImage"

        },
        {
            id: 2,
            image: secondImage,
            imageClass: "p-[5px] rounded-[65px] hover:scale-105",
            alt: "secondImage"
        },
        {
            id: 3,
            image: thirdImage,
            imageClass: "p-[5px] rounded-[65px] hover:scale-105",
            alt: "thirdImage"
        },
        {
            id: 4,
            image: sixthImage,
            imageClass: "p-[5px] rounded-[65px] hover:scale-105",
            alt: "sixthImage"
        }
    ]
    return (
        <>
            <div className=" w-full h-full main-home-page-div ">
                <div className="first-section-wrapper flex gap-[1px] w-full h-auto ">
                    <div className="container w-[50%]  h-auto pt-[157px]" >
                        <p className="domine-font first-text text-[#064E3B] text-[85px] antialiased tracking-wide text-balance leading-[73px] pl-[234px] pt-[80px] ">Harvest the  <br />Best  </p>
                        <div className="min-w-full pl-60 text-[#059669]">
                            <p className="open-sans  pt-[15px] text-[21px] leading-[27px] ">Explore our vibrant selection of fresh vegetables,<br /> sourced directly from local farms.</p>
                            <div className=" w-full h-full pt-[30px]">
                                <button className="bg-[#65A30D] text-[#ECFDF5] w-[360px] h-[57px] border border-black rounded-[11px] hover:bg-[#ECFDF5] hover:border-[#059669] hover:text-[#064E3B] hover:scale-110 ">Shop Fresh Produce</button>
                            </div>
                        </div>
                    </div>
                    <div className="container w-[50%] h-auto pr-[60px] grid grid-cols-2 cursor-pointer pt-10 overflow-hidden ">
                        {
                            _IMAGES.map((image) => (
                                <div key={image.id}>
                                    <Image src={image?.image} alt={image?.alt} className={`${image?.imageClass} overflow-hidden  `} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <section className="p-40 w-full h-full">
                <div className="w-full h-full">
                    <div>
                        <p className="open-sans text-[#65A30D]">Our Offerings</p>
                        <h2 className="inter-font text-[#064E3B]  text-[46px] font-[1000px] w-[560px] h-[61px]  antialiased tracking-wide text-balance leading-[69px]   ">Creative Visionary</h2>
                    </div>
                    <p className="open-sans leading-[314%] text-[20px] text-[#059669]">We bring the freshest vegetables to your table, ensuring quality and sustainability.</p>
                </div>
                <div className="container grid grid-cols-4 gap-8 pt-[92px]  ">
                    {
                        _HEADING_AND_PARAGRAPH.map((item) => (
                            <div key={item?.id}  >
                                <h2 className={`${item?.h2Class}`}>{item.h2Text}</h2>
                                <p className={`${item?.pclass}`}>{item.pText}</p>
                            </div>
                        ))
                    }
                </div>
                <div className=" container grid grid-cols-2 gap-8 pt-[92px] pl-[90px] ">
                    <div>
                        <h2 className={` ${_H2CLASS}`}>Community Engagement</h2>
                        <p className={`${_PCLASS} `}>We actively engage with our community to promote healthy <br /> eating and local agriculture. </p>
                    </div>
                    <div>
                        <h2 className={` ${_H2CLASS}`}>Quality Assurance</h2>
                        <p className={`${_PCLASS} `}>Every vegetable is carefully inspected to guarantee the <br /> highest quality for our customers. </p>
                    </div>
                </div>
            </section>
            <section className="w-full h-full p-40">
                <div className="container flex w-full h-full  ">
                    <div className="w-[50%] h-auto pt-[257px]">
                        <h2 className=" domine-font w-[696px] h-[53px] text-[40px] leading-[130%] text-[#65A30D]">Our Purpose</h2>
                        <p className="second-section domine-font text-[#059669] text-[40px] leading-[130%] ">To provide fresh, healthy vegetables<br /> while supporting local farmers and <br />sustainable practices.</p>
                    </div>
                    <div className="w-[50%] h-auto">
                        <Image src={seventhImage} alt="seventhimage" className="w-full h-full rounded-[69px]" />
                    </div>
                </div>
            </section>
            <section className="w-full h-full p-40">
                <div className="container flex w-full h-full  ">
                    <div className="w-[50%] h-auto pt-[257px]">
                        <p className="second-section  open-sans text-[#064E3B] text-[40px] leading-[130%] ">“The freshest vegetables I've ever<br /> tasted! Highly recommend this shop.”</p>
                        <p className=" open-sans  w-[696px] h-[53px] text-[20px] leading-[130%] text-[#059669] ml-[170px] mt-3"> Abhimanyu Sharma, Happy Customer</p>
                    </div>
                    <div className="w-[50%] h-auto">
                        <Image src={thirdImage} alt="seventhimage" className="w-full h-full rounded-[69px]" />
                    </div>
                </div>
            </section>
            <section className=" container flex ">
                <div className="w-[50%] h-full ml-[120px] ">
                    <div className="container bg-[#064E3B] w-[88%] mt-10 h-[560ppx] p-[59px] rounded-[47px] ml-10 mb-10  pl-[40px]">
                        <div>
                            <div className="w-full ">
                                <div>
                                    <label htmlFor="" className="text-[#D1FAE5] open-sans"> Your Name</label>
                                </div>
                                <input type="text" name="" id="" className={`${_INPUT_CLASS}`} placeholder="Enter your name" />
                            </div>
                            <div className="w-full mt-4">
                                <div>
                                    <label htmlFor="" className="text-[#D1FAE5]  open-sans "> Your Email</label>
                                    <slot>

                                        <input type="text" name="" id="" className={`${_INPUT_CLASS} mt-[3px]`} placeholder="Enter your email" />
                                    </slot>
                                </div>
                            </div>
                            <div className="w-full  mt-4 ">
                                <div>
                                    <label htmlFor="" className="text-[#D1FAE5] open-sans " > Your  Message</label>
                                </div>
                                <textarea name="" id="" className="open-sans w-[477px] h-[143px] rounded-[8px] placeholder:text-[#059669]  p-4" placeholder="Enter your message" aria-expanded="true"></textarea>
                            </div>
                        </div>
                        <div className="w-full h-full mt-4">
                            <button className="w-[172px] h-[50px] text-[#D1FAE5]  bg-[#65A30D] rounded-[8px] hover:bg-[#ECFDF5] hover:border-[#059669] hover:text-[#064E3B] hover:scale-110 ">Send Message</button>
                        </div>
                    </div>
                </div>

                <div className="w-[50%] h-full pt-[115px]">
                    <div className="p-[20px]">
                        <div>
                            <p className="domine-font leading-[0%] w-[436px] h-[46px] text-[68px] text-[#064E3B] tracking-[3px]">Contact Us</p>
                            <p className="open-sans text-[#064E3B] w-[480px] tracking-[0px]   text-[27px]">Get in touch with us for any inquiries or<br /> feedback.</p>
                        </div>
                        <div>
                            <p className="text-[#064E3B] open-sans">Email</p>
                            <p className="text-[#059669] mt-[7px] open-sans ">info@freshgreens.com</p>
                        </div>
                        <div>
                            <p className={`${_LABEL_P_CLASS}`}>Phone</p>
                            <p className={`${INPUT_P_CLASS}`}>+1 (555) 123-4567</p>
                        </div>
                        <div>
                            <p className={`${_LABEL_P_CLASS}`}>Location </p>
                            <p className={`${INPUT_P_CLASS}`}>456 Veggie Lane, Green City, Country</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full h-full p-40">
                <div className="join-our-div border border-black bg-[#064E3B]  ">
                    <div className="p-5">
                        <p className="domine leading-[59px] text-[#D1FAE5] text-[53px]">Join Our Newsletter</p>
                    </div>
                    <p className="open-sans text-[#D1FAE5]  text-[21px] leading-[94px] ">Subscribe for updates on fresh produce and special offers.</p>
                    <div className="flex gap-[10px] -ml-[60px]">
                        <div><input type="text" className="w-[388px] h-[61px] rounded-[6px] text-center" placeholder="Enter your email" /></div>
                        <div><button className="subscribe w-[300px]  bg-[#65A30D] h-[61px] text-[#D1FAE5] rounded-[9px] hover:bg-[#ECFDF5] hover:border-[#059669] hover:text-[#064E3B] hover:scale-110  overflow-hidden">Subscribe Now</button></div>
                    </div>
                </div>
            </section>
        </>
    );
}
