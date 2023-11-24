import { Store } from "pullstate";
interface IInitialState {
  isLoggedIn: boolean;
}
let initialState: IInitialState = {
  isLoggedIn: false,
};
export const authStore = new Store(initialState);

export class authStoreHelper {
  static setLoggedIn(isLogin: boolean) {
    return authStore.update((s) => {
      s.isLoggedIn = isLogin;
    });
  }
}
