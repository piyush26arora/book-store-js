    // selecting all 3 div blocks, using querySelector()
const inputContainer = document.querySelector('.input') ;
const saveBtn = document.querySelector('.save') ;
const tableContainer = document.querySelector('.tableContainer') ;

    // creating table element
const tableData = document.createElement('table') ;

const {id,key,type} = inputs ;

    // ****inputArr**** contains all input blocks, acc to key(name) , type
const inputArr = inputs.map((value, idx, inputs)=>{
    switch(value.type) {
        case "Text":
        case "Number":
        case "Date":const inputVar = document.createElement('input') ;
                    inputVar.key = value.key ;
                    inputVar.type = value.type ;
                    // console.log({inputVar}) ;
                    inputVar.classList.add('input') ;
                    return inputVar ;
        case "Boolean":
                break;
        default:
    }
})


// console.log(inputArr) ;
// attaching a label and each value from inputArr into a divBlock
// and adding it to inputContainer of the html file
inputArr.forEach((value,index,inputArr) => {
    const divBlock = document.createElement('div') ;
    const labelElementForEachDivBlock = document.createElement('label') ;
    labelElementForEachDivBlock.htmlFor = value.id ;

    // console.log({value})

    labelElementForEachDivBlock.classList.add('labels') ;
    labelElementForEachDivBlock.innerText = value.key ;

    // table header
    const tableHead = document.createElement('th') ;
    tableHead.innerText = value.key ;
    tableData.appendChild(tableHead) ;


    divBlock.appendChild(labelElementForEachDivBlock) ;
    divBlock.appendChild(value) ;

    inputContainer.appendChild(divBlock) ;
    inputContainer.classList.add('divBlock') ;
})



// console.log(saveBtn)
// .......... SAVE ................


function addToTable(e) {
    e.preventDefault() ;
    // console.log("Clicked") ;
    
    const tableRows = document.createElement('tr') ;

    inputArr.forEach((value,index,inputArr) => {
        // table values
        const tableValue = document.createElement('td') ;
        tableValue.innerText = value.value ;
        
        
        tableRows.appendChild(tableValue) ;
    
        // tableValue.innerText = value.value ;
        // console.log(value.value) ;
        
    })

    tableData.appendChild(tableRows) ;
}

