function solution(genres, plays) {
  const data = {};
  const playsData = {};

  genres.forEach((genre, i) => {
    if (!data[genre]) {
      playsData[genre] = plays[i];
      data[genre] = [{ id: i, plays: plays[i] }];
      return;
    }
    playsData[genre] += plays[i];
    data[genre].push({ id: i, plays: plays[i] });
  });

  for (let key in data) {
    const lists = data[key];
    const plays = lists.reduce((prev, { plays }) => prev + plays, 0);
    data[key] = {
      lists,
      plays,
    };
  }

  const finially = Object.keys(data)
    .map((key) => data[key])
    .sort((a, b) => {
      if (a.plays === b.plays) {
        return a.id - b.id;
      }
      return b.plays - a.plays;
    });

  const newList = finially.map((now) => {
    if (now.lists.length === 1) return now.lists;
    return now.lists.sort((a, b) => b.plays - a.plays);
  });

  const fin = newList.map((subList) => subList.filter((_, i) => i < 2));
  const oneArrays = fin.reduce((prev, now) => [...prev, ...now], []);

  return oneArrays.map((now) => now.id);
}
// https://programmers.co.kr/learn/courses/30/lessons/42579
// 어떻게든 돌아가게 짬.. 사실 올리기 쪽팔릴 정도지만 꼭 리팩토링을 해서 다시 올리겠다.
