import axios, { AxiosInstance } from 'axios';
import { apiUrlPath } from '@/constants/apiUrl';
import ApiRequestResult from '@/interfaces/api-request-result';
import Cookies from '@/helpers/cookies';
import { defaultLanguage } from '@/constants/localization/localization.constans';
import { $t } from '@/main';
/* import * as AxiosLogger from 'axios-logger'; */
//TODO: 404 - redirect and message page not found, unauthorized - redirect to login
export default class Api {
  private static currentInstance: Api;
  // Find another solution - should be not any.
  private httpClient: AxiosInstance = null as any;
  private token: string | any = null;

  private constructor() {}

  static get instance(): Api {
    if (!this.currentInstance) {
      this.currentInstance = new Api();
      this.currentInstance.register();
      return this.currentInstance;
    } else return this.currentInstance;
  }

  private register() {
    // en-GB
    // ru-RU
    //
    this.httpClient = axios.create({ baseURL: apiUrlPath + '/' });
    // this.httpClient.interceptors.request.use(AxiosLogger.requestLogger);
    // this.httpClient.interceptors.response.use(AxiosLogger.responseLogger);
    const language = localStorage.getItem('language');
    language
      ? (this.httpClient.defaults.headers['Accept-Language'] = language)
      : (this.httpClient.defaults.headers['Accept-Language'] = defaultLanguage);
    const token = localStorage.getItem('user-token');
    if (token) this.httpClient.defaults.headers['Authorization'] = `Bearer ${token}`;
    const date = new Date();
    this.httpClient.defaults.headers['Timezone'] = (-date.getTimezoneOffset() / 60).toString();
  }

  authorize(token: string) {
    this.token = token;
    this.httpClient.defaults.headers['Authorization'] = `Bearer ${token}`;
    //timezone return diff betwen utc and local date so -180 will be +3 hours from utc
    const date = new Date();
    this.httpClient.defaults.headers['Timezone'] = (-date.getTimezoneOffset() / 60).toString();
  }

  setLanguage(language: string) {
    console.log(language, 'setLanguage');
    this.httpClient.defaults.headers['Accept-Language'] = language;
  }

  getAsync<T>(url: string, config?: any): Promise<ApiRequestResult<T>> {
    return this.httpClient.get(url, config).then(
      (result: any) => {
        return result as ApiRequestResult<T>;
      },
      (result: any) => {
        this.processErrorResponse(result);
        return result.response as ApiRequestResult<T>;
      }
    );
  }

  postAsync<T>(url: string, data?: any, config?: any): Promise<ApiRequestResult<T>> {
    return this.httpClient.post(url, data, config).then(
      (result: any) => {
        return result as ApiRequestResult<T>;
      },
      (result: any) => {
        this.processErrorResponse(result);
        return result.response as ApiRequestResult<T>;
      }
    );
  }

  putAsync<T>(url: string, data?: any): Promise<ApiRequestResult<T>> {
    return this.httpClient.put(url, data).then(
      (result: any) => {
        return result as ApiRequestResult<T>;
      },
      (result: any) => {
        this.processErrorResponse(result);
        return result.response as ApiRequestResult<T>;
      }
    );
  }

  deleteAsync<T>(url: string): Promise<ApiRequestResult<T>> {
    return this.httpClient.delete(url).then(
      (result: any) => {
        return result as ApiRequestResult<T>;
      },
      (result: any) => {
        this.processErrorResponse(result);
        return result.response as ApiRequestResult<T>;
      }
    );
  }

  getFileAsync(url: string, config?: any): any {
    return this.httpClient.get(url, config).then(
      (result: any) => {
        return result;
      },
      (result: any) => {
        this.processErrorResponse(result);
        return result.response;
      }
    );
  }

  private processErrorResponse(result: any) {
    const date = new Date();
    if (result.response != null) {
      if (result.response.status === 401) {
        date.setDate(date.getDate() + 1);
        Cookies.set('login-message', $t('MoreRightsRequired'), {
          expired: date,
        });
      } else if (result.response.status === 500) {
        if (result.response.data == null || result.response.data.length === 0) result.response.data = $t('ServerError');
      }
      return;
    } else if (result.message === 'Network Error') {
      Cookies.set('login-message', $t('ServerConnectionErrror'), {
        expired: date,
      });
      return;
    }
  }
}
