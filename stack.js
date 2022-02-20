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
    
}

let obj = new stack();
obj.push(10);
obj.push(20);
obj.push(30);
