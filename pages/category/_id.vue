<template>
  <div>
    <p class="title">Посты из категории {{ this.$route.params.id }}</p>
    <p><a href="" @click.prevent="$router.push('/category')">Назад</a></p>
  </div>
</template>