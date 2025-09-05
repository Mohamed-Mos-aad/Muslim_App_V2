// ** Hooks && Tools
import { create } from 'zustand'
// ** Interfaces
interface IPlayerState {
    palyerData: {
        id: number,
        name: string,
        url: string
    };
    changePlayerData: (newPalyerData: { id: number, name: string, url: string }) => void;
}


export const usePlayerStore = create<IPlayerState>((set)=>({
    palyerData: {
        id: 0,
        name: '',
        url: ''
    },
    changePlayerData: (newPalyerData) => set({ palyerData: newPalyerData }),
}));