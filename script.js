


function main(){
    // make expression object out here
    const exp = new Expression();
    const button = document.querySelectorAll('.btn');
    const screenVal = document.querySelector('#screenVal');

    button.forEach(btn =>{
        btn.addEventListener('click', (e) =>{
            const eventInput = e.target.getAttribute('id');
            exp.addEle(eventInput);
            screenVal.textContent += eventInput;
            

        })
    })
}

function Expression(){
    this.expArr = [];

    this.addEle = (item) =>{
        this.expArr.push(item)
        console.log(...this.expArr)
        
    }
    this.evaluate = ()=>{
        console.log('evaluate me please')
    }
}

main()