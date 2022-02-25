class stack{
    top = -1;
    stackNum = [];
    limit = 4;
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

    pop= () => {
     
            this.stackNum[this.top] = null ; 
            this.top--;
            this.stackNum.length = this.stackNum.length-1;
            console.log("Last number removed");
            console.log(this.stackNum);
    
    }

    peek(){
        console.log("The top element of stack is : "+ this.stackNum[this.top]);
    }
    
}


let UpperLimit = 10
let obj = new stack(UpperLimit);
obj.push(10);
obj.push(20);
obj.push(30);
obj.push(40);
obj.push(50);
obj.push(60);
obj.peek();
obj.pop();
obj.peek();
