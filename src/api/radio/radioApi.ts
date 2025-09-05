// ** Hooks && Tools
import axios from "axios"
// ** Interfaces
interface IRadio {
    id: number;
    name: string;
    url: string;
}
interface IRadiosResponse {
    radios: IRadio[];
}



// ** States
const api = 'https://mp3quran.net/api/v3/radios?language=ar'



export const getRadios = async (): Promise<IRadio[]> => {
    try {
        const res = await axios.get<IRadiosResponse>(api);
        return res.data.radios;
    } catch (error) {
        console.error(`get radios ${error}`);
        return [];
    }
};