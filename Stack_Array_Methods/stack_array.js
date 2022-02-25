class stackArray{
    stack = [];
    top = -1;
    stackLimit=0;

    constructor(stackLimit){
        this.stackLimit = stackLimit;
    }

    push = (num) => {
        if (this.top === this.stackLimit-1){
            console.log("Stack size is full");
        }
        else{
        this.top++;
        this.stack.push(num);
        console.log(this.stack);
        }
    }

    pop = () => {
        this.stack.pop();
        this.top--;
        console.log(this.stack);
    }

    peek = () => {
        console.log("The top element of stack is : "+ this.stack[this.top]);
    }
}

let obj = new stackArray(5);

obj.push(1);
obj.push(2);
obj.push(3);
obj.push(4);
obj.peek();
obj.pop();
obj.peek();