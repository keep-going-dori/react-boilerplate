import axios from 'axios';
const baseUrl = import.meta.env.VITE_APP_PUBLIC_CLIENT_URL;
interface loginData {
  username: string;
  password: string;
}
export const userLogin = (loginData: loginData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios.post(`${baseUrl}/api/accounts/login/`, loginData, config);
};
