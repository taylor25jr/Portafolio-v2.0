interface RequestOptions {
  method: string,
  headers: HeadersInit,
  body: any,
  signal: AbortSignal ,
}

interface ReturnedFunctions {
  get: (url: string, options: RequestOptions) => Promise <object>;
  post: (url: string, options: RequestOptions) => Promise <object>;
  put: (url: string, options: RequestOptions) => Promise <object>;
  del: (url: string, options: RequestOptions) => Promise <object>;
}

export const helpHttp = (): ReturnedFunctions => {
  const customFetch = (endpoint: string, options: RequestOptions): Promise <object> => {
    const defaultHeader = {
      accept: "application/json",
    };

    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    //console.log(options);
    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrió un error",
            })
      )
      .catch((err) => err);
  };

  const get = (url: string, options: RequestOptions) =>
    customFetch(url, options);

  const post = (url: string, options: RequestOptions) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url: string, options: RequestOptions) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url: string, options: RequestOptions) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  const returned: ReturnedFunctions = {
    get,
    post,
    put,
    del,
  };

  return returned;
};
