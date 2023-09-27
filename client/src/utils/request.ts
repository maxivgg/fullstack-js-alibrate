const getHeaders = () => ({
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "x-access-token": localStorage.getItem("token"),
} as HeadersInit);

export function requestGet(path: string) {
  return fetch(path, {
    headers: getHeaders(),
  });
}

export function requestPost(path: string, options = {} as any) {
  return fetch(path, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(options),
  });
}

export function requestPut(path: string, options = {} as any) {
  return fetch(path, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(options),
  });
}

export function requestDelete(path: string, options = {} as any) {
  return fetch(path, {
    method: "DELETE",
    headers: getHeaders(),
    body: JSON.stringify(options),
  });
}
