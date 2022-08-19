function getPin(){
    const pin = generatePin();
    const pinSting= pin+ '';
    if(pinSting.length ===4){
        return pin;
    }
    else{
        return getPin();
    }
}


function generatePin(){
    const random =Math.round(Math.random()*10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click',function(){
    const pin =getPin();
    // console.log(pin);
    // display pin 

    const displayPin=document.getElementById('display-pin');
    const displayPinValue= displayPin.value;
    displayPin.value = pin;
})


document.getElementById('calculator').addEventListener('click', function(event){
    let number= event.target.innerText;
    let typeNumber = document.getElementById('type-numbers');
    let priviesTypeNumber=typeNumber.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumber.value='';
            
        }
        else if(number === '<'){
            let disits =priviesTypeNumber.split('');
            disits.pop();
            const remainingDisits =disits.join('');
            typeNumber.value = remainingDisits;
        }
    }
    else{
       
        
        let newTypeNumber = priviesTypeNumber + number;
        typeNumber.value =newTypeNumber;
    }
})

// verify pin 
document.getElementById('verify-pin').addEventListener('click',function(){
    let displayPin=document.getElementById('display-pin');
    let displayPinValue = displayPin.value;


    let typeNumber =document.getElementById('type-numbers');
    let typeNumberValue=typeNumber.value;

    if(displayPinValue === typeNumberValue){
       let pinSuccessMsg = document.getElementById('pin-success');
       pinSuccessMsg.style.display='block';

       let pinFailed = document.getElementById('pin-fail');
        pinFailed.style.display='none';
    }
    else{
        let pinFailed = document.getElementById('pin-fail');
        pinFailed.style.display='block';

        let pinSuccessMsg = document.getElementById('pin-success');
       pinSuccessMsg.style.display='none';
    }
})