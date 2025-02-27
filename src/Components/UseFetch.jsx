import {useEffect, useState} from 'react';

const UseFetch = (url) => {
    const [data, setData] = useState();
    useEffect(() => {
        fetch(url).then((response)=>response.json()).then((data)=>setData(data))
        // initiates HTTP request to url
        // converts response from server to JSON format
        // sets retrived data to the state variable data
    },[])
    return [data]
}

export default UseFetch
