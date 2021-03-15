const alphabetMap = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
};

function solution(name) {
  let answerArr = new Array(name.length).fill("A");
  let answer = answerArr.join("");
  let nowIndex = 0;
  let controlLength = 0;

  while (1) {
    if (answerArr[nowIndex] !== name[nowIndex]) {
      const upCount =
        alphabetMap[name[nowIndex]] - alphabetMap[answerArr[nowIndex]];
      const downCount =
        26 -
        (alphabetMap[answerArr[nowIndex]] - alphabetMap[name[nowIndex]]) * -1;

      const minCount = Math.min(upCount, downCount);
      controlLength += minCount;
      answerArr[nowIndex] = name[nowIndex];
      answer = answerArr.join("");
    }

    if (answer === name) break;

    let nextIndex = 0;
    let nextCount = 999999;

    for (let i = 0; i < name.length; i++) {
      if (name[i] === answerArr[i]) continue;
      let leftCount;
      let rightCount;
      if (nowIndex > i) {
        leftCount = nowIndex - i;
        rightCount = 999;
      } else if (nowIndex < i) {
        leftCount = name.length - (nowIndex - i) * -1;
        rightCount = i - nowIndex;
      }

      const minCount = Math.min(leftCount, rightCount);
      if (minCount < nextCount) {
        nextIndex = i;
        nextCount = minCount;
      }
    }
    nowIndex = nextIndex;
    controlLength += nextCount;
  }
  return controlLength;
}
// https://programmers.co.kr/learn/courses/30/lessons/42860?language=javascript
// 너무 원시적으로? 접근 한거 같다.
