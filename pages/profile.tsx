import Image from "next/image";
import profilePic from "../public/sad-martian.png";
import NavBar from "../src/components/Navbar/Navbar";

const Profile = () => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center w-full h-full">
        <div className="flex flex-wrap justify-around items-start w-full h-full ">
          <div className="lg:w-[38%] w-[100%] lg:p-3 p-1 flex justify-center lg:justify-end">
            <div className="relative h-[15em] w-[15em] w-full">
              <Image
                alt="profile picture"
                className="rounded-full"
                layout="fill"
                src={profilePic}
              />
            </div>
          </div>
          <div className="lg:w-[48%] w-[100%] flex-col lg:p-3 lg:p-2 p-4 ">
            <div className="flex justify-between lg:mb-10">
              <div className="flex gap-x-1">
                <p>Level Ranking</p>
                <span className="text-[green]">Veteran</span>
              </div>
              <p>EDIT PROFILE</p>
            </div>
            <h1 className="text-3xl">PRESET USERNAME</h1>
            <div className="flex justify-between my-4">
              <p className="text-2xl"> + XXXXXXXXXXXXXXX</p>
              <span className="italic text-[gray]">(only visible to you)</span>
            </div>
            <div className="flex justify-between my-4">
              <p className="text-2xl"> Wallet Address</p>
              <span className="italic text-[gray]">(only visible to you)</span>
            </div>
            <p> a8s8d8a7ss7d8a0a09999889ssda</p>
            <h1 className="lg:mt-16 lg:text-start text-center lg:text-3xl text-2xl">
              Mutuals
            </h1>
            <div className="flex gap-x-2 my-5 lg:justify-start justify-center">
              <div className="relative h-[5em] rounded-full w-[5em] rounded-full w-full flex items-center">
                <Image
                  alt="profile picture"
                  className="rounded-full"
                  layout="fill"
                  src={profilePic}
                />
              </div>
              <div className="relative h-[5em] rounded-full w-[5em] rounded-full w-full flex items-center">
                <Image
                  alt="profile picture"
                  className="rounded-full"
                  layout="fill"
                  src={profilePic}
                />
              </div>
              <div className="relative h-[5em] rounded-full w-[5em] rounded-full w-full flex items-center">
                <Image
                  alt="profile picture"
                  className="rounded-full"
                  layout="fill"
                  src={profilePic}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
