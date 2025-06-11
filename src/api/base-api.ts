import axios, { type Method, type AxiosRequestConfig } from 'axios';
import i18n from '../i18n/i18n';
import {shelfIdByLanguage} from "./../utils/fetchData"


interface FetchDataParams {
  url: string;
  method?: Method; 
  body?: object; 
  headers?: object; 
}
const apiKey = 'AIzaSyAhiZ95GS5epULr57LRRXKUfiWD8XCqC-E';


const getShelfId = (): string => {
  const lang = i18n.language || 'en';
  return shelfIdByLanguage[lang] || '1002';
};

export const fetchData = async ({ method = 'GET', body, headers }: FetchDataParams) => {
  try {

    const shelfId =getShelfId();
    
    const config: AxiosRequestConfig = {
      method, 
      url: `https://www.googleapis.com/books/v1/users/103639002406122584582/bookshelves/${shelfId}/volumes?key=${apiKey}`,
      headers, 
      data: body, 
    };

  
    const response = await axios(config);

    
    return response.data;
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
    throw error;
  }
};
