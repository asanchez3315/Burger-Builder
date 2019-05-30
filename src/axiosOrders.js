import axios from 'axios';

const instance = axios.create({
baseURL:'https://react-burger-e71ce.firebaseio.com/'
});
export default  instance