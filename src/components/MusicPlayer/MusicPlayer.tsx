import React, { useState, useEffect } from 'react'
import ReactJkMusicPlayer from "react-jinke-music-player"

type Props = {
    title: string
    backendTitle: string
    showPlay: boolean
    onAudioStop: () => void
}

const MusicPlayer = ({ title, showPlay, onAudioStop, backendTitle}: Props) => {
    const [audio, setAudio] = useState<any>('')
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        async function getAudio() {
            setIsLoading(true)
            try {
                fetch(`${process.env.REACT_APP_API_URL}tracks/title/${backendTitle}`, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'x-auth-token': `${process.env.REACT_APP_DOWNLOAD_USER}`
                    }
                })
                .then(res => res.json())
                .then(res => {
                    setAudio(res)
                    setIsLoading(false)
                })
                .catch(err => {
                    throw new Error(err)
                })
            } catch(error) {
                throw new Error(error)
            }
        }
        getAudio()
    },[backendTitle])
    
    return (
        !isLoading ? 
        <ReactJkMusicPlayer
            audioLists={[{
                name: title,
                cover: audio.cover,
                musicSrc: () => {
                    return Promise.resolve(`${process.env.REACT_APP_API_URL}tracks/${audio._id}.mp3`)
                }
            }]}
            defaultPlayIndex={0}
            theme='dark'
            preload={true}
            mode='full'
            autoPlay={false}
            showPlay={showPlay}
            showDownload={true}
            onAudioEnded={onAudioStop}
            showThemeSwitch={false}
            glassBg={true}
            remove={false}
            toggleMode={false}
            showReload={false}
            showPlayMode={false}
            playModeText={undefined}
        />
        : null
    )
    
}


export default MusicPlayer