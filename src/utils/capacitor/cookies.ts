import { CapacitorCookies } from "@capacitor/core";

const getCookies = () => {
  return document.cookie;
};

const getOneCookie = (key: string) => {
  const cookies = document.cookie;
  const cookieArray = cookies.split(";");
  const cookieWithKey = cookieArray.find((cookie) => cookie.includes(key));
  const cookie = cookieWithKey?.split("=")[1];
  return cookie;
};

const setCookie = (key: string, value: string) => {
  document.cookie = key + "=" + value;
};

const setCapacitorCookie = async () => {
  await CapacitorCookies.setCookie({
    url: "http://example.com",
    key: "language",
    value: "en",
  });
};

const deleteCookie = async (key: string) => {
  await CapacitorCookies.deleteCookie({
    url: "http://localhost:8100",
    key,
  });
};

const clearAllCookies = async () => {
  await CapacitorCookies.clearAllCookies();
};

export {
  getCookies,
  getOneCookie,
  setCookie,
  setCapacitorCookie,
  deleteCookie,
  clearAllCookies,
};
