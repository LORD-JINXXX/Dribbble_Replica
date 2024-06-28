import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { FiUpload } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";
import { IoBookmarkOutline } from "react-icons/io5";
import { TiMail } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export default function Home() {
  return (
    <main className="w-[100vw] h-[auto] flex flex-col justify-start items-start m-0 p-0 bg-white">
      <div className="w-[100vw] flex flex-col justify-center items-center mt-24">
        <div className="xl:w-[65vw] lg:w-[65vw] md:w-[100vw] sm:w-[100vw] w-[100vw] h-[auto] flex justify-start items-center flex-col sticky">
          <div className="font-mona font-semibold text-2xl xl:w-[65vw] lg:w-[65vw] md:w-[100vw] sm:w-[100vw] w-[100vw] md:px-4 sm:px-4 px-4 flex justify-start items-center">Witt - Personal Organizer Web Design</div>
        </div>
        <div className="xl:w-[65vw] lg:w-[65vw] md:w-[100vw] sm:w-[100vw] w-[100vw] md:px-4 sm:px-4 px-4 flex flex-row my-5 sticky flex-wrap">
          <div className="md:w-1/2 sm:w-[60%] w-[50%] flex flex-row">
            <div className="md:w-[50px] sm:w-[40px] w-[30px] md:h-[50px] sm:h-[40px] h-[30px] ">
              <Image width={50} height={50} alt="profile" src={'/images/prof.jpg'} className="rounded-full" />
            </div>
            <div className="flex w-[auto] h-[50px] flex-col mx-3 justify-center items-center">
              <div className="md:w-[200px] sm:w-[150px] w-[100px] flex justify-start items-center font-mona font-semibold md:text-sm sm:text-xs text-xs">Shivam Rai</div>
              <div className="md:w-[200px] sm:w-[auto] w-[100px] flex justify-start items-center font-mona font-normal text-xs"><span className="mr-2 text-green-600 font-medium">Available for work</span> <span>Follow</span></div>
            </div>
          </div>
          <div className="md:w-1/2 sm:w-[40%] w-[50%] flex flex-row justify-end items-center flex-wrap">
            <div className="md:w-[40px] sm:w-[30px] w-[30px] md:h-[40px] sm:h-[30px] h-[30px]  rounded-full shadow-sm border-2 flex justify-center items-center mx-2"><IoHeartOutline className="md:w-[20px] sm:w-[15px] w-[15px] md:h-[20px] sm:h-[15px] h-[15px]" /></div>
            <div className="md:w-[40px] sm:w-[30px] w-[30px] md:h-[40px] sm:h-[30px] h-[30px] rounded-full shadow-sm border-2 flex justify-center items-center mx-2"><IoBookmarkOutline className="md:w-[20px] sm:w-[15px] w-[15px] md:h-[20px] sm:h-[15px] h-[15px]" /></div>
            <div className="w-[auto] h-[auto] md:flex sm:hidden hidden"><button className="w-[auto] h-[auto] px-4 py-2 rounded-full bg-black text-white text-sm font-mona font-medium">Get in touch</button></div>
            <div className="md:hidden sm:flex md:w-[40px] sm:w-[30px] w-[30px] md:h-[40px] sm:h-[30px] h-[30px] rounded-full shadow-sm border-2 flex justify-center items-center mx-2 bg-black text-white"><TiMail className="md:w-[20px] sm:w-[15px] w-[15px] md:h-[20px] sm:h-[15px] h-[15px]" /></div>
          </div>
        </div>
        <div className="xl:w-[65vw] lg:w-[65vw] md:w-[100vw] sm:w-[100vw] w-[100vw] md:px-4 sm:px-4 px-4 flex justify-center items-center">
          <Image width={1000} height={800} alt="work" src={'/images/work.png'} className="rounded-lg" />
          <div className="relative lg:flex md:hidden flex-col w-[auto] h-[auto] z-10 top-5 left-60">
            <div className="w-[40px] h-[40px] rounded-full border-2 shadow-sm my-2 flex justify-center items-center"><BiMessageRounded className="w-[20px] h-[20px]" /></div>
            <div className="w-[40px] h-[40px] rounded-full border-2 shadow-sm my-2 flex justify-center items-center"><FiUpload className="w-[20px] h-[20px] my-2" /></div>
            <div className="w-[40px] h-[40px] rounded-full border-2 shadow-sm my-2 flex justify-center items-center"><CiCircleInfo className="w-[20px] h-[20px] my-2" /></div>
          </div>
        </div>


      </div>

      <div className="lg:w-[100vw] md:w-[100vw] flex flex-col justify-center items-center mt-40">
        <div className="lg:w-[60vw] md:w-[100vw] h-[auto] flex flex-col justify-start items-start">
          <div className="lg:w-[60vw] md:w-[100vw] md:justify-center md:items-center flex justify-center items-center"><h1 className="text-3xl font-mona font-bold">Hola Designers :)</h1></div>
          <div className="lg:w-[60vw] md:w-[100vw] flex justify-start items-start flex-col">
            <p className="text-xl font-mona font-normal mt-5">Concept Design for a personal organizer and a tracker for all your work (kinda like Notion :p )</p>
            <p className="text-xl font-mona font-normal mt-10">Designed this as a 30-minute UI design challenge. Feel free to share your thoughts 🤘😁</p>
            <p className="text-xl font-mona font-normal mt-32">Reach out at <span className="underline decoration-pink-400">shivamrai.xyz</span></p>
          </div>
        </div>
      </div>

      <div className="w-[100vw] flex flex-col justify-start items-center mt-28">
        <div className="lg:hidden md:w-[60vw] flex flex-row justify-center items-center">
          <div className="w-[40px] h-[40px] rounded-full border-2 shadow-sm mx-2 flex justify-center items-center"><IoHeartOutline className="w-[20px] h-[20px]" /></div>
          <div className="w-[40px] h-[40px] rounded-full border-2 shadow-sm mx-2 flex justify-center items-center"><IoBookmarkOutline className="w-[20px] h-[20px]" /></div>
          <div className="w-[40px] h-[40px] rounded-full border-2 shadow-sm mx-2 flex justify-center items-center"><TiMail className="w-[20px] h-[20px]" /></div>

          <div className="w-[40px] h-[40px] rounded-full border-2 shadow-sm mx-2 flex justify-center items-center"><BiMessageRounded className="w-[20px] h-[20px]" /></div>
          <div className="w-[40px] h-[40px] rounded-full border-2 shadow-sm mx-2 flex justify-center items-center"><FiUpload className="w-[20px] h-[20px]" /></div>
          <div className="w-[40px] h-[40px] rounded-full border-2 shadow-sm mx-2 flex justify-center items-center"><CiCircleInfo className="w-[20px] h-[20px]" /></div>
        </div>

        <div className="lg:w-[60vw] md:w-[100vw] flex flex-row justify-center items-center">
          <div className="lg:w-[400px]  md:w-[250px] sm:w-[150px] w-[100px] h-[1px] bg-black mx-2"></div>
          <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center">
            <Image width={80} height={80} alt="profile" src={'/images/prof.jpg'} className="rounded-full" />
          </div>
          <div className="lg:w-[400px]  md:w-[250px] sm:w-[150px] w-[100px] h-[1px] bg-black mx-2"></div>
        </div>

        <div className="lg:w-[60vw] md:w-[100vw] flex flex-row justify-center items-center font-mona font-medium text-2xl mt-8">
          Shivam Rai
        </div>

        <div className="lg:w-[60vw] md:w-[100vw] flex flex-row justify-center items-center mt-8">
          <button className="w-[120px] h-[auto] px-4 py-3 rounded-full bg-black text-white text-sm font-mona font-medium">Get in touch</button>
        </div>
      </div>

      <div className="w-[100vw] flex flex-col justify-start items-center mt-28">
        <div className="xl:w-[80vw] lg:w-[80vw] md:w-[100vw] sm:w-[100vw] w-[100vw] md:px-10 sm:px-10 px-10 flex flex-row justify-between items-center">
            <div className="w-1/2 flex justify-start items-center font-mona font-medium text-medium">More by Shivam Rai</div>
            <div className="w-1/2 flex justify-end items-center font-mona font-light text-medium">View Profile</div>
        </div>

        <div className="lg:w-[80vw] md:w-[100vw] flex flex-row flex-wrap justify-center items-center mt-10">
            <div className="lg:w-[250px] md:w-[100vw] sm:w-[100vw] w-[100vw] lg:h-[250px] md:h-[80vh] sm:h-[60vh] h-[60vh] flex justify-center items-center mx-4 my-4 lg:px-0 md:px-10 sm:px-10 px-10">
            <Image width={800} height={800} alt="p1" src={'/images/p1.png'} className="rounded-lg lg:w-[300px] md:w-[100vw] sm:w-[100vw] w-[100vw] lg:h-[250px] md:h-[80vh] sm:h-[60vh] h-[60vh]" />
            </div>

            <div className="lg:w-[250px] md:w-[100vw] sm:w-[100vw] w-[100vw] lg:h-[250px] md:h-[80vh] sm:h-[60vh] h-[60vh] flex justify-center items-center mx-4 my-4 lg:px-0  md:px-10 sm:px-10 px-10">
            <Image width={800} height={800} alt="p1" src={'/images/p2.png'} className="rounded-lg lg:w-[300px] md:w-[100vw] sm:w-[100vw] w-[100vw] lg:h-[250px] md:h-[80vh] sm:h-[60vh] h-[60vh]" />
            </div>

            <div className="lg:w-[250px] md:w-[100vw] sm:w-[100vw] w-[100vw] lg:h-[250px] md:h-[80vh] sm:h-[60vh] h-[60vh] flex justify-center items-center mx-4 my-4 lg:px-0  md:px-10 sm:px-10 px-10">
            <Image width={800} height={800} alt="p1" src={'/images/p3.png'} className="rounded-lg lg:w-[300px] md:w-[100vw] sm:w-[100vw] w-[100vw] lg:h-[250px] md:h-[80vh] sm:h-[60vh] h-[60vh]" />
            </div>

            <div className="lg:w-[250px] md:w-[100vw] sm:w-[100vw] w-[100vw] lg:h-[250px] md:h-[80vh] sm:h-[60vh] h-[60vh] flex justify-center items-center lg:mx-4 md:mx-4 sm:mx-4 mx-4 lg:my-4 md:my-4 sm:my-4 my-4 lg:px-0 md:px-10 sm:px-10 px-10">
            <Image width={800} height={800} alt="p1" src={'/images/p4.png'} className="rounded-lg lg:w-[300px] md:w-[100vw] sm:w-[100vw] w-[100vw] lg:h-[250px] md:h-[80vh] sm:h-[60vh] h-[60vh]" />
            </div>
        </div>
      </div>

      <div className="w-[100vw] flex justify-start items-center mt-28 lg:flex-row md:flex-col sm:flex-col flex-col">
        <div className="lg:w-[15vw] md:w-[100vw] sm:w-[100vw] w-[100vw] flex justify-center items-center text-3xl font-ondyne font-bold">
          Dribbble
        </div>

        <div className="lg:w-[70vw] md:w-[100vw] sm:w-[100vw] w-[100vw] flex justify-center items-center flex-row flex-wrap">
          <span className="font-mona font-medium text-sm mx-2 my-2">For designer</span>
          <span className="font-mona font-medium text-sm mx-2 my-2">Hire talent</span>
          <span className="font-mona font-medium text-sm mx-2 my-2">Inspiration</span>
          <span className="font-mona font-medium text-sm mx-2 my-2">Adverstising</span>
          <span className="font-mona font-medium text-sm mx-2 my-2">Blog</span>
          <span className="font-mona font-medium text-sm mx-2 my-2">About</span>
          <span className="font-mona font-medium text-sm mx-2 my-2">Careers</span>
          <span className="font-mona font-medium text-sm mx-2 my-2">Support</span>
        </div>
        <div className="lg:w-[15vw] md:w-[100vw] sm:w-[100vw] w-[100vw] flex justify-center items-center flex-row">
            <FaTwitter className="w-[25px] h-[25px] mx-2 my-2"/>
            <BiLogoFacebookSquare className="w-[25px] h-[25px] mx-2 my-2"/>
            <FaInstagram className="w-[25px] h-[25px] mx-2 my-2"/>
            <FaPinterest className="w-[25px] h-[25px] mx-2 my-2"/>
        </div>
      </div>
    </main>
  );
}
