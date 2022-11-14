import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://vue-axios-5a565-default-rtdb.europe-west1.firebasedatabase.app',
})

instance.defaults.headers.common['Is-Admin'] = 'true';

