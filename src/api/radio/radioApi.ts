// ** Hooks && Tools
import axios from "axios"
// ** Interfaces
interface Radio {
    id: number;
    name: string;
    url: string;
}
interface RadiosResponse {
    radios: Radio[];
}



// ** States
const api = 'https://mp3quran.net/api/v3/radios?language=ar'



export const getRadios = async (): Promise<Radio[]> => {
    try {
        const res = await axios.get<RadiosResponse>(api);
        return res.data.radios;
    } catch (error) {
        console.error(`get radios ${error}`);
        return [];
    }
};