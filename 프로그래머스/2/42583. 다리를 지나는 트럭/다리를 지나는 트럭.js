function solution(bridge_length, weight, truck_weights) {
    var answer = 0; // 시간(초)
    let bridge = []; // 다리를 건너는 트럭들
    let bridge_weight = 0;
    while (truck_weights.length > 0 || bridge.length > 0) {
        answer++;
        if (bridge.length > 0 && bridge[0].answer === answer) {
            bridge_weight -= bridge.shift().weight;
        }
        if (truck_weights.length > 0 && bridge_weight + truck_weights[0] <= weight) {
            bridge_weight += truck_weights[0];
            bridge.push({weight: truck_weights.shift(), answer: answer + bridge_length});
        }
    }
    return answer;
}

solution(2, 10, [7, 4, 5, 6]);