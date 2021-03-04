function solution(clothes) {
  const closeInfo = {};

  clothes.forEach(([_, type]) => {
    closeInfo[type] = closeInfo[type] + 1 || 1;
    // 옷의 종류별로 수를 셈
  });

  let sum = 1;
  for (let key in closeInfo) sum *= closeInfo[key] + 1;
  // 조합을 생각!

  return sum - 1;
  // 어떠한 옷도 입지 않은 상태가 포함되어 있기때문에 1을 뺌
}
// https://programmers.co.kr/learn/courses/30/lessons/42578
// 초반에는 감을 못잡고 고생을 많이 했지만 조합을 생각하고 해결
