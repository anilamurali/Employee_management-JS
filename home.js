 var username=localStorage.getItem('Usrename');
 console.log(username);
 user.innerHTML=`Welcome ${username}`;
 
// clear
function logout() {
   window.location = './login.html';
    localStorage.clear();
    
}

function addEmployee() {
    var empId=document.getElementById('id').value;
    var empname=document.getElementById('name').value;
    var empaddress=document.getElementById('address').value;
    var empdes=document.getElementById('des').value;
    var empexp=document.getElementById('exp').value;
    var empsalary=document.getElementById('salary').value;
    console.log(empId);
    console.log(empname);
    console.log(empaddress);
    console.log(empdes);
    console.log(empexp);
    console.log(empsalary);
    
    var employee={
        id:empId,
        name:empname,
        address:empaddress,
        designation:empdes,
        experience:empexp,
        salary:empsalary
    };
    if(empId=="" || empname=="" || empaddress=="" || empdes=="" || empexp=="" || empsalary==""){
        alert("please add details correctly")
    }
    else{
        localStorage.setItem(empId,JSON.stringify(employee));
    alert("Employee Added Successfully");
    }

}

function searchEmploye() {
    var empId=document.getElementById('empid').value;
    var Employee=JSON.parse(localStorage.getItem(empId));
    if (Employee == null){
        document.getElementById('warning').innerHTML=`Employee Not Found`;
        document.querySelector('.displayemp').style.display='none';
    }
    else{
        console.log(Employee);
        document.getElementById('eid').innerHTML=`Employee ID : ${Employee.id}`;
        document.getElementById('ename').innerHTML=`Employee Name : ${Employee.name}`;
        document.getElementById('eaddress').innerHTML=`Employee Address : ${Employee.address}`;
        document.getElementById('edesignation').innerHTML=`Employee ID : ${Employee.designation}`;
        document.getElementById('eexperience').innerHTML=`Employee ID : ${Employee.experience}`;
        document.getElementById('esalary').innerHTML=`Employee ID : ${Employee.salary}`;
        document.querySelector('.displayemp').style.display='block';
        document.getElementById('warning').style.display = 'none';


    }
    
    
}
function deleteEmployee() {
    var empid=document.getElementById('empid').value;
    console.log(empid);
    localStorage.removeItem(empid);
    alert("Employee deleted ");
    document.querySelector('.displayemp').style.display = 'none';
    document.getElementById('empid').value='';
}

