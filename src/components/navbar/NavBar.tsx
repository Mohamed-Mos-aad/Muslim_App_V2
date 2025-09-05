// ** Assets
import { useState } from 'react'
import { listIcon, downIcon, lightModeIcon, darkModeIcon, languageIcon } from '../../assets/icons/icons'
// ** Style
import style from '../../style/components/navbar/navbar.module.css'




export default function NavBar() {
    // ** States
    const [themeMode,setThemeMode] = useState<'light' | 'dark'>('light');



    // ** Handlers
    const changeThemeModeHandler = ()=>{
        setThemeMode(prev => prev === 'dark' ? 'light' : 'dark');
    }



    return (
        <>
            <nav>
                <div className={style.menu}>
                    <button>
                        <img src={listIcon} alt="list Icon" />
                    </button>
                    <div className={style.audio_list}>
                        <h1>Test</h1>
                        <img src={downIcon} alt="" />
                    </div>
                </div>
                <div className={style.options}>
                    <button onClick={changeThemeModeHandler}>
                        {
                            themeMode === 'light' ? 
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