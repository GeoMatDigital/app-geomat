/**
 * Model of a single quiz
 */
export class quizzes {

  constructor(
    /**
     * id of current quiz
     */
    public qid: number,
    /**
     * type of quiz (e.g.: 'MC' for multiple-choice)
     */
    public qtype: string,
    /**
     * text/question of quiz
     */
    public qtext: string,
    /**
     * tags-array to define which anser is true or false
     */
    public tags: string[],
    /**
     * difficulty of quiz
     */
    public difficulty: number,
    /**
     * array of answers
     */
    public answers: [{
      aid: number,
      text: string,
      correct: boolean
    }],
  ) {}
}
