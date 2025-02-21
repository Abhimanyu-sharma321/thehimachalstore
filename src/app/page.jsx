import { fifthImage, firstImage, fourthImage, secondImage, seventhImage, sixthImage, thirdImage } from "@/assets/page";
import { FeedBacckForm } from "@/component/home/FeedbackForm";
import Image from "next/image";
export default function Home() {
  const _H2CLASS = "open-sans text-[#064E3B] leading-[150%] text-[25px]"
  const _PCLASS = "text-[#059669] leading-[160%]"
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
      imageClass: "p-[5px] rounded-[65px] hover:scale-105",
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
                <button className="bg-[#65A30D] text-[#ECFDF5] w-[360px] h-[57px] border border-black rounded-md hover:bg-[#ECFDF5] hover:border-[#059669] hover:text-[#064E3B] hover:scale-110 ">Shop Fresh Produce</button>
              </div>
            </div>
          </div>

          <div className="container w-[50%] h-auto pr-[60px] grid grid-cols-2 cursor-pointer pt-10 ">
            {
              _IMAGES.map((image) => (
                <div>
                  <Image src={image?.image} alt={image?.alt} className={`${image?.imageClass}`} />
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

      </section >

      <section className="   w-full h-full p-40">
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


      <section className="   w-full h-full p-40">
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

      <section>
        <div>


          <div>
            <FeedBacckForm />
          </div>

          <div>

          </div>
        </div>
      </section>

    </>



  );
}
