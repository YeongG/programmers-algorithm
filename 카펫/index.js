function solution(brown, yellow) {
  const tilesCount = brown + yellow;
  const tileArr = [];
  const yellowArr = [];
  for (let i = 1; i * i <= tilesCount; i++) {
    if (tilesCount % i === 0) {
      const lineCount = tilesCount / i;
      tileArr.push([lineCount, i]);
    }
  }

  for (let i = 1; i * i <= yellow; i++) {
    if (yellow % i === 0) {
      const lineCount = yellow / i;
      yellowArr.push([lineCount, i]);
    }
  }

  for (let i = 0; i < tileArr.length; i++) {
    for (let j = 0; j < yellowArr.length; j++) {
      if (
        tileArr[i][0] - yellowArr[j][0] <= 0 ||
        tileArr[i][1] - yellowArr[j][1] <= 0
      ) {
        continue;
      }
      if (
        (tileArr[i][0] - yellowArr[j][0]) % 2 === 0 &&
        (tileArr[i][1] - yellowArr[j][1]) % 2 === 0
      ) {
        return tileArr[i];
      }
    }
  }
}
// https://programmers.co.kr/learn/courses/30/lessons/42842?language=javascript
// 갈색 카펫에서 노란색 카펫을 빼면 남는 가로, 세로가 대칭이라는 점을 이용해서 쉽게 풀었다
