function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    while (k > 0 && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k--;
    }
    stack.push(number[i]);
  }
  if (k > 0) {
    stack.splice(stack.length - k, k);
  }
  return stack.join("");
}
// https://programmers.co.kr/learn/courses/30/lessons/42883?language=javascript
// 자료구조를 적극적으로 활용해야 할 거 같다.
