import { Answers, answersArray } from '../@types/answerType'
import { shuffleArray } from './shuffleArray'

export const getAnswers = (val: Answers) => {
    const index = answersArray.indexOf(val)

    if (index > 1 && index < answersArray.length - 2) {
        return shuffleArray([
            val,
            answersArray[index - 1],
            answersArray[index + 1],
            Math.round(Math.random()) < 0.5 ? answersArray[index + 2] : answersArray[index - 2]
        ])
    }
    else if (index <= 1) {
        return shuffleArray([
            answersArray[0],
            answersArray[1],
            answersArray[2],
            answersArray[3]
        ])
    }
    else {
        return shuffleArray([
            answersArray[answersArray.length - 1],
            answersArray[answersArray.length - 2],
            answersArray[answersArray.length - 3],
            answersArray[answersArray.length - 4]
        ])
    }
}