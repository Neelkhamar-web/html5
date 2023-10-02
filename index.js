let input = prompt("entr your need")
let todo=["my one","ec",'third']

while(input!=="quit"){
    if(input === "list"){
        for(let i=0;i<todo.length;i++)
        {
            console.log("*****")
            console.log(`${i}:value is ${todo[i]}`)
        }
        
    }
    else if(input=="new"){
        const newtodo=prompt("what new");
        todo.push(newtodo);
        console.log(newtodo)

    }
    else if(input=='delete'){
        let index=prompt("enter no")
        todo.splice(index,1)

    }


     input = prompt("entr your need")
    
    

}
console.log("finish")