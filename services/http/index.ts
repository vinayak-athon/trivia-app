import "isomorphic-unfetch";
import { stringify } from "query-string";
import { IHttp } from "@Interfaces";

const BaseUrl = `${process.env.NEXT_PUBLIC_API_URL}/api`;
export const Http = {
  Request: async <A>(
    methodType: string,
    url: string,
    queryString?: IHttp.RequestQueryString
  ): Promise<A> => {
    return new Promise((resolve, reject) => {
      const query = queryString
        ? `?${stringify({
            ...queryString,
          })}`
        : "";

      fetch(`${BaseUrl}${url}${query}`, {
        cache: "no-cache",
        headers: {
          "content-type": "application/json",
        },
        method: `${methodType}`,
      })
        .then(async response => {
          if (response.status === 200) {
            return response.json().then(resolve);
          }
          return reject(response);
        })
        .catch(e => {
          reject(e);
        });
    });
  },
};
