 // Student Form
    const studentForm = document.getElementById('studentForm');
    const studentTable = document.getElementById('studentTable');
    
    studentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const fullname = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const age = document.getElementById('age').value;

        const sendData = { fullname, email, phone, age };


        const storedData = JSON.parse(localStorage.getItem('students')) || [];
       

        if(studentForm.dataset.editIndex){
            storedData[studentForm.dataset.editIndex] = sendData
            delete studentForm.dataset.editIndex;
         }else
         {
            storedData.push(sendData)
         }


        localStorage.setItem('students', JSON.stringify(storedData));
        getStudentData();
        studentForm.reset();
    });

    function getStudentData() {
        studentTable.innerHTML = '';
        const getData = JSON.parse(localStorage.getItem('students')) || [];
        getData.forEach((entry, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${entry.fullname}</td>
                <td>${entry.email}</td>
                <td>${entry.phone}</td>
                <td>${entry.age}</td>
             <td>
                <button class="btn btn-info " onclick="editStudent(${index})"> Edit </button>
                <button class="btn btn-success " onclick="deleteStudent(${index})"> Delete </button>
             </td>

            `
            studentTable.appendChild(row);
        })
    }
    
    function editStudent(index){
        
        let storedData = JSON.parse(localStorage.getItem('students')) || [];
        let student = storedData[index]
    
        document.getElementById('name').value = student.fullname;
        document.getElementById('email').value = student.email;
        document.getElementById('phone').value = student.phone;
        document.getElementById('age').value = student.age;
    
        studentForm.dataset.editIndex = index;
     
    }
    
    function deleteStudent(index){
        let storedData = JSON.parse(localStorage.getItem('students')) || [];
        storedData.splice(index, 1);
        localStorage.setItem('students', JSON.stringify(storedData));
        getStudentData();
    
    }
    
    document.addEventListener('DOMContentLoaded', getStudentData);


    // Parent Form
    const parentForm = document.getElementById('parentForm');
    const parentTable = document.getElementById('parentTable');
    
    parentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const parentname = document.getElementById('parentName').value;
        const child = document.getElementById('childName').value;
        const phone = document.getElementById('parentPhone').value;
        const email = document.getElementById('parentEmail').value;

        const sendData = { parentname, child, phone, email };

        const storedData = JSON.parse(localStorage.getItem('parents')) || [];
       

        if(parentForm.dataset.editIndex){
            storedData[parentForm.dataset.editIndex] = sendData
            delete parentForm.dataset.editIndex;
         }else
         {
            storedData.push(sendData)
         }

        localStorage.setItem('parents', JSON.stringify(storedData));
        getParentData();
        parentForm.reset();
    });

    function getParentData() {
        parentTable.innerHTML = '';
        const getData = JSON.parse(localStorage.getItem('parents')) || [];
        getData.forEach((entry, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${entry.parentname}</td>
                <td>${entry.child}</td>
                <td>${entry.phone}</td>
                <td>${entry.email}</td>
                <td>
                <button class="btn btn-info " onclick="editParent(${index})"> Edit </button>
                <button class="btn btn-success " onclick="deleteParent(${index})"> Delete </button>
             </td>
             </tr>
            `
            parentTable.appendChild(row);
        })
    }

    function editParent(index){
       
        let storedData = JSON.parse(localStorage.getItem('parents')) || [];
        let parent = storedData[index]
    
        document.getElementById('parentName').value = parent.parentname;
        document.getElementById('childName').value = parent.child;
        document.getElementById('parentPhone').value = parent.phone;
        document.getElementById('parentEmail').value = parent.email;
    
        parentForm.dataset.editIndex = index;
     
    }
    
    function deleteParent(index){
        let storedData = JSON.parse(localStorage.getItem('parents')) || [];
        storedData.splice(index, 1);
        localStorage.setItem('parents', JSON.stringify(storedData));
        getParentData();
    
    }
    
    document.addEventListener('DOMContentLoaded', getParentData);




  // Employee Form
  const employeeForm = document.getElementById('employeeForm');
  const employeeTable = document.getElementById('employeeTable');
  
  employeeForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const fullname = document.getElementById('employName').value;
      const email = document.getElementById('employEmail').value;
      const number = document.getElementById('employPhone').value;
      const salary = document.getElementById('employSalary').value;

      const sendData = { fullname, email, number, salary };
      const storedData = JSON.parse(localStorage.getItem('employes')) || [];
     

      if(employeeForm.dataset.editIndex){
        storedData[employeeForm.dataset.editIndex] = sendData
        delete employeeForm.dataset.editIndex;
     }else
     {
        storedData.push(sendData)
     }

      localStorage.setItem('employes', JSON.stringify(storedData));
      getEmployeeData();
      employeeForm.reset();
  });

  function getEmployeeData() {
      employeeTable.innerHTML = '';
      const getData = JSON.parse(localStorage.getItem('employes')) || [];
      getData.forEach((entry, index) => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${index + 1}</td>
              <td>${entry.fullname}</td>
              <td>${entry.email}</td>
              <td>${entry.number}</td>
              <td>${entry.salary}</td>
              <td>
                <button class="btn btn-info " onclick="editEmployee(${index})"> Edit </button>
                <button class="btn btn-success " onclick="deleteEmployee(${index})"> Delete </button>
             </td>
          `
          employeeTable.appendChild(row);
      })
  }

  function editEmployee(index){
 
    let storedData = JSON.parse(localStorage.getItem('employes')) || [];
    let employe = storedData[index]

    document.getElementById('employName').value = employe.fullname;
    document.getElementById('employEmail').value = employe.email;
    document.getElementById('employPhone').value = employe.number;
    document.getElementById('employSalary').value = employe.salary;

    employeeForm.dataset.editIndex = index;
 
}

function deleteEmployee(index){
    let storedData = JSON.parse(localStorage.getItem('employes')) || [];
    storedData.splice(index, 1);
    localStorage.setItem('employes', JSON.stringify(storedData));
    getEmployeeData();

}

document.addEventListener('DOMContentLoaded', getEmployeeData);

  



  // User Form
  const userForm = document.getElementById('userForm');
  const userTable = document.getElementById('userTable');
  
  userForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const fullname = document.getElementById('userName').value;
      const email = document.getElementById('userEmail').value;
      const number = document.getElementById('userPhone').value;
      const address = document.getElementById('userAddress').value;

      const sendData = { fullname, email, number, address };
      const storedData = JSON.parse(localStorage.getItem('users')) || [];
      

      if(userForm.dataset.editIndex){
        storedData[userForm.dataset.editIndex] = sendData
        delete userForm.dataset.editIndex;
     }else
     {
        storedData.push(sendData)
     }

      localStorage.setItem('users', JSON.stringify(storedData));
      getUserData();
      userForm.reset();
  });

  function getUserData() {
      userTable.innerHTML = '';
      const getData = JSON.parse(localStorage.getItem('users')) || [];
      getData.forEach((entry, index) => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${index + 1}</td>
              <td>${entry.fullname}</td>
              <td>${entry.email}</td>
              <td>${entry.number}</td>
              <td>${entry.address}</td>
                <td>
                <button class="btn btn-info " onclick="editUser(${index})"> Edit </button>
                <button class="btn btn-success " onclick="deleteUser(${index})"> Delete </button>
             </td>
          `
          userTable.appendChild(row);
      })
  }

  function editUser(index){

    let storedData = JSON.parse(localStorage.getItem('users')) || [];
    let user = storedData[index]

    document.getElementById('userName').value = user.fullname;
    document.getElementById('userEmail').value = user.email;
    document.getElementById('userPhone').value = user.number;
    document.getElementById('userAddress').value = user.address;

    userForm.dataset.editIndex = index;
 
}

