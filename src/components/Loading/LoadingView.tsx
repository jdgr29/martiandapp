import { Spin } from "antd";
import React from "react";

const LoadingView = () => {
    return( 
    <div className='flex justify-center h-screen'>
      <div className='m-32'>
        <Spin size="large" style={{}}/>
      </div>
    </div>
    );
}

export default LoadingView