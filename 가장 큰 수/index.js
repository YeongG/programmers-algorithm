function solution(numbers) {
  const answer = numbers
    .map((num) => `${num}`)
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}
// https://programmers.co.kr/learn/courses/30/lessons/42746?language=javascript
// JS의 비교연산자의 유한점? 을 이용해서 해결했다.. (다음엔 좀더 논리적으로 접근해야겠다.)