function deleteUser(index){
    let storedData = JSON.parse(localStorage.getItem('users')) || [];
    storedData.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(storedData));
    getUserData();

}

document.addEventListener('DOMContentLoaded', getUserData);




  // Class Form
  const classForm = document.getElementById('classForm');
  const classTable = document.getElementById('classTable');
  
  classForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const classname = document.getElementById('className').value;
      const room = document.getElementById('classRoom').value;
      const instructor = document.getElementById('classInstructor').value;
      const duration = document.getElementById('classDuration').value;

      const sendData = { classname, room, instructor, duration };
      const storedData = JSON.parse(localStorage.getItem('classes')) || [];
     

      if(classForm.dataset.editIndex){
        storedData[classForm.dataset.editIndex] = sendData
        delete classForm.dataset.editIndex;
     }else
     {
        storedData.push(sendData)
     }

      localStorage.setItem('classes', JSON.stringify(storedData));
      getClassData();
      classForm.reset();
  });

  function getClassData() {
      classTable.innerHTML = '';
      const getData = JSON.parse(localStorage.getItem('classes')) || [];
      getData.forEach((entry, index) => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${index + 1}</td>
              <td>${entry.classname}</td>
              <td>${entry.room}</td>
              <td>${entry.instructor}</td>
              <td>${entry.duration}</td>
              <td>
                <button class="btn btn-info " onclick="editClass(${index})"> Edit </button>
                <button class="btn btn-success " onclick="deleteClass(${index})"> Delete </button>
             </td>
          `
          classTable.appendChild(row);
      })
  }

  function editClass(index){
    
    let storedData = JSON.parse(localStorage.getItem('classes')) || [];
    let Class = storedData[index]
    

    document.getElementById('className').value = Class.classname;
    document.getElementById('classRoom').value = Class.room;
    document.getElementById('classInstructor').value = Class.instructor;
    document.getElementById('classDuration').value = Class.duration;

    classForm.dataset.editIndex = index;
 
}

function deleteClass(index){
    let storedData = JSON.parse(localStorage.getItem('classes')) || [];
    storedData.splice(index, 1);
    localStorage.setItem('classes', JSON.stringify(storedData));
    getClassData();

}

document.addEventListener('DOMContentLoaded', getClassData);

 

