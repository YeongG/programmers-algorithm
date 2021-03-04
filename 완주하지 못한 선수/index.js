function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}
// https://programmers.co.kr/learn/courses/30/lessons/42576
//문제의 의도대로 풀지 않고 꼼수로 푼거 같아서 조금 그렇다...
