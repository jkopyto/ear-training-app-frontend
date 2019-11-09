export const setIntent = (rightAnswer: string, answer: string, givenAnswer?: string, onRightAnswer?: () => void) => {
    if (givenAnswer === answer && givenAnswer !== rightAnswer) {
        return "danger"
    }
    else if (givenAnswer && answer === rightAnswer) {
        if (givenAnswer === rightAnswer) onRightAnswer && onRightAnswer()
        return "success"
    }
    else {
        return "none"
    }
}