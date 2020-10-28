function breadthFirstSearch(startingNode, targetVal) { // 'a' 'c'
    let queue = [ startingNode ]; // [c]
    let visited = new Set();

    while (queue.length) {
        let node = queue.shift(); // c

        if (visited.has(node)) continue;
        visited.add(node);

        if (targetVal === node.val) {
            return node;
        } else {
            queue.push(...node.neighbors)
        }
    }

    return null;
}

module.exports = {
    breadthFirstSearch
};