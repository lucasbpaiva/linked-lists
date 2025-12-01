class Node {
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
        if (this.head === null) { // if list empty, newNode becomes tail
            this.tail = newNode;
        }
        this.head = newNode;
        this.size++;
    }

    append(value) {
        // adds a new node containing value to the end of the list
        const newNode = new Node(value, null);
        if (this.head === null) { 
            // if list empty, newNode becomes head and tail
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
            // allow negative indexing
            index = this.size + index;
        }

        let pointer = this.head;
        for (let i = 0; i < index; i++) {
            pointer = pointer.next;
        }
        return pointer;
    }

    pop() {
        // removes the last element from the list and returns it
        if (this.head === null) {
            return null;
        }
        if (this.size === 1) {
            const node = this.head;
            this.head = null;
            this.tail = null;
            this.size--;
            return node;
        }
        const secondLast = this.at(-2);
        const last = this.tail;
        secondLast.next = null;
        this.tail = secondLast;
        this.size--;
        return last;
    }

    contains(value) {
        // returns whether the passed in value is in the list
        if (this.head === null) {
            return false;
        }
        let pointer = this.head;
        while (pointer) {
            if (pointer.val === value) {
                return true;
            }
            pointer = pointer.next;
        }
        return false;
    }

    find(value) {
        // returns the index of the node containing value, or null if not found
        if (this.head === null) {
            return null;
        }
        let pointer = this.head;
        let index = 0;
        while (pointer) {
            if (pointer.val === value) {
                return index;
            }
            pointer = pointer.next;
            index++;
        }
        return null;
    }

    toString() {
        // represents LinkedList object as a string in the format: ( value ) -> ( value ) -> ( value ) -> null
        if (this.head === null) {
            return "Empty List";
        }
        let result = "";
        let pointer = this.head;
        while (pointer) {
            result += `( ${pointer.val} ) -> `;
            pointer = pointer.next;
        }
        result += "null";
        return result;
    }

    insertAt(value, index) {
        // inserts a new node with the provided value at the given index
        if (this.head === null) {
            this.append(value);
            return;
        }
        if (index === 0 || index <= (-1 * this.size)) {
            this.prepend(value);
            return;
        } 
        if (index >= this.size) {
            // put this condition after checking index === 0 in case list has 1 element
            this.append(value);
            return;
        }

        const prev = this.at(index - 1);
        const current = this.at(index);
        const newNode = new Node(value, current);
        prev.next = newNode;
        this.size++;
    }

    removeAt(index) {
        // removes the node at the given index
        if (this.head === null) {
            return;
        }
        if (this.size === 1 || index >= this.size - 1 || index === -1) {
            this.pop();
            return;
        }
        if (index === 0 || index <= (-1 * this.size)) {
            this.head = this.head.next;
            this.size --;
            return;
        }
        const prev = this.at(index - 1);
        const current = this.at(index);
        prev.next = current.next;
        this.size--;
    }
}