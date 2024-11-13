<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const topico = ref('');
const post = ref('');
const curso = ref('');

// Array com todos os cursos
const cursos = ref([]);

// Cursos hardcoded para teste por enquanto
// TODO: pegar os cursos da database
//const cursos = ['História','Geografia','Matemática','Física','Química','Biologia','Português','Inglês'];

const fetchCursos = async () => {
    try {
        const response = await axios.get('http://localhost:3000/cursos');
        cursos.value = response.data;
    } catch (error) {
        console.error('Failed to fetch cursos:', error);
    }
};

onMounted(() => {
    fetchCursos();
});

// define um evento que o componente pai pode escutar
const emit = defineEmits(['submit-post']);

const onSubmit = async () => {
    try {
        const newPost = {
            title: topico.value,
            content: post.value,
            curso_id: curso.value
        };
        await axios.post('http://localhost:3000/posts', newPost);

        // depois de fazer o post, emitir o evento para notificar o componente pai
        emit('submit-post');

        // Limpar os campos
        topico.value = '';
        post.value = '';
        curso.value = '';
    } catch (error) {
        console.error('Falha em enviar post:', error);
    }
};


</script>

<template>
    <div>
        <form class="post-form" @submit.prevent="onSubmit">
            <h3>Fazer uma postagem:</h3>
            <select name="curso" id="curso" v-model="curso">
                <option selected disabled>Selecione um curso</option>
                <option v-for="cursoOption in cursos" :key="cursoOption.id" :value="cursoOption.id">
                    {{ cursoOption.nome }} - {{ cursoOption.ano }}
                </option>
            </select>
            <label for="topico">Tópico</label>
            <input id="topico" v-model="topico">
            <label for="post">Post:</label>
            <textarea name="post" id="post" v-model="post"></textarea>
            <input type="submit" class="button" value="Enviar">

        </form>
    </div>
</template>

<style scoped>
div {
    width: 600px;
    height: 400px;
    min-width: 60px;
    border: solid grey;
    border-radius: 0.5em;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 15px;
    padding-bottom: 20px;
    margin: 50px;
}

.button {
    height: 80px;
    width: 50%;
    align-self: center;
    margin-top: 15px;
}

form {
    display: flex;
    flex-direction: column;
    height: inherit;
}

form * {
    margin-top: 10px;
}

form h3 {
    margin: 0px;
}


form textarea {
    height: 100%;
    margin-top: 3px;
}

input {
    margin-top: 3px;
}

#curso,
#topico {
    height: 50px;
}
</style>