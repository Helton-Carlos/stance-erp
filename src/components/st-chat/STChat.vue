<script setup lang='ts'>
import { ref } from 'vue';
import { Chat } from '@chat-ui/vue3';

const data = ref([
  { 
    message: 'Olá! Em que posso ajudar?', 
    type: 'chatbot', 
    timestamp: '3:45 PM' 
  },
  { 
    message: 'Oi, Gostaria de falar com o suporte.', 
    type: 'person', 
    timestamp: '3:46 PM' 
  },
  { 
    message: `
    Certo, iremos ti ajudar: 
      1- Suporte, 
      2- Financeiro, 
      3- Adiquirir novo plano, 
      4- Outros
    `, 
    type: 'chatbot', 
    timestamp: '3:47 PM' 
  },
])

function handleSendEvent(input: string) {
  if (input == '') return;

  const messagePerson = {
    type: 'person',
    timestamp: formatAMPM(new Date()),
    message: input
  }

  data.value.push(messagePerson)

  setTimeout(async () => {
      const response = await fetch('https://www.boredapi.com/api/activity');
      const { activity } = await response.json();

      const messageChatbot = {
        type: 'chatbot',
        timestamp: formatAMPM(new Date()),
        message: activity
      }

      data.value.push(messageChatbot)
  }, getRandomNumber())
}

function getRandomNumber() {
  return Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
}
    
function formatAMPM(date: any) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0' + minutes : minutes;
  
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
</script>

<template>
  <div>
    <Chat
      class="chat"
      :offline="true"
      :onSend="handleSendEvent"
      :chat="data"
      :bgColorHeader="'#000000'"
      :bgColorChat="'#01253D'"
      :bgColorInput="'#000000'"
      :bgColorIcon="'#01253D'"
      :bgColorMessageChatbot="'#f1f7fc'"
      :bgColorMessagePerson="'#46DB53'"
      :bgColorMessageTimestamp="'#1e1e1e'"
      :textColorInput="'#f1f7fc'"
      :textColorHeader="'#f1f7fc'"
      :textColorMessageChatbot="'#01253D'"
      :textColorMessageTimestamp="'#f1f7fc'"
    />
  </div>
</template>