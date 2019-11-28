import React from 'react'
import ExcersiseMain from '../ExcersiseTemplate/ExcersiseMain'
import OpenSheetMusicDisplay from '../OpenSheetMusicDisplay'
import MusicPlayer from '../MusicPlayer/MusicPlayer'
import { Spinner  } from '@blueprintjs/core'
import { Excersises } from './excersises'
import { EnharmonicExcersise } from '../@types/enharmonicExcersiseType'
import EnharmonicWrapper from './EnharmonicWrapper'

const EnharmonicExcersises = () => {

    return(
        <div className="i-enharmonic-excersise">    
            <ExcersiseMain
                excersise={Excersises}
                repeats={8}
            >
                {(excersise, addExcersiseScore, giveAnswer, repeatsLeft, decreaseRepeats, givenAnswer) => (
                        <EnharmonicWrapper
                            sheetTitle={(excersise as EnharmonicExcersise).sheetBackendTitle}
                        >
                            {(isLoading, file) => (
                                isLoading ?
                                    <Spinner intent="success" size={Spinner.SIZE_STANDARD} />
                                :
                                    <div className= "i-enharmonic__content">
                                        <OpenSheetMusicDisplay
                                            drawTitle={false}
                                            file={file}
                                            addExcersiseScore={addExcersiseScore}
                                            giveAnswer={giveAnswer}
                                            isAnswerGiven={!!givenAnswer}
                                            repeatsLeft={repeatsLeft} />
                                        <MusicPlayer
                                            title={(excersise as EnharmonicExcersise).title}
                                            backendTitle={(excersise as EnharmonicExcersise).backendTitle}
                                            onAudioStop={decreaseRepeats}
                                            showPlay={repeatsLeft !== 0 || !!givenAnswer}
                                        />
                                    </div>

                            )}
                        </EnharmonicWrapper>
                )}
            </ExcersiseMain>
        </div>
    )
}

export default EnharmonicExcersises
