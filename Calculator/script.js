// add to value
const addToString = (val) => {
    document.getElementById('inputString').value += val
}
// to delete the last element
const deleteLastElement = ()=> {
    if(document.getElementById('inputString').value === ""){
        return;
    }
    else{
        document.getElementById('inputString').value = document.getElementById('inputString').value.slice(0,-1)
    }
}
// to delete full string
const clearString = ()=>  document.getElementById('inputString').value = ""
// result dispaly krne ke liye'
const displayResult = () => {
    const inputValue = document.getElementById('inputString')

    try{
        inputValue.value = eval(inputValue.value);
    }catch{
        inputValue.value = 'Error'
    }
}
