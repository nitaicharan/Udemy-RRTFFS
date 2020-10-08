import { Dispatch } from "react";
import { IServices } from "../services";

interface ILogin {
    email: string,
    password: string,
}

export default function reducer(state = {}) {
    return state;
}

export const login = ({ email, password }: ILogin) => async (dispatch: Dispatch, getState: () => any, { auth }: IServices) => {
    const result = await auth.signInWithEmailAndPassword(email, password);
    console.log(result);
}
