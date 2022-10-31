import { AUTH_LOCAL_STORAGE_KEY } from "@constants/CApp";
import { IAuth, IAxiosConfig } from "@interfaces/IAuth";

const getAuth = (): IAuth | undefined => {
  if (!localStorage) return;

  const lsValue: string | null = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY);
  if (!lsValue) return;

  try {
    const auth: IAuth = JSON.parse(lsValue) as IAuth;
    if (auth) return auth;
  } catch (error) {
    console.error("AUTH LOCAL STORAGE PARSE ERROR", error);
  }
};

const setAuth = (auth: IAuth) => {
  if (!localStorage) return;

  try {
    localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, JSON.stringify(auth));
  } catch (error) {
    console.error("AUTH LOCAL STORAGE SAVE ERROR", error);
  }
};

const removeAuth = () => {
  if (!localStorage) return;

  try {
    localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
  } catch (error) {
    console.error("AUTH LOCAL STORAGE REMOVE ERROR", error);
  }
};

export function setupAxios(axios: any) {
  axios.defaults.headers.Accept = "application/json";
  axios.interceptors.request.use(
    (config: IAxiosConfig) => {
      const auth = getAuth();
      if (auth?.token) config.headers.Authentication = `Bearer ${auth.token}`;
      return config;
    },
    (err: any) => Promise.reject(err)
  );
}

export { getAuth, setAuth, removeAuth, AUTH_LOCAL_STORAGE_KEY };
