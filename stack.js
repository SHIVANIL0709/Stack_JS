class stack{
    top = -1;
    stackNum = [];
    stackLimit = 0;

    constructor(stackLimit){
        this.stackLimit = stackLimit;
    }
    
    push = (num) => {
        if (this.top === this.stackLimit-1)
        {
            console.log("Stack size is full!");
        }
        else{
        this.top++;
        this.stackNum[this.top] = num;
        console.log("Number pushed into stack");
        console.log(this.stackNum);
        }
    }

    pop = () => {
        if(this.top == -1){
            console.log("Pop method: Stack is empty!");
        }
        else{
            this.stackNum[this.top] = null ; 
            this.top--;
            this.stackNum.length = this.stackNum.length-1;
            console.log("Last number removed");
            console.log(this.stackNum);
        }
    }

    peek = () => {
        if(this.top == -1){
            console.log("Peek method: Stack is empty!");
        }
        else{
        console.log("The top element of stack is : "+ this.stackNum[this.top]);
        }
    }

    isFull = () => {
        let size = this.top+1;
        if (this.top === this.stackLimit-1)
        {
            console.log("Stack is full!");
        }
        else{
            console.log("Stack is not full and current size of stack is: " + size + " upper limit of stack is: " + this.stackLimit);
        }
    }
    
}


let UpperLimit = 10;
let obj = new stack(UpperLimit);

obj.push(10);
obj.push(20);
obj.push(30);
obj.push(40);
obj.isFull();
<<<<<<< HEAD

=======
obj.push(10);
obj.push(100);
>>>>>>> Stack_Array_Methods




