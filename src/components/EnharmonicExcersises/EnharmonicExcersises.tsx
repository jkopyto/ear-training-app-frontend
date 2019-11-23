import React, { useState, useEffect } from 'react'
import ExcersiseMain from '../ExcersiseTemplate/ExcersiseMain'
import OpenSheetMusicDisplay from '../OpenSheetMusicDisplay'
import { offNoteExcersises } from '../OffNoteExcersise/offNoteExcersises'
import MusicPlayer from '../MusicPlayer/MusicPlayer'

const EnharmonicExcersises = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [file,setFile] = useState<any>('')
    useEffect(() => {
        async function getTrackId() {
            try {
                var req = new XMLHttpRequest();
                req.open('GET', 'https://ear-trainer-api.herokuapp.com/api/tracks/test/test', false);
                req.send(null);
                if (req.status === 200)
                    setFile(req.responseText);
                    setIsLoading(false)
            } catch (error) {
                throw new Error(error)
            }
        }
        if(isLoading===true) getTrackId()
    })
    return(
        <div className="i-enharmonic-excersise">
        {!isLoading ? (
            <ExcersiseMain
                excersise={offNoteExcersises}
                repeats={3}
            >
            {(excersise, addExcersiseScore, giveAnswer, repeatsLeft, decreaseRepeats, givenAnswer) => (
                <>
                    <OpenSheetMusicDisplay 
                        file={file}
                        addExcersiseScore={addExcersiseScore}
                        giveAnswer={giveAnswer}
                        repeatsLeft={repeatsLeft}/>
                    <MusicPlayer
                        title={"Excersise"}
                        cover={"https://previews.123rf.com/images/asmati/asmati1706/asmati170606048/80930477-music-violin-clef-sign-g-clef-treble-clef-vector-white-icon-with-soft-shadow-on-transparent-backgrou.jpg"}
                        backendTitle={"test"}
                        onAudioStop={decreaseRepeats}
                        showPlay={repeatsLeft !== 0 || !givenAnswer}
                    />
                </>
            )}
                </ExcersiseMain>
            ) : null}
        </div>
    )}

export default EnharmonicExcersises

