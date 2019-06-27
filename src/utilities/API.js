import { consumerKey, secretKey } from '../key';

export const fetchParse = async (url) => {
  try {
    const initialFetch = await fetch(url, {
      method: 'get',
      headers: new Headers({
        'Authorization': 'Basic ' + btoa(consumerKey() + ':' + secretKey()),
        'Content-Type': 'application/json'
      })
    });
    const response = await initialFetch.json();
    console.log(response);
    return response;
  } catch (err) {
    return 'fetchParse error ' + err;
  }
};
