class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = null;
  }

  add(value){
    const l = this.last;
    let newNode = new Node(l, value, null);
    this.last = newNode;
    if(l === null){
        this.first = newNode
    }else{
        l.next = newNode
    }
    this.size++;
  }

  removeLast(){
    this.last = null;
    this.size--;
  }


  getAll(){
    let currentNode = this.first;
    for(let i = 0 ; i < this.size; i++){
        console.log(currentNode.value)
        currentNode = currentNode.next;
    }
  }

}

/*void linkLast(E e) {
    final Node<E> l = last;
    final Node<E> newNode = new Node<>(l, e, null);
    last = newNode;
    if (l == null)
        first = newNode;
    else
        l.next = newNode;
    size++;
    modCount++;
}*/

class Node {
  constructor(prev, value, next) {
    this.prev = prev;
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
