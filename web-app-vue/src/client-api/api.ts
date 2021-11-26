import { apiUrlPath } from '@/constants/apiUrl';
import Authorization from '@/helpers/authorization-helper';
import Cookies from '@/helpers/cookies';
import ApiRequestResult from '@/interfaces/local-Interfaces/api-request-result';
import axios, { AxiosError, AxiosInstance } from 'axios';

export default class Api {
  private static currentInstance: Api;
  private httpClient: AxiosInstance = null as any;
  private token: string | any = null;
  static get instance(): Api {
    if (!this.currentInstance) {
      this.currentInstance = new Api();
      this.currentInstance.register();
      return this.currentInstance;
    } else return this.currentInstance;
  }
  private register() {
    this.httpClient = axios.create({ baseURL: apiUrlPath + '/' });
    // this.httpClient.interceptors.request.use(AxiosLogger.requestLogger);
    // this.httpClient.interceptors.response.use(AxiosLogger.responseLogger);
    this.httpClient.interceptors.response.use(
      (response) => {
        return response;
      },
      (error: AxiosError) => {
        const { config, request } = error;
        const { url } = config;
        console.error(url, 'Please check url');
        console.error(request, 'request field');
        if (request?.status === 401) Authorization.logout();
        return Promise.reject(error);
      }
    );

    //TODO: httpClient!.defaults!.headers! - check is null
    this.httpClient!.defaults!.headers!['Accept-Language'] = 'ru-Ru';
    const token = localStorage.getItem('user-token');
    if (token) this.httpClient!.defaults!.headers!['Authorization'] = `Bearer ${token}`;
    const date = new Date();
    this.httpClient!.defaults!.headers!['Timezone'] = (-date.getTimezoneOffset() / 60).toString();
  }

  authorize(token: string) {
    this.token = token;
    //TODO: httpClient!.defaults!.headers! - check is null (ALL FILE)
    this.httpClient!.defaults!.headers!['Authorization'] = `Bearer ${token}`;
    //timezone return diff betwen utc and local date so -180 will be +3 hours from utc
    const date = new Date();
    this.httpClient!.defaults!.headers!['Timezone'] = (-date.getTimezoneOffset() / 60).toString();
  }
  getAsync<T>(url: string, config?: any): Promise<ApiRequestResult<T>> {
    return this.httpClient.get(url, config).then(
      (result) => {
        return result as ApiRequestResult<T>;
      },
      (result) => {
        this.processErrorResponse(result);
        return result.response as ApiRequestResult<T>;
      }
    );
  }

  postAsync<T>(url: string, data?: any, config?: any): Promise<ApiRequestResult<T>> {
    return this.httpClient.post(url, data, config).then(
      (result) => {
        return result as ApiRequestResult<T>;
      },
      (result) => {
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
      (result) => {
        return result as ApiRequestResult<T>;
      },
      (result) => {
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
        Cookies.set('login-message', 'More rights required', {
          expired: date,
        });
      } else if (result.response.status === 500) {
        if (result.response.data == null || result.response.data.length === 0) result.response.data = 'Server error';
      }
      return;
    } else if (result.message === 'Network Error') {
      Cookies.set('login-message', 'Server connection error', {
        expired: date,
      });
      return;
    }
  }
}
