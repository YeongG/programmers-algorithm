function solution(priorities, location) {
  let lists = [...priorities];
  let maxLv = Math.max.apply(null, lists);
  let nowLocation = location;

  let result = 1;

  while (1) {
    if (lists[0] < maxLv) {
      lists = [...lists, lists[0]];
      lists.shift();
    } else if (lists[0] === maxLv) {
      if (nowLocation === 0) return result;
      lists.shift();
      maxLv = Math.max.apply(null, lists);
      result++;
    }
    nowLocation = nowLocation - 1 < 0 ? lists.length - 1 : nowLocation - 1;
  }
}
// https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript
// 인덱스를 사용해서 잘 한거 같다
