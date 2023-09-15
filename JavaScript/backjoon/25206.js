const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `BruteForce 3.0 F
Greedy 1.0 F
DivideandConquer 2.0 F
DynamicProgramming 3.0 F
DepthFirstSearch 4.0 F
BreadthFirstSearch 3.0 F
ShortestPath 4.0 F
DisjointSet 2.0 F
MinimumSpanningTree 2.0 F
TopologicalSorting 1.0 F
LeastCommonAncestor 2.0 F
SegmentTree 4.0 F
EulerTourTechnique 3.0 F
StronglyConnectedComponent 2.0 F
BipartiteMatching 2.0 F
MaximumFlowProblem 3.0 F
SuffixArray 1.0 F
HeavyLightDecomposition 4.0 F
CentroidDecomposition 3.0 F
SplayTree 1.0 F`
    .trim()
    .split("\n");
}
let credit = [];
credit["A+"] = 4.5;
credit["A0"] = 4.0;
credit["B+"] = 3.5;
credit["B0"] = 3.0;
credit["C+"] = 2.5;
credit["C0"] = 2.0;
credit["D+"] = 1.5;
credit["D0"] = 1.0;
credit["F"] = 0.0;

let subjectTotal = 0;
for (let i = 0; i < input.length; i++) {
  let subjectScore = +input[i].split(" ")[1];
  let N = input[i].split(" ")[2];
  if (N !== "P") {
    subjectTotal += subjectScore;
  }
}

let TotalScore = 0;
for (let i = 0; i < input.length; i++) {
  let subjectScore = +input[i].split(" ")[1];
  let N = input[i].split(" ")[2];
  let subjectResult = 0;
  if (N === "P") {
    subjectResult = 0;
  } else {
    subjectResult = credit[N];
  }
  let subjectIndiv = (subjectScore * subjectResult) / subjectTotal;
  TotalScore += subjectIndiv;
}
console.log((+(Math.round(TotalScore + "e+6") + "e-6")).toFixed(6));
