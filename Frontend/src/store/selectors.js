import { selector } from "recoil";
import { loggedInUser, messageStateValue } from "./state";

export const userState = selector({
    key: 'loggedInUser', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const loggedInUserState = get(loggedInUser);
      return loggedInUserState;
    },
  });
