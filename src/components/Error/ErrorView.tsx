import { NextRouter, Router } from "next/router";
import React from "react";

const ErrorView = (router: NextRouter) => {
    return(
        <div className='flex justify-center h-screen'>
            <div className='m-auto'>
                <h2 className='flex justify-center'>Sorry, Something Went Wrong.</h2>
                <div className="flex justify-center my-2">
                <button className="bg-cyan-400 px-12 py-2 rounded-lg hover:bg-[#36A9E1]" onClick={async () => router.push('/events')}>Home</button>
                </div>
            </div>
        </div>
    );
}

export default ErrorView