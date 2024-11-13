<script setup>
import { reactive, onMounted } from 'vue';
import axios from 'axios';
import PostForm from './PostForm.vue';
import Post from './Post.vue';

// Array para teste com posts hardcoded
// const posts = reactive([
//     { topico: 'Prova amanhã', content: 'Preparem suas bundas.', curso: 'curso1' },
//     { topico: 'Trabalho de hoje', content: 'Exercicios livro capítulo 1 ao 60.', curso: 'curso2' },
//     { topico: 'Inovaweek 2077', content: 'Tragam sua cyberware.', curso: 'curso3' }
// ]);

// Array com todos os posts
const posts = reactive([]);

const fetchPosts = async () => {
  try {
    const response = await axios.get('http://localhost:3000/posts');
    console.log('Fetched posts:', response.data);
    // Limpa o array de posts e adiciona os novos com a resposta da API
    posts.splice(0, posts.length, ...response.data);
  } catch (error) {
    console.error('Falha ao carregar posts:', error);
  }
};

const addPost = () => {
  fetchPosts(); // Refresh dos posts após adicionar um novo
};

onMounted(() => {
  fetchPosts();
});

</script>

<template>
  <div>
    <PostForm @submit-post="addPost" />
    <div>
      <h2 id="postagens">Postagens:</h2>
    </div>
    <div class="post-container" v-for="(post) in posts" :key="post.id">
      <Post class="post" :topico="post.title" :post="post.content" :curso="post.curso_nome" :date="post.created_at" />
    </div>
  </div>
</template>

<style>
#postagens {
  margin-top: 0px;
}
</style>
