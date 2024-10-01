//Implementng singly linked list in javascript

//making a node
class Node {
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}

//making a linked list
class LinkedList {
    constructor(){
        this.head = null;
    }


    //inserting a node at beginning 
    insert(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }


    //inserting a node at end
    insertAtEnd(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            return
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }

    //inserting a node at a particular position
    insertAtGivenNode(prevNode, data){
        if(!prevNode){
            console.log("The given prevNode cannot be null");
            return;
        }

        const newNode = new Node(data, prevNode.next);
        prevNode.next = newNode;
    }


    //delete the firstNode
    deleteFirstNode(){
        if(!this.head){
            return;
        }

        return this.head = this.head.next;
    }

    //delete the last the lastNode
    deleteLastNode(){
        if(!this.head){
            return;
        }

        if(this.head.next == null){
            return this.head = null;
        }

        let secondLast = this.head;
        while(secondLast.next.next){
            secondLast = secondLast.next;
        }
        secondLast.next = null;
    }

    //delete by gven Key
    deleteByKey(key){

        if(!this.head){
            console.log("List is empty");
            return;
        }

        if(this.head.data === key){
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while(current.next !== null){
            if(current.next.data === key){
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
        console.log("Key not found");
    }

    //search a node
    searchNode(key){
        if(!this.head){
            console.log("List is empty");
            return;
        }   

        let current = this.head;
        while(current){
            if(current.data === key){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    //printing the LL
    printList(){
        let current = this.head;
        const listVales = [];
        while(current){
            listVales.push(current.data);
            current = current.next;
        }
        return listVales.join("->")
    }
}


const ll = new LinkedList();

ll.insert(10);
ll.insert(20);
ll.insertAtEnd(30);
ll.insertAtEnd(40);
ll.insertAtGivenNode(ll.head.next, 25); // Insert after second node

console.log("List:", ll.printList());

ll.deleteFirstNode();
console.log("After deleting first node:", ll.printList());

ll.deleteLastNode();
console.log("After deleting last node:", ll.printList());

ll.deleteByKey(25);
console.log("After deleting key 25:", ll.printList());

console.log("Searching for node with data 30:", ll.searchNode(30));
console.log("Searching for node with data 50:", ll.searchNode(50));