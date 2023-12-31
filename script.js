const API = window.SpeechRecognition || window.webkitSpeechRecognition

if (API) {
   const recognition = new API()

   recognition.continouse = true;
   recognition.lang = 'en-GB'

   const button = document.querySelector('.speech-recognition')
   const speechResult = document.querySelector('.result')

   button.addEventListener('click', () => {
    recognition.start();
    button.textContent = 'Listening...'
   })


   recognition.onresult = (event) => {
    for(const result of event.results) {
        speechResult.textContent = result[0].transcript
    }
   }
}