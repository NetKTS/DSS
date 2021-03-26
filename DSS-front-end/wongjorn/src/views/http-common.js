import axios from 'axios';
// หน้านี้ไม่ได้ใช้
export const HTTP = axios.create({
  baseURL: `https://localhost:2002/api/create/Namelist`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})