const BASE_URL = 'https://mate-academy.github.io/react_phone-catalog/_new';

function wait(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

type RequestMethod = 'GET';

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return wait(300)
    .then(() => fetch(BASE_URL + url, options))
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
};
