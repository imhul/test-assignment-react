import React from 'react';
import { Button, } from 'antd';

const MainHeader = () => {
    return ( 
        <nav>
            <Button href="/" type="primary" shape="round" icon="home" size="small">
              Home
            </Button>
            <Button href="/add" type="primary" shape="round" icon="folder-add" size="small">
              Create academy
            </Button>
        </nav>
    )
};

export default MainHeader;