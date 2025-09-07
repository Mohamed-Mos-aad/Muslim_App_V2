// ** Hooks && Tools
import { create } from 'zustand'
// ** Interfaces
interface ISystemState {
    system: {
        themeMode: 'darkMode' | 'lightMode',
    };
    changeThemeMode: (newThemeMode: 'darkMode' | 'lightMode') => void;
}


export const useSystemStore = create<ISystemState>((set)=>({
    system: {
        themeMode: 'lightMode',
    },
    changeThemeMode: (newThemeMode) => set((prev)=>({...prev,system: {
        ...prev.system,
        themeMode: newThemeMode,
    }})),
}));