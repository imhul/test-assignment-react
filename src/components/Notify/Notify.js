import React from 'react';
import { notification } from 'antd';

const Notify = (type, message) => {
    const { title, desc } = message;
    notification[type]({
        message: title,
        description: desc,
    });
};

export default Notify;