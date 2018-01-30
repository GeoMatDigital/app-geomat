/**
 * Interface of a single quiz
 */
export interface quizzes {

    /**
     * id of current quiz
     */
    qid: number,
    /**
     * type of quiz (e.g.: 'MC' for multiple-choice)
     */
    qtype: string,
    /**
     * text/question of quiz
     */
    qtext: string,
    /**
     * tags-array to define which anser is true or false
     */
    tags: string[],
    /**
     * difficulty of quiz
     */
    difficulty: number,
    /**
     * array of answers
     */
    answers: [{
      aid: number,
      text: string,
      correct: boolean
    }]
}
