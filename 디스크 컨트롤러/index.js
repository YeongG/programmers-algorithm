function solution(jobs) {
  const waitQue = [...jobs];

  const enQue = [];
  const isTrueMap = {};

  let waitTime = 0;
  let second = 0;
  while (1) {
    let imsiQue = [];
    for (let i = 0; i < waitQue.length; i++) {
      if (isTrueMap[i]) continue;
      if (waitQue[i] && waitQue[i][0] === second) {
        imsiQue.push({
          wait: 0,
          ms: waitQue[i][1],
        });
        imsiQue.sort((a, b) => a.ms - b.ms);
        isTrueMap[i] = true;
      }
    }
    imsiQue.forEach((now) => enQue.push(now));

    enQue.forEach((now, i) => {
      if (i === 0) {
        now.ms -= 1;
      } else {
        now.wait += 1;
      }
    });
    if (enQue[0] && enQue[0].ms === 0) {
      waitTime += enQue[0].wait;
      enQue.shift();
      enQue.sort((a, b) => a.ms - b.ms);
    }
    if (enQue.length === 0 && Object.keys(isTrueMap).length === waitQue.length)
      break;
    second++;
  }
  waitTime = jobs.reduce((prev, [_, ms]) => prev + ms, waitTime);
  return Math.floor(waitTime / jobs.length);
}
// https://programmers.co.kr/learn/courses/30/lessons/42627?language=javascript
// 들어오는 순서가 순서대로 인지 했갈려서 한참 고민했다.
