window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});

//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml =
        "<tr><th>Fullname</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>PhoneNumber</th><th>Actions</th></tr>";
  let contactList = createContactDetailsJSON();
  let innerHtml = `${headerHtml}`;
  for(const contact of contactList){
     innerHtml = `${innerHtml}
     <tr>
             <td>${contact._name}</td>
             <td>${contact._address}</td>
             <td>${contact._city}</td>
             <td>${contact._state}</td>
             <td>${contact._zip}</td>
             <td>${contact._phoneNumber}</td>
             <td>
                 <img id="${contact._id}" onclick="remove(this)"  src="../Assets/icons/delete-black-18dp.svg" alt="delete">
                 <img id="${contact._id}" onclick="update(this)"  src="../Assets/icons/create-black-18dp.svg" alt="edit">
             </td>
         </tr>
     `;
     document.querySelector('#table-display').innerHTML = innerHtml;
}
}


const createContactDetailsJSON = () => {
 let contactListLocal = [
     {
         _name:'Varaza Mishra',
         _address:'Malad(west)',
         _city:'Mumbai',
         _state:'Maharastra',
         _zip:'400064',
         _phoneNumber:'02228017752',
         _phoneNumber: new Date().getTime(),
     },
     {
        _name:'Trishna Bhalla',
        _address:'Masjid Bunder(west)',
        _city:'Mumbai',
        _state:'Maharastra',
        _zip:'400003',
        _phoneNumber:'02223420607',
        _phoneNumber: new Date().getTime(),
     },
     {
        _name:'Anish Kaskar',
        _address:'Navi Mumbai',
        _city:'Mumbai',
        _state:'Maharastra',
        _zip:'4000705',
        _phoneNumber:'02227893390',
        _phoneNumber: new Date().getTime(),
     }
 ]
 return contactListLocal;
} 