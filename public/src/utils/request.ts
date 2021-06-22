const getHeaders = () => ({
  Accept: "application/json",
  "Content-Type": "application/json",
  "x-access-token": localStorage.getItem("token"),
} as HeadersInit);

export function requestGet(path) {
  return fetch(path, {
    headers: getHeaders(),
  });
}

export function requestPost(path, options = {} as any) {
  return fetch(path, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(options),
  });
}

export function requestPut(path, options = {} as any) {
  return fetch(path, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(options),
  });
}

export function requestDelete(path, options = {} as any) {
  return fetch(path, {
    method: "DELETE",
    headers: getHeaders(),
    body: JSON.stringify(options),
  });
}
