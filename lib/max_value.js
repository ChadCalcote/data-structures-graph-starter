function maxValue(node, visited = new Set(), vertices = []) {
  if (visited.has(node.val)) return;
  vertices.push(node.val);
  visited.add(node.val);
  node.neighbors.forEach((neighbor) => {
    maxValue(neighbor, visited, vertices);
  });
  return findMax(vertices);

  //   let stack = [node.val];
  //   let results = [];

  //   while (stack.length) {
  //     let current = stack.pop();
  //     console.log(current);
  //     if (visited.has(current)) continue;
  //     results.push(current);
  //     visited.add(current);
  //     stack.push(...current.neighbors);
  //   }

  //   return findMax(results);
}

function findMax(array) {
  let max = array.reduce((high, nextNum) => {
    if (nextNum > high) {
      high = nextNum;
    }
    return high;
  });
  return max;
}

module.exports = {
  maxValue,
};
