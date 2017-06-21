class Node {
  constructor (value) {
    this._next = null
    this._value = value
  }

  set value (value) {
    this._value = value
  }

  get value () {
    return this._value
  }

  set next (node) {
    this._next = node
  }

  get next () {
    return this._next
  }
}

class LinkedList {
  constructor () {
    this._head = null
    this._tail = null
    this._size = 0
  }

  get head () {
    return this._head
  }

  add (data) {
    const node = new Node(data)
    if (this._size === 0) {
      this._head = node
      this._tail = node
    } else {
      this._tail.next = node
      this._tail = node
    }
    this._size++
  }

  makeLoop () {
    this._tail.next = this._head
    return this
  }
}

const sampleList = new LinkedList()
sampleList.add(1)
sampleList.add(2)
sampleList.add(3)
sampleList.add(4)
sampleList.add(5)
sampleList.add(6)
sampleList.add(7)
sampleList.add(8)
sampleList.add(9)
sampleList.add(10)

const toArray = (linkedList) => {
  const result = []
  let currentNode = linkedList.head
  while (currentNode) {
    result.push(currentNode.value)
    currentNode = currentNode.next
  }
  return result
}

// O(n) time / O(1) space
const hasLoop = (linkedList) => {
  let tortoise = linkedList.head
  let hare = linkedList.head

  while (hare.next != null && tortoise && tortoise.next != null) {
    hare = hare.next
    tortoise = tortoise.next.next
    if (hare === tortoise) {
      return true
    }
  }
  return false
}

console.log(toArray(sampleList))
console.log(hasLoop(sampleList))
console.log(hasLoop(sampleList.makeLoop()))
