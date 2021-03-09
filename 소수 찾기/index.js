function solution(numbers) {
  const numbersArr = [...numbers].map((num) => Number(num));
  const allSu = numbersArr.reduce((prev, _, i) => {
    const result = getPermutations(numbersArr, i + 1).reduce(
      (prev, arrays) => [...prev, Number(arrays.join(""))],
      []
    );
    return [...prev, ...result];
  }, []);

  const oddArr = [...new Set(allSu)];

  const result = oddArr.reduce((prev, num) => {
    if (num < 2) return prev;
    if (num === 2) return prev + 1;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return prev;
      }
    }
    return prev + 1;
  }, 0);

  return result;
}

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached);
  });

  return results;
};
// https://programmers.co.kr/learn/courses/30/lessons/42839?language=javascript
// 순열은 인터넷의 함수를 가져왔다. 집적 구현해 보도록 해봐야겠다
