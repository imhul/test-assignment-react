import React from 'react';
import { Spin } from 'antd';

const Preloader = () => {
    return ( 
        <div className="Preloader">
            <Spin size="large" />
        </div>
    )
};

export default Preloader;
