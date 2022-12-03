$(document).ready(onReady)

let employeeInfo = []

function onReady(){
    $('#submitButton').on('click', getInfo)
}


function getInfo(){
    let firstName = $('#firstNameInput').val()
    let lastName = $('#lastNameInput').val()
    let idNumber = $('#idNumberInput').val()
    let jobTitle = $('#jobTitleInput').val()
    let annualInput = $('#annualInput').val()
    console.log(firstName)
    console.log(lastName);
    console.log(idNumber);
    console.log(jobTitle);
    console.log(annualInput);

    let employee = {
        firstName: firstName,
        lastName: lastName,
        idNumber: idNumber,
        jobTitle: jobTitle,
        annualInput: annualInput,
    }//object inputs

    employeeInfo.push(employee)
    $('#firstNameInput').val('')
    $('#lastNameInput').val('')
    $('#idNumberInput').val('')
    $('#jobTitleInput').val('')
    $('#annualInput').val('')

    renderInputs()
    
}//getting employees information

function renderInputs(){
    // $('#firstNameTable').empty()
    
    for (let i=0; i<employeeInfo.length; i++){
        $('#infoData').append(`
        <td>
            ${employeeInfo[i].firstName}
        </td>`)
    }
}//updating the dom