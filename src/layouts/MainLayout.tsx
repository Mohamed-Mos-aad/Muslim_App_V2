// ** Style
import style from '../style/layouts/mainLayout.module.css'
// ** Components
import NavBar from './../components/navbar/NavBar';
import PrayerTimes from '../components/prayer times/PrayerTimes';
import Player from '../components/player/Player'



export default function MainLayout() {
    return (
        <>
            <div className={style.mainLayout}>
                <NavBar />
                <PrayerTimes />
                <Player />
            </div>
        </>
    )
}