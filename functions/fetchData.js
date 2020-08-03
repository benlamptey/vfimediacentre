import React, {useEffect, useState} from 'react';

export const fetchData = endpoint => {
    const [messages, setState] = useState([]);
    console.log(endpoint);
        fetch(endpoint).then((data) => data.json()).then(
            (data) => setState(data),
        ).catch((error) => {
            console.error(error);
        });
    return messages;
};
