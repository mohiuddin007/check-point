import request from "../utils/request";

export async function postUserLogin(params) {
  return request("/user/login", {
    method: "POST",
    data: params || null,
  });
}

export async function postUserRegistration(params) {
  return request("/user/register", {
    method: "POST",
    data: params || null,
  });
}

export async function postUserVerification(header) {
  return request(
    "/user/verification",
    {
      method: "POST",
      data: {},
    },
    header
  );
}

export async function postGenerateLink(header) {
  return request(
    "/user/generate/link",
    {
      method: "POST",
      data: {},
    },
    header
  );
}

export async function postResetPassGenerateLink(params) {
  console.log("params ", params.data);
  return request("/user/reset-password/generate/link", {
    method: "POST",
    data: params || null,
  });
}

export async function patchForgetPass(params) {
  return request(
    "/user/forget/password",
    {
      method: "POST",
      data: (params && params.data) || null,
    },
    params.header
  );
}