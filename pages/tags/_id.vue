<template>
  <div>
    <p class="title">Посты с тегом {{ this.$route.params.id }}</p>
    <p><a href="" @click.prevent="$router.push('/tags')">Назад</a></p>
  </div>
</template>