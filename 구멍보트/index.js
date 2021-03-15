function solution(people, limit) {
  const kgs = [...people].sort((a, b) => b - a);
  let pointer1 = 0;
  let pointer2 = kgs.length - 1;
  let answer = 0;

  while (1) {
    if (pointer1 > pointer2) break;
    const kg = kgs[pointer1] + kgs[pointer2];
    if (kg > limit) {
      pointer1++;
      answer++;
      continue;
    }
    pointer2--;
    pointer1++;
    answer++;
  }
  return answer;
}
// https://programmers.co.kr/learn/courses/30/lessons/42885?language=javascript
// 정렬을 이용해서 쉽게 풀었다.
