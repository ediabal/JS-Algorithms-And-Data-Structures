// Hash Table
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash = key => {
    let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key[i].charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  };

  set = (key, value) => {
    // hash the key
    const index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    const i = this.keyMap[index].findIndex(({ key: nodeKey }) => nodeKey === key);
    if (i >= 0) {
      this.keyMap[index][i].value = value;
    } else {
      this.keyMap[index].push(new Node(key, value));
    }
  };

  get = key => {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        let { key: nodeKey, value: nodeValue } = this.keyMap[index][i];
        if (nodeKey === key) return nodeValue;
      }
    }
    return undefined;
  };

  keys = () => {
    const keys = [];
    this.keyMap.forEach(nodes => {
      nodes.forEach(({ key }) => {
        keys.push(key);
      });
    });
    return keys;
  };

  values = () => {
    const values = [];
    this.keyMap.forEach(nodes => {
      nodes.forEach(({ value }) => {
        values.push(value);
      });
    });
    return values;
  };
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}