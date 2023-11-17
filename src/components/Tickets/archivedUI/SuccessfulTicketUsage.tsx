import { useRouter } from "next/router";
import { BsTelegram, BsTwitter } from "react-icons/bs"
import { FaDiscord } from "react-icons/fa"

const SuccessfulTicketUsage = () => {
    const router = useRouter();

    return(
        <div className="container mx-auto px-8 my-8 ">
            <div style={{backgroundColor:"rgb(15, 23, 42)"}}>
            <div className="relative flex flex-col flex-wrap items-center p-8 bg-opacity-75 border border-pink-500 " style={{cursor: "auto"}}>
            <span className="absolute px-3 py-1 text-xs font-medium text-white bg-opacity-25 rounded-full bg-gradient-to-r from-pink-500 to-red-400 -top-3 ">USED TICKET SUCCESSFULLY!</span>
            <h3 className="text-4xl font-medium text-white my-7 text-center">I&apos;ve Been Abducted!
                {/* <small className="pl-0 text-base align-baseline opacity-80">/mo</small> */}
            </h3>
            <p className="pb-5 -mt-3 text-base text-indigo-200 opacity-75 text-center">Martian Tickets Unlock Potential.</p>
            <div className="bg-gray-800 rounded-lg px-3 py-3 mt-3 text-center">
                <p className="w-full my-3">
                    <small className="font-medium tracking-widest text-indigo-200 text-opacity-60">Enter for the Chance to Win!</small>
                </p>
                <p className="text-indigo-200 text-opacity-60">Tweet at us with:</p>
                <p className="text-indigo-200 text-opacity-60">#MartiansAreReal</p>
            </div>
            <a className="flex items-center justify-center w-full py-1 mt-4 space-x-2 text-center btn-secondary umami--click--pricing-pro-action" data-theme="none" href="https://twitter.com/MMMC_NFT">
                <span>Follow us on Twitter</span>
                <BsTwitter/>
            </a>
            <p className="pt-3 text-sm text-center text-indigo-200 text-opacity-60">
                <br/> &quot;Anything is possible when you&apos;re a martian.&quot;
            </p>
            </div>
            </div>
            <button className="flex justify-center text-xl bg-gray-600 text-center mx-auto my-10 px-8 py-4 rounded-lg" onClick={() => {router.push('/home')}}>Home</button>
        </div>
    );
}

export default SuccessfulTicketUsage