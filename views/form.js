async function registerUser(event)
{
    event.preventDefault();
const name =  event.target.username.value;
const email =  event.target.email.value; 
const phoneNumber =  event.target.phonenumber.value;


const obj = {
    name,
    email,
    phoneNumber
}


    try {
        await axios.post('http://localhost:4000/user/add-user',obj)
        .then(response => {
            showUsersOnScreen(response.data);
        })
        }
    
    catch(err) {
        console.log(err);
    }
}




window.addEventListener('DOMContentLoaded', async() => {
    try {
        const response = await axios.get('http://localhost:4000/user/get-users')
        response.data.forEach((element) => {
            showUsersOnScreen(element);
        })
    }
    catch(err) {
        console.log(err);
    }
})


 function showUsersOnScreen(userDetails){

    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phonenumber').value = '';

    const parentElement = document.getElementById('listOfUsers');

    const childElement = `<li id=${userDetails.id}> '${userDetails.name}'-'${userDetails.phoneNumber}'-'${userDetails.email}'
                        <button onclick=deleteUser('${userDetails.id}')>Delete</button>
                        </li>`;

    parentElement.innerHTML += childElement;

 }


 function deleteUser(id) {

    axios.delete(`http://localhost:4000/user/delete-user/${id}`)
       .then((response) => {
       removeScreen(id);
   })
   .catch((err) => {
   console.log(err);
})

}



function removeScreen(id){

   
    const parentEle = document.getElementById('listOfUsers');

    const childEle = document.getElementById(id);

     parentEle.removeChild(childEle);

    }



  

 

