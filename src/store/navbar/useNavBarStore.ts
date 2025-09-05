// ** Hooks && Tools
import { create } from 'zustand'
// ** Interfaces
interface IRadio {
    id: number;
    name: string;
    url: string;
}
interface INavBarState {
    list: IRadio[];
    changeList: (newList: IRadio[]) => void;
}


export const useNavBarStore = create<INavBarState>((set)=>({
    list: [],
    changeList: (newList) => set({ list: newList }),
}));