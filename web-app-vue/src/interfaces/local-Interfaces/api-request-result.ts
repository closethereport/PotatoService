interface ApiRequestResult<T> {
  config: any;
  data: T | string;
  headers: any;
  request: any;
  status: number;
  statusText: string;
}

export default ApiRequestResult;
