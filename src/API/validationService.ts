import axios from "axios";
import {IResponse} from "../models/validation";

export default class ValidationService {
    static _apiBase = 'http://apilayer.net/api/validate';

    static validatePhoneNumber = async (phoneNumber: string) => {
        const res = await axios.get(this._apiBase, {
            params: {
                access_key: process.env.REACT_APP_API_KEY,
                number: phoneNumber,
                country_code: 'RU',
                format: 0,
            }
        })
        return res.data as IResponse;
    }
}