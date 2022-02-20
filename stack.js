class stack{
    top = -1;
    stackNum = [];

    constructor(){
    }

    push(num){
        this.top++;
        this.stackNum[this.top] = num;
        console.log("Number pushed into stack");
        console.log(this.stackNum);
    }

    pop(){
     
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

let obj = new stack();
obj.push(10);
obj.push(20);
obj.push(30);
obj.peek();
obj.pop();
obj.peek();
