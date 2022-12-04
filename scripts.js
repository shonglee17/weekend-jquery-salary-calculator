$(document).ready(onReady)

let employeeInfo = []

function onReady(){
    $('#submitButton').on('click', getInfo)
    $('body').on('click', '.deleteButton', deleteEmployee)
}


function getInfo(){
    let firstName = $('#firstNameInput').val()
    let lastName = $('#lastNameInput').val()
    let idNumber = $('#idNumberInput').val()
    let jobTitle = $('#jobTitleInput').val()
    let annualInput = $('#annualInput').val()

    let employee = {
        firstName: firstName,
        lastName: lastName,
        idNumber: idNumber,
        jobTitle: jobTitle,
        annualInput: annualInput,
    }//object inputs

    employeeInfo.push(employee)
    updateMonthlyCost()
    renderInputs()
    $('#firstNameInput').val('')
    $('#lastNameInput').val('')
    $('#idNumberInput').val('')
    $('#jobTitleInput').val('')
    $('#annualInput').val('')
    
}//getting employees information

function deleteEmployee(){
    $(this).parent().parent().remove()
}

function renderInputs(){
    $('#infoData').empty()
    
    for (let i=0; i<employeeInfo.length; i++){
        $('#infoData').append(`
        <tr>
        <td>${employeeInfo[i].firstName}</td>
        <td>${employeeInfo[i].lastName}</td>
        <td>${employeeInfo[i].idNumber}</td>
        <td>${employeeInfo[i].jobTitle}</td>
        <td>${employeeInfo[i].annualInput}</td>
        <td><button class='deleteButton'>DELETE</button></td>
        </tr>
        `)//display information into table
    }//looping through array of object's keys and values
}//updating the dom


let annualTotal = 0;
function updateMonthlyCost(){
    
    let annualInput = Number($('#annualInput').val())
    annualTotal += annualInput
    let monthlySum = annualTotal / 12
    console.log('this is monthly spendings on salary!', monthlySum)
        $('.monthlyText').text(`Monthly Cost: $ ${monthlySum}`)
    
    
    
    if( monthlySum >= 20000){
        $('.monthlyText').text(red)
        }
    


    // for (i=0; i<employeeInfo.length; i++){
    //     $('#annualInput').empty()
    //     monthlyCost += Number(employeeInfo.annualInput)
    //     console.log(monthlyCost)
        
    // }
    
    //monthlyCost + employee's salary
    //if greater than 20,000
    //turn red
}

