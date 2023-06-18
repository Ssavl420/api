const btnActivity = document.querySelector('.btn');
const tagBodyHtml = document.querySelector('body');
const title = document.querySelector('.title');
const message = document.querySelector('.message');


btnActivity.addEventListener('click', getActivity)

function getActivity() {

   btnActivity.setAttribute("disabled", "disabled");
   message.style.cssText = 'opacity: 0.2;';

   fetch('https://www.boredapi.com/api/activity/')
   .then(data => {
      
      if (data.status !== 200) {
         return null;
      }

      return data.json();
   })
   .then(response => {

      tagBodyHtml.classList.add('success');
      title.innerText = `Ура, теперь не скучно 🔥`;
      message.innerText = response.activity;

      btnActivity.removeAttribute("disabled", "disabled");
      message.style.cssText = 'opacity: 1;';

   })
}

// function getActivity() {
//    // fetch('https://www.boredapi.com/api/activity/')

//    (async () => {
//       // Шаг 1: начинаем загрузку fetch, получаем поток для чтения
//       let response = await fetch('https://www.boredapi.com/api/activity/');
      
//       const reader = response.body.getReader();
      
//       // Шаг 2: получаем длину содержимого ответа
//       const contentLength = +response.headers.get('Content-Length');
      
//       // Шаг 3: считываем данные:
//       let receivedLength = 0; // количество байт, полученных на данный момент
//       let chunks = []; // массив полученных двоичных фрагментов (составляющих тело ответа)
//       while(true) {
//          const {done, value} = await reader.read();
//          console.log("Загрузка")
//          if (done) {
//          break;
//          }
      
//          chunks.push(value);
//          receivedLength += value.length;
      
//          console.log(`Получено ${receivedLength} из ${contentLength}`)
//       }
      
//       // Шаг 4: соединим фрагменты в общий типизированный массив Uint8Array
//       let chunksAll = new Uint8Array(receivedLength); // (4.1)
//       let position = 0;
//       for(let chunk of chunks) {
//          chunksAll.set(chunk, position); // (4.2)
//          position += chunk.length;
//       }
      
//       // Шаг 5: декодируем Uint8Array обратно в строку
//       let result = new TextDecoder("utf-8").decode(chunksAll);
      
//       // Готово!
//       let commits = JSON.parse(result);
//       alert(commits[0].author.login);
//       })()

// }