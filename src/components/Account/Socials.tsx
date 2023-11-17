import { BsTelegram, BsTwitter } from "react-icons/bs";

const Socials = () => {
    return(
        <>
        <a className="flex items-center justify-center w-full py-1 mt-4 space-x-2 text-center btn-secondary umami--click--pricing-pro-action" data-theme="none" href="https://twitter.com/MMMC_NFT">
            <span>Follow us on Twitter</span>
            <BsTwitter/>
        </a>
        <a className="flex items-center justify-center w-full py-1 mt-4 space-x-2 text-center btn-secondary umami--click--pricing-pro-action" data-theme="none" href="https://t.me/+cGTNPEIH7aphNmU0">
        <span>Join our Telegram </span>
        <BsTelegram/>
        </a>
        </>
    );
}

export default Socials