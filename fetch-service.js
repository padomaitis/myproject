export function fetchData(url, callback) {
  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => callback(data));
}

export const DEFAULT_URL = "www.ggg.fgff";

export default function bbb() {
  console.log("Default function bbb");
}
