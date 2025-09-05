// ** Style
import style from '../../style/components/prayer times/prayerTimes.module.css'
// ** Hooks && Tools
import { useEffect, useState } from 'react'



export default function PrayerTimes() {
    // ** States
    const [ userLocation, setUserLocation ] = useState({ Latitude: 0, Longitude: 0 });
    const [ data, setData ] = useState({
        date: { gregorian: {}, hijri :{}, readable: '', timestamp: ''},
        meta: { latitude: 0, latitudeAdjustmentMethod: '', longitude: 0, method: {}},
        timings: {Asr: '', Dhuhr: "", Fajr: "", Firstthird: "", Imsak: "", Isha: "", Lastthird: "", Maghrib: "", Midnight: "", Sunrise: "", Sunset: ""}
    })




    // ** Handlers
    const fetchPrayerTimesDataHandler = async ()=>{
        const res = await fetch('https://api.aladhan.com/v1/timings/01-01-2025?latitude=51.5194682&longitude=-0.1360365&method=3');
        const { data } = await res.json();
        setData(data);
    }


    // ** UseEffect
    useEffect(()=>{
        if ("geolocation" in navigator) 
        {
            navigator.geolocation.getCurrentPosition(
            (position) => {
                setUserLocation({Latitude: position.coords.latitude, Longitude: position.coords.longitude})
            },
            (error) => {
                console.error("Error getting location:", error.message);
            });
        }
    },[])
    useEffect(()=>{
        fetchPrayerTimesDataHandler();
    },[userLocation])



    return (
        <>
            <section className={style.prayerTimes}>
                <ul>
                    <li>
                        <h1>Fajr</h1>
                        <h2>{data.timings.Fajr}</h2>
                    </li>
                    <li>
                        <h1>Dhuhr</h1>
                        <h2>{data.timings.Dhuhr}</h2>
                    </li>
                    <li>
                        <h1>Asr</h1>
                        <h2>{data.timings.Asr}</h2>
                    </li>
                    <li>
                        <h1>Maghrib</h1>
                        <h2>{data.timings.Maghrib}</h2>
                    </li>
                    <li>
                        <h1>Isha</h1>
                        <h2>{data.timings.Isha}</h2>
                    </li>
                    <div className={style.prayer_progress_bar}>
                        <div className={style.bar}></div>
                    </div>
                </ul>
            </section>
        </>
    )
}