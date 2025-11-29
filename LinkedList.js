export class Node {
    constructor(val, next) {
        this.val = (val === undefined ? null : val);
        this.next = (next === undefined ? null : next);
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    prepend(value) {
        // adds a new node containing value to the start of the list
        const newNode = new Node(value, this.head);
        if (this.head === null) {
            this.tail = newNode;
        }
        this.head = newNode;
        this.size++;
    }

    append(value) {
        // adds a new node containing value to the end of the list
        const newNode = new Node(value, null);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    at(index) {
        // returns the node at the given index
        if (index >= this.size || index < (-1 * this.size)) {
            return null;
        }
            
        if (index < 0) {
            index = this.size + index;
        }

        let pointer = this.head;
        for (let i = 0; i < index; i++) {
            pointer = pointer.next;
        }
        return pointer;
    }

    pop() {
        // removes the last element from the list
    }

    contains(value) {
        // returns whether the passed in value is in the list
    }

    find(value) {
        // returns the index of the node containing value, or null if not found
    }

    toString() {
        // represents LinkedList object as a string in the format: ( value ) -> ( value ) -> ( value ) -> null
    }

    insertAt(value, index) {
        // inserts a new node with the provided value at the given index
    }

    removeAt(index) {
        // removes the node at the given index
    }
}