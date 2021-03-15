function solution(n, lost, reserve) {
  const haveArrays = new Array(n).fill(0);
  reserve.forEach((i) => haveArrays[i - 1]++);
  lost.forEach((i) => haveArrays[i - 1]--);

  haveArrays.forEach((n, i) => {
    if (n === 1) {
      if (i === 0 && haveArrays[i + 1] === -1) {
        haveArrays[i]--;
        haveArrays[i + 1]++;
      } else if (i && haveArrays[i - 1] === -1) {
        haveArrays[i]--;
        haveArrays[i - 1]++;
      } else if (i && haveArrays[i + 1] === -1) {
        haveArrays[i]--;
        haveArrays[i + 1]++;
      }
    }
  });
  return haveArrays.filter((n) => n > -1).length;
}

// https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript
// 중복 되는 코드가 마음에 들지 않는다.
