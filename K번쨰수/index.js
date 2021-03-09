function solution(array, commands) {
  return commands.map(
    ([i, j, k]) => array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]
  );
}

// https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
// 한줄로도 될거 같아서 한줄로 해봤다!!
