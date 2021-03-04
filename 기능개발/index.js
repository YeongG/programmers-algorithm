function solution(progresses, speeds) {
  const leftDayArr = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );

  let maxLeftDay = 0;
  const deployDayIndexArr = [];
  for (let i = 0; i < leftDayArr.length; i++) {
    if (leftDayArr[i] > maxLeftDay) {
      maxLeftDay = leftDayArr[i];
      deployDayIndexArr.push(i);
    }
  }

  return deployDayIndexArr.map(
    (index, i) => (deployDayIndexArr[i + 1] || progresses.length) - index
  );
}
// https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript
// 잘 짠거 같아서 뿌듯하다ㅎㅎ
