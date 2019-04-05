import axios from 'axios';

const KEY = 'AIzaSyA5YI3jgvzzN-YAVfQRm7ipR1iamE2GQvM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY 


    }
});