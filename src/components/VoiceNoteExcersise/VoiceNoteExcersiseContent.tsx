import React from 'react'
import ReactJkMusicPlayer from "react-jinke-music-player"
import "react-jinke-music-player/assets/index.css"

const VoiceNoteExcersiseContent = () => (
    <>
        <p>Welcome to the next excersise</p>
        <ReactJkMusicPlayer  
            audioLists={[{
                name: "Carmina Burana",
                cover: 'https://gemmellposts.files.wordpress.com/2018/05/carmina-burana-e1525726656958.jpg?w=466',
                musicSrc: () => {
                    return Promise.resolve(
                        'https://ear-trainer-api.herokuapp.com/api/tracks/5dc848b51f09510017b45dac.mp3'
                    )
                }
            }]}
            defaultPlayIndex={0}
            theme='dark'
            preload={true}
            mode='full'
            autoPlay={false}
            showDownload={false}
            showThemeSwitch={false}
            glassBg={true}
            remove={false}
            toggleMode={false}
            showReload={false}
            showPlayMode={false}
            playModeText={undefined}
        />
    </>
)

export default VoiceNoteExcersiseContent