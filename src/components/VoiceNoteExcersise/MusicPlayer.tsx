import React, { useState, useEffect } from 'react'
import ReactJkMusicPlayer from "react-jinke-music-player"

const fetchLink = 'https://ear-trainer-api.herokuapp.com/api/tracks/'
type Props = {
    title: string
    cover: string
    backendTitle: string
}

const MusicPlayer = ({ title, cover, backendTitle}: Props) => {
    const [trackId,setTrackId] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        async function getTrackId() {
            setIsLoading(true)
            try {
                fetch(`${fetchLink}title/${backendTitle}`, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGM4NDcxNWYzMzI5ZDAwMTdiZTg0MjYiLCJpYXQiOjE1NzM0MDY2ODN9.Wmijm5vRdM2BajZE-3XciVWhDmJDTGEjbCETGgcUI0k'
                    }
                })
                .then(res => res.json())
                .then(res => {
                    setTrackId(res)
                    setIsLoading(false)
                })
                .catch(err => {
                    throw new Error(err)
                })
            } catch(error) {
                throw new Error(error)
            }
        }
        getTrackId()
    },[backendTitle])
    return (
        !isLoading ? 
        <ReactJkMusicPlayer
            audioLists={[{
                name: title,
                cover: cover,
                musicSrc: () => {
                    return Promise.resolve(`${fetchLink}${trackId}.mp3`)
                }
            }]}
            defaultPlayIndex={0}
            theme='dark'
            preload={true}
            mode='full'
            autoPlay={false}
            showDownload={true}
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