// ** Assets
import { listIcon, downIcon, lightModeIcon, darkModeIcon, languageIcon } from '../../assets/icons/icons'
// ** Style
import style from '../../style/components/navbar/navbar.module.css'
// ** Hooks && Tools
import { useEffect, useState } from 'react'
// ** Store
import { usePlayerStore } from '../../store/player/usePlayerStore';
import { useNavBarStore } from '../../store/navbar/useNavBarStore';
import { useSystemStore } from '../../store/system/useSystemStore';




export default function NavBar() {
    // ** Store
    const { palyerData, changePlayerData } = usePlayerStore();
    const { list } = useNavBarStore();
    const { system, changeThemeMode } = useSystemStore();



    // ** States
    const [dropMenuOpen,setDropMenuOpen] = useState<boolean>(false);



    // ** Handlers
    const changeThemeModeHandler = ()=>{
        const newTheme = system.themeMode === 'darkMode' ? 'lightMode' : 'darkMode';
        changeThemeMode(newTheme);
    }
    const changeDropMenuStateHandler = ()=>{
        setDropMenuOpen(prev => !prev)
    }



    // ** Render
    const menuListRender = list.map(item => 
        <li 
            className={palyerData.id === item.id ? style.active_audio : ''}
            onClick={()=>{changePlayerData({id: item.id, name: item.name, url: item.url})}}
            key={item.id}
        >{item.name}</li>
    )


    // ** UseEffect
    useEffect(()=>{
        changeThemeMode(system.themeMode);
    },[changeThemeMode,system.themeMode])




    return (
        <>
            <nav className={system.themeMode}>
                <div className={style.menu}>
                    <button>
                        <img src={listIcon} alt="list Icon" />
                    </button>
                    <div className={style.audio_list} onClick={changeDropMenuStateHandler}>
                        <h1>{palyerData.name}</h1>
                        <img src={downIcon} alt="" />
                        {
                            (dropMenuOpen && list.length > 0) && 
                            <ul>
                                {menuListRender}
                            </ul>
                        }
                    </div>
                </div>
                <div className={style.options}>
                    <button onClick={changeThemeModeHandler}>
                        {
                            system.themeMode === 'lightMode' ? 
                            <img src={lightModeIcon} alt="lightMode Icon" />
                            :
                            <img src={darkModeIcon} alt="darkMode Icon" />                                
                        }
                    </button>
                    <button>
                        <img src={languageIcon} alt="language Icon" />
                    </button>
                </div>
            </nav>
        </>
    )
}