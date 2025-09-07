// ** Style
import style from '../style/layouts/mainLayout.module.css'
// ** Components
import NavBar from './../components/navbar/NavBar';
import PrayerTimes from '../components/prayer times/PrayerTimes';
import Player from '../components/player/Player'
// ** Store
import { useSystemStore } from '../store/system/useSystemStore';



export default function MainLayout() {
    // ** Store
    const { system } = useSystemStore();
    


    return (
        <>
            <div className={`${style.mainLayout} ${system.themeMode}`}>
                <NavBar />
                <PrayerTimes />
                <Player />
            </div>
        </>
    )
}