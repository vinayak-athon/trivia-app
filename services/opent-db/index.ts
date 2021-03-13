import { Http } from "@Services";
import { IHttp, IOpentdb } from "@Interfaces";

export const Opentdb = {
  Get: async (
    queryString: IHttp.RequestQueryString
  ): Promise<IOpentdb.Response> => {
    let response: IOpentdb.Response;
    try {
      response = await Http.Request<IOpentdb.Response>(
        "GET",
        "/question",
        queryString
      );
    } catch (error) {
      response = {
        response_code: -1,
        results: [],
      };
    }

    return response;
  },
};
