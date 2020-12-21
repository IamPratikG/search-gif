import config from '../config/appConfig';

async function searchGifApi(val) {
    const {api_key, reqUrl, limit} = config;
    const url = `${reqUrl}?api_key=${api_key}&q=${val}&limit=${limit}`;
    
    const response = await fetch(url);
    return response.json();
}

export default searchGifApi;