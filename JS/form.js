window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function () {
            if (name.value.length == 0) {
                textError.textContent = "";
                return;
            }
            try {
                (new AddressBook()).name = name.value;
                textError.textContent = "";
            } catch (e) {
                textError.textContent = e;
            }
        });

        const phone = document.querySelector('#phone');
        const phoneError = document.querySelector('.phone-error');
        name.addEventListener('input',function () {
                if (phone.value.length == 0) {
                    phoneError.textContent = "";
                    return;
                }
                try {
                    (new AddressBook())._phoneNumber = phone.value;
                    phoneError.textContent = "";
                } catch (e) {
                    phoneError.textContent = e;
                }
            });

            const address = document.querySelector('#address');
            const addressError = document.querySelector('.address-error');
            name.addEventListener('input',function () {
                    if (address.value.length == 0) {
                        addressError.textContent = "";
                        return;
                    }
                    try {
                        (new AddressBook())._address = address.value;
                        addressError.textContent = "";
                    } catch (e) {
                        addressError.textContent = e;
                    }
                });
        
    });

    //on submit

    const save = () => {
        try{
            let addressBookData = createAddressBook();
            createAndUpdateStorage(addressBookData);
        }catch(e){
            return;
        }
    }
    
    const createAddressBook = ()=>{
        let addressBookData = new AddressBook();
        addressBookData._id = new Date().getTime();
        try{
          //  console.log("adding name");
            addressBookData._name=document.querySelector('#name').value;
          //  console.log("added name");
        }catch(e){
            setTextValue('.text-error', e)
            throw e;
        }
        console.log(document.querySelector('#name').value);
        addressBookData._phoneNumber=document.querySelector('#phone').value;
        console.log("added phone");
        addressBookData._address=document.querySelector('#address').value;
        addressBookData._city=document.querySelector('#city').value;
        addressBookData._state=document.querySelector('#state').value;
        addressBookData._zip=document.querySelector('#zip').value;
        alert(addressBookData.toString());
        return addressBookData;
    }

    function createAndUpdateStorage (addressBookData){
        let contactList = JSON.parse(localStorage.getItem("ContactList"));
        if(contactList!=undefined){
            contactList.push(addressBookData);
        }else{
            contactList=[addressBookData];
        }
        alert(contactList.toString());
        localStorage.setItem("ContactList",JSON.stringify(contactList));
    }
    
    const getSelectedValues=(propertyValue)=>{
        let allItems = document.querySelectorAll(propertyValue)
        let selItems = [] ;
        allItems.forEach(item=>{
            if(item.checked)
            selItems.push(item.value);
        })
        return selItems;
    }
    
    const getInputValueById = (id) => {
        let value = document.querySelector(id).value;
        return value;
    }

    const getInputElementValue = (id) => {
        let value = document.getElementById(id).value
        return value
    }  