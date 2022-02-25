import axios from "axios";

export default axios.create({
    baseURL: 'http://xeamhr.com/mail.php',
    headers: {
        Accept: 'application/json'
    }
});