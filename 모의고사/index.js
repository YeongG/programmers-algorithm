function solution(answers) {
  const answer1 = [1, 2, 3, 4, 5];
  const answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const collectQuestionNumber = [answer1, answer2, answer3].map(
    (answersArr) =>
      answers.filter(
        (answer, i) => answer === answersArr[i % answersArr.length]
      ).length
  );
  const max = Math.max.apply(null, collectQuestionNumber);

  return collectQuestionNumber.reduce(
    (array, number, index) =>
      number === max ? array.concat(index + 1) : array,
    []
  );
}
// https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript
// 반복성을 이용해서 쉽게 해결했다
