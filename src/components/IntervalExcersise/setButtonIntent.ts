export const setIntent = (rightAnswer: string, answer: string, givenAnswer?: string) => {
    if (givenAnswer === answer && givenAnswer !== rightAnswer) {
        return "danger"
    }
    else if (givenAnswer && answer === rightAnswer) {
        return "success"
    }
    else {
        return "none"
    }
}