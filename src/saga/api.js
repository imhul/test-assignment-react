import * as axios from 'axios';

const nocors = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "https://test.api.sportstars.club/academies";
let apiUrl = `${nocors}${baseUrl}`;

export const getApi = (type, id) => {
    const params = { 
        limit: 4,
        type: 'general',
    }
    if (type && id) {
        if (type === 'after') params.startingAfter = id;
        if (type === 'before') params.endingBefore = id;
    }
    return axios.get(apiUrl, { params },
    ).then(({ data }) => data)
};

export const postApi = ( data ) => {
    return axios.post(apiUrl, data.payload, { 
        data: data.payload,
        headers: { 
            accept: "application/json", "Content-Type": "application/json" 
        }
    }).then(({ data }) => data)
};