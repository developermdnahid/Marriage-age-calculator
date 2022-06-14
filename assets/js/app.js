//    get element 

const age_form = document.getElementById('age_form');
const msg = document.querySelector('.msg');
const msLong = document.querySelector('.msg-long');


//     submit age form
age_form.onsubmit = (e) => {
  e.preventDefault();
//      get fields value
  let name = age_form.querySelector('input[name="name"]');
  let age = age_form.querySelector('input[name="age"]');
  let gender = age_form.querySelectorAll('input[name="gender"]');


  //      get gender name
  let gender_name = '';

  gender.forEach( item => {
    if(item.checked){
      gender_name = item.value;
    }
  });


  //      form validation


  if( name.value == '' || age.value == '' || gender_name == '' ){
    msg.innerHTML = setAlert('All fields are required.');
  }else if( numberCheck(age.value) == false ){
    msg.innerHTML = setAlert('Your age is invalid','warning');
  }else{


    msLong.innerHTML = marriageAgeCheck(name.value, age.value , gender_name);
    








    /**
     * 
     * // Marriage Function
    let marriage_age = gender_name == 'Male' ? 21 : 18 ;

    if( gender_name == 'Male' ){
      if( age.value >= marriage_age ){
        msLong.innerHTML = setAlert(`Hi, ${name.value} vhaiya, Apner marriage age is okey.` ,'success');
      }else{
        msLong.innerHTML = setAlert(`Hi, ${name.value} vhaiya, Apner marriage age is not okey. You have to wait ${marriage_age - age.value} years.`);
      }
    }else{
      if( age.value >= marriage_age ){
        msLong.innerHTML = setAlert(`Hi, ${name.value} Apo, Apner marriage age is okey.` ,'success');
      }else{
        msLong.innerHTML = setAlert(`Hi, ${name.value} Apo, Apner marriage age is not okey. You have to wait ${marriage_age - age.value} years.`);
      }
    }
     */

  }






}
