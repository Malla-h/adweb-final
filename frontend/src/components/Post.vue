<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { defineProps, computed } from 'vue';

// Recebe os dados do post usando props do componente pai
const props = defineProps({
  topico: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
  curso: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true
  }
});

const formattedDate = computed(() => {
  // Converter data pro formato ISO (ex.: 2024-11-12T12:20:02)
  const dateISO = new Date(props.date.replace(" ", "T") + 'Z'); // + 'Z' para indicar UTC para o Javascript
  const formatador = new Intl.DateTimeFormat("en-GB", {
    timeZone: 'America/Sao_Paulo', // GMT-3
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  // Formatar a data
  const formatado = formatador.format(dateISO);
  return formatado;
});

console.log(props.topico, props.curso, props.post);
</script>

<template>
  <div class="post-container">
    <div class="post-text" id="curso">{{ curso }}</div>
    <div class="topico-container">
      <div class="post-text" id="topico">
        Tópico:&nbsp;&nbsp;<span id="topico-text">{{ topico }}</span>
      </div>
    </div>
    <div class="post-text" id="post">{{ post }}</div>
    <div class="date-container">
      <div class="post-text" id="date">{{ formattedDate }}</div>
    </div>
  </div>
</template>

<style scoped>
.post-container {
  width: 600px;
  min-width: 60px;
  border: 1px solid grey;
  border-radius: 0.25em;
  padding: 5px;
  margin: 50px auto;
  margin-top: 0px;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  background-color: transparent;

}

.post-text {
  font-size: 18px;
  line-height: 1.6;
  color: #2b2b2b;
  white-space: pre-wrap;
  background-color: aliceblue;
}


#curso {
  color: aliceblue;
  border-bottom: 3px solid black;
  background-color: rgb(18, 50, 92);
  padding: 4px;
}

.date-container {
  display: flex;
  justify-content: flex-start;
  background-color: aliceblue;
}

.date-container * {
  color: aliceblue;
  padding-bottom: 2px;
  padding-top: 5px;
  padding-right: 20px;
  padding-left: 10px;
  border-top-right-radius: 1em;
}



#date {
  background-color: rgb(18, 50, 92);
  border-top: 3px solid #242424;
  border-right: 4px solid #242424;
  font-size: smaller;
}

.topico-container {
  display: flex;
  background-color: aliceblue;
  border-bottom: 2px solid #242424;
  padding-left: 10px;
}

#topico {
  padding: 5px;
  padding-left: 0px;
}

#topico-text {
  font-weight: 600;
}

#post {
  padding: 15px 20px 15px 16px;
  text-align: left;
  white-space: pre-wrap;
  line-height: 1.25;
}
</style>
