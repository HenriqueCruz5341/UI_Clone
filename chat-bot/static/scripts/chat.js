const colls = document.querySelectorAll('.collapsible');

colls.forEach((coll) => {
  coll.addEventListener('click', function () {
    const toggle = this.classList.toggle('active');

    if (toggle) document.querySelector('#textInput').focus();

    const content = this.nextElementSibling;

    if (content.style.maxHeight) content.style.maxHeight = null;
    else content.style.maxHeight = content.scrollHeight + 'px';
  });
});

function getTime() {
  const today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();

  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;

  const time = hours + ':' + minutes;

  return time;
}

// FIRST BOT MESSAGE
(function () {
  const firstMessage = 'Olá, como vai você?';

  document.querySelector('#botStarterMessage').innerHTML =
    '<p class="botText"><span>' + firstMessage + '</span></p>';

  const time = getTime();

  document.querySelector('#chat-timestamp').append(time);
  document.querySelector('#userInput').scrollIntoView(false);
})();

function createMessage(user, message) {
  const p = document.createElement('p');
  p.classList.add(user ? 'userText' : 'botText');
  const span = document.createElement('span');
  span.innerHTML = message;
  p.append(span);

  return p;
}

function getHardResponse(userText) {
  const botResponse = getBotResponse(userText);
  const botMessage = createMessage(false, botResponse);
  document.querySelector('#chatbox').append(botMessage);

  document.querySelector('#chat-bar-bottom').scrollIntoView(true);
}

function buttonSendText(sampleText) {
  const textMessage = createMessage(true, sampleText);

  document.querySelector('#textInput').value = '';
  document.querySelector('#chatbox').append(textMessage);
  document.querySelector('#chat-bar-bottom').scrollIntoView(true);
}

function getResponse() {
  const userText = document.querySelector('#textInput').value;

  if (userText === '') return;

  buttonSendText(userText);

  setTimeout(() => getHardResponse(userText), 1000);
}

function sendButton() {
  getResponse();
}

function heartButton() {
  buttonSendText('Amei!');
}

// PRESS ENTER TO SEND MESSAGE
document.querySelector('#textInput').addEventListener('keydown', function (e) {
  if (e.which == 13) getResponse();
});
