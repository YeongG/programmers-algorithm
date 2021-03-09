function solution(operations) {
  const queue = [];

  operations.forEach((operationStr) => {
    if (operationStr === "D 1") {
      if (queue.length === 0) return;
      let maxValue = queue[0];
      let targetIndex = 0;
      for (let i = 0; i < queue.length; i++) {
        if (queue[i] > maxValue) {
          maxValue = queue[i];
          targetIndex = i;
        }
      }
      queue.splice(targetIndex, 1);
      return;
    } else if (operationStr === "D -1") {
      if (queue.length === 0) return;
      let minValue = queue[0];
      let targetIndex = 0;
      for (let i = 0; i < queue.length; i++) {
        if (queue[i] < minValue) {
          maxValue = queue[i];
          targetIndex = i;
        }
      }
      queue.splice(targetIndex, 1);
      return;
    }
    const value = Number(operationStr.split(" ")[1]);
    queue.push(value);
  });
  if (queue.length === 0) return [0, 0];
  const max = Math.max.apply(null, queue);
  const min = Math.min.apply(null, queue);

  return [max, min];
}
// https://programmers.co.kr/learn/courses/30/lessons/42628
// 3단계 풀었던 문제중에 가장 쉬운거 같다. 근데 반복되는 코드가 많아서 리팩토링하면 좋을거 같다.
