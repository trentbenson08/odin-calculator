
function main(){
    const button = document.querySelectorAll('.btn');
    const screenVal = document.querySelector('#screenVal');
    let inputArr =[];
    let input = '';
    let dotCount = 0;

    button.forEach(btn =>{
        btn.addEventListener('click', (e) =>{
            let ei = e.target.getAttribute('id');
            if(ei === '_clear'){
                input ='';
                inputArr =[];
                screenVal.textContent = input;
            }
            else if(!isNaN(ei) && input.length < 8){
                input += String(ei);
                screenVal.textContent = input;
            }
            else if(ei[0] === '.' && dotCount < 1){
                input += String(ei);
                screenVal.textContent = input;
                dotCount++;
            }
            else if(ei[0] === '_' && parseFloat(input)){
                inputArr.push(parseFloat(input));
                dotCount = 0;                
                if(ei === '_eval'){
                    screenVal.textContent = evaluate(inputArr);
                    inputArr = [];
                    input = '';
                }
                else{
                    inputArr.push(ei);
                    input = '';
                    screenVal.textContent = input;
                }
            }
        })
    })
}

function evaluate(arr){
    let total = arr[0];
    for(let i=1; i< arr.length; i+=2){
        if(arr[i] === '_add'){
            total += arr[i+1];
        }
        else if(arr[i] === '_subtract'){
            total -= arr[i+1];
        }
        else if(arr[i] === '_multiply'){
            total *= arr[i+1];
        }
        else if(arr[i] === '_divide'){
            total /= arr[i+1];
        }
    }
    return total
}

main()