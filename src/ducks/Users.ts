import { Dispatch } from "react";
import { IServices } from "../services";

export interface ILogin {
    email: string,
    password: string,
}

export default function reducer(state = {}) {
    return state;
}

export const login = ({ email, password }: ILogin) =>
    async (dispatch: Dispatch<any>, getState: () => any, { auth }: IServices) => {
        const result = await auth.signInWithEmailAndPassword(email, password);
        console.log(result);
    }
