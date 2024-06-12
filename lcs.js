/*
두 문자열이 주어졌을 때, 가장 긴 공통 부분 수열(Longest Common Subsequence, LCS)의 길이를 구하는 프로그램을 작성하세요.
입력 형식

    첫 번째 줄에 문자열 A가 주어집니다.
    두 번째 줄에 문자열 B가 주어집니다.

출력 형식

    두 문자열의 가장 긴 공통 부분 수열의 길이를 출력합니다.

입력 1

AGGTAB
GXTXAYB

출력 1

4
*/

const fs = require('node:fs');

// 입력 처리
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const A = input[0].trim();
const B = input[1].trim();
const m = A.length;
const n = B.length;

// DP 테이블 초기화
const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

// LCS DP (Bottom-Up DP)
for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
        if (A[i - 1] === B[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
        console.log('i:', i, 'j:', j, 'A:', A[i-1], 'B:', B[j-1], 'dp:', dp[i][j]);
    }
}

// 결과 출력
const result = dp[m][n];  
fs.writeFileSync('/dev/stdout', `${result.toString()}\n`);
