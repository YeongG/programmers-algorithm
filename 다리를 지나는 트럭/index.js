function solution(bridge_length, weight, truck_weights) {
  const waitTruck = [...truck_weights];
  const crossingData = { weight: 0, trucks: [] };

  let seconds = 1;
  while (1) {
    seconds++;
    const upWeight = crossingData.weight + waitTruck[0];
    if (weight >= upWeight) {
      crossingData.trucks.push({ time: 0, weight: waitTruck[0] });
      crossingData.weight = upWeight;
      waitTruck.shift();
    }
    crossingData.trucks = crossingData.trucks.map((data) => ({
      ...data,
      time: data.time + 1,
    }));
    if (
      crossingData.trucks[0] &&
      crossingData.trucks[0].time === bridge_length
    ) {
      crossingData.weight -= crossingData.trucks[0].weight;
      crossingData.trucks.shift();
    }

    if (waitTruck.length === 0 && crossingData.trucks.length === 0) break;
  }

  return seconds;
}
// https://programmers.co.kr/learn/courses/30/lessons/42583?language=javascript
// 나름대로 논리적으로 했다고 생각하는데... 리팩토링 필요...
