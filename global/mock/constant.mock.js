const {
  NEXT_PUBLIC_FE_API_ENDPOINT,
  NEXT_PUBLIC_FE_FE_ENDPOINT,
  GOOGLE_MAP_KEY,
  GOOGLE_LOGIN_API,
  FB_LOGIN_API,
} = process.env;

const IMAGE_PATH = "https://s3-example/";
const FILE_PATH = "https://s3-example/";

module.exports = {
  debug: true,
  prefix: "/v1",
  filePath: FILE_PATH,
  liveAPI: NEXT_PUBLIC_FE_API_ENDPOINT,
  baseUrl: NEXT_PUBLIC_FE_FE_ENDPOINT,
  GOOGLE_LOGIN_API: GOOGLE_LOGIN_API,
  FB_LOGIN_API: FB_LOGIN_API,
  imgpath: IMAGE_PATH,
};
