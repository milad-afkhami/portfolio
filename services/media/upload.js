import { endpoints } from "@constants";
import { Http } from "@utils";

interface uploadMediaTypes {
  ft?: Number;
  fi?: String;
  ma?: File;
  mc?: String;
  url?: String;
}

export const uploadMedia = async (data: uploadMediaTypes) => {
  return Http.post({
    url: endpoints.mediaUpload,
    type: "formData",
    data,
  });
};
