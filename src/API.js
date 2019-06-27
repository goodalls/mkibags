import { consumerKey } from './key';
import { secretKey } from './key';

export const fetchParse = async url => {
  try {
    const initialFetch = await fetch('https://mkibags.com/wc-api/v3/products/categories', {
      method: 'get',
      headers: new Headers({
        'Authorization': 'Basic ' + btoa({ consumerKey } + ':' + { secretKey }),
        'Content-Type': 'application/json'
      })
    });
    const response = await initialFetch.json();
    return response;
  } catch (err) {
    return 'fetchParse error ' + err;
  }
};
