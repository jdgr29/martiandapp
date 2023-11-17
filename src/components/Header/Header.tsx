import Link from "next/link";
import React from "react";
import { useRef } from "react";
import ConnectWalletButton from "../Account/ConnectWalletButton";

function Header() {
    const navRef = useRef<HTMLDivElement>(null);
    
    return(
        <header className="">
            <a href="">
                <img src="/mmmc_LogowithoutText_originalhead.png" width={100} height={100} className="mt-2"/>
            </a>
            <nav ref={navRef} className="inline-block flex flex-col justify-center gap-4 md:flex-row align-baseline ">
                <Link href="/events">
                    <a className="mt-10"><h1 className="text-white">Events</h1></a>
                </Link>
                <br/>
                <Link href="/collectibles">
                    <a className="mt-10"><h1 className="text-white">Collectibles</h1></a>
                </Link>
                <br/>
                <Link href="/collectibles">
                    <a className="mt-10"><h1 className="text-white">Other thing</h1></a>
                </Link>
                <br/>
                <ConnectWalletButton size={"large"} showUserDetails={true}/>
                <br/>
            </nav>
        </header>
    );
}

export default Header