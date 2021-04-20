import { Answers } from "../@types/answerType"

/* <--ProjApkInt-->
*
*  Metoda pozwala na przemieszanie elementów znajdujących się w tablicy
*/
export const shuffleArray = (a:Answers[]) =>{
    for (let i = a.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a
}