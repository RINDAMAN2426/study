/*
문제 설명

  주어진 그래프에서 모든 쌍의 최단 경로를 구하는 프로그램을 작성하세요.

입력 형식

    첫 번째 줄에 노드의 수 n과 간선의 수 m이 주어집니다.
    다음 m개의 줄에 각각 세 정수 u, v, w가 주어집니다. 이는 노드 u에서 노드 v로 가는 가중치 w의 간선이 있음을 의미합니다.

출력 형식

    모든 쌍의 최단 경로 행렬을 출력합니다. (최단 경로가 존재하지 않는 경우 무한대(INF)로 표시)

입력 1
4 4
1 2 4
1 3 2
2 3 5
3 4 1

출력 1
0 4 2 3
INF 0 5 6
INF INF 0 1
INF INF INF 0
*/

const fs = require('node:fs');

// 무한대를 의미하는 값
const INF = Number.Infinity;

// 입력 처리
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

// 최단 경로 행렬 초기화
const dist = Array.from({ length: n }, () => Array(n).fill(INF));
for (let i = 0; i < n; i++) {
    dist[i][i] = 0; // 자기 자신으로 가는 경로는 0
}

// 간선 정보 입력
for (let i = 1; i <= m; i++) {
    const [u, v, w] = input[i].split(' ').map(Number);
    dist[u - 1][v - 1] = w;
}

// Floyd-Warshall 알고리즘 (Bottom-Up DP)
for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (dist[i][k] !== INF && dist[k][j] !== INF) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }
}

// 결과 출력
const output = dist.map(row => row.map(value => value === INF ? 'INF' : value).join(' ')).join('\n');
fs.writeFileSync('/dev/stdout', `${output}\n`);


