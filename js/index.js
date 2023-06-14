const btnActivity = document.querySelector('.btn');
const tagBodyHtml = document.querySelector('body');
const title = document.querySelector('.title');
const message = document.querySelector('.message');


btnActivity.addEventListener('click', getActivity)

function getActivity() {
   console.log('Функция запущена')
   fetch('http://www.boredapi.com/api/activity/')
      .then(data => data.json())
      .then(response => {
         // if(response.status !== 'success') { //success не робит!. undefined
         //    console.log('response.status')
         //    return null;
         // }
         tagBodyHtml.classList.add('success');
         title.innerText = `Ура, теперь не скучно 🔥`;
         message.innerText = response.activity;
      })
}

