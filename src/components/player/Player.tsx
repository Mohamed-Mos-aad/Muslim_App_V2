// ** Assets
import { getRadios } from '../../api/radio/radioApi';
import { playerPauseIcon, playerPlayIcon, playerSkipBackIcon, playerSkipForwardIcon, repeatIcon, arrowsShuffleIcon } from '../../assets/icons/icons'
// ** Style 
import style from '../../style/components/player/player.module.css'
// ** Hooks && Tools
import { useEffect, useRef, useState } from 'react'
// ** Interfaces
interface Radio {
    id: number;
    name: string;
    url: string;
}


export default function Player() {
    // ** Ref
    const audioRef = useRef<HTMLAudioElement | null>(null)


    // ** States
    const [audioPlay,setAudioPlay] = useState<boolean>(false);
    const [audioTypeRadio,setAudioType] = useState<boolean>(true);
    const [radios,setRadios] = useState<Radio[]>([]);
    const [currentRadioIndex,setCurrentRadioIndex] = useState<number>(0);
    const [audioSrc,setAudioSrc] = useState<string>('');



    // ** Handlers
    const changeAudioStateHandler = ()=>{
        setAudioPlay(prev => !prev);
    }
    const changeRadioChannelHandler = (state:string)=>{
        if (state === 'next' && currentRadioIndex < radios.length - 1)
        {
            setCurrentRadioIndex(prev => prev + 1);
        } else if (state === 'back' && currentRadioIndex > 0)
        {
            setCurrentRadioIndex(prev => prev - 1);
        }
    }



    // ** UseEffect
    useEffect(()=>{
        setAudioType(true);
        if(audioPlay)
        {
            audioRef.current?.play();
        }
        else
        {
            audioRef.current?.pause();
        }
    },[audioPlay])
    useEffect(() => {
        const fetchRadios = async () => {
            const radios = await getRadios();
            setRadios(radios);
        };
        fetchRadios();
    }, []);
    useEffect(() => {
        if (radios.length === 0) return;
        setAudioSrc(radios[currentRadioIndex].url);
    }, [radios,currentRadioIndex]);
    useEffect(() => {
        if (!audioSrc || !audioRef.current) return;
        audioRef.current.load();
        if (audioPlay) {
            audioRef.current.play();
        }
    }, [audioSrc,audioPlay]);


    return (
        <>
            <div className={style.player}>
                <div className={style.progress_bar}>
                    <div className={style.bar_timer}>
                        <span>0:00</span>
                        <span>0:00</span>
                    </div>
                    <div className={style.bar}>
                        <span style={{width: `${audioTypeRadio && 100 }%`}}></span>
                    </div>
                </div>
                <div className={style.player_btns}>
                    <button className={style.unactive}>
                        <img src={repeatIcon} alt="" />
                    </button>
                    <div className={style.main_btns}>
                        <button>
                            <img src={playerSkipBackIcon} alt="" onClick={()=>{changeRadioChannelHandler('back')}}/>
                        </button>
                        <button>
                            <img src={audioPlay ? playerPauseIcon : playerPlayIcon} alt="" onClick={changeAudioStateHandler}/>
                        </button>
                        <button>
                            <img src={playerSkipForwardIcon} alt="" onClick={()=>{changeRadioChannelHandler('next')}}/>
                        </button>
                    </div>
                    <button className={style.unactive}>
                        <img src={arrowsShuffleIcon} alt="" />
                    </button>
                </div>
                {(radios.length > 0 && audioSrc != '') && (
                    <audio ref={audioRef} src={audioSrc} preload="auto"></audio>
                )}
            </div>
        </>
    )
}