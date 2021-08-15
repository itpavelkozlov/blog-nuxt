<template>
  <div>
    <p class="title">Категории</p>
    <v-treeview
      return-object
      dense
      :items="categories"
      item-key="name"
      open-on-click
      :load-children="fetch"
    >
      <template v-slot:prepend="{ open }">
        <v-icon>
          {{ open ? "mdi-folder-open" : "mdi-folder" }}
        </v-icon>
      </template>

      <template v-slot:label="{ item }">
        <a href="" @click.prevent="openCategory(item)">{{ item.name }}</a>
        {{ item.countPosts + " постов, " + item.countChildren + " категорий" }}
      </template>
    </v-treeview>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "Golang",
          countPosts: 5,
          countChildren: 6,
          children: [],
        },
        {
          id: 2,
          name: "Python",
          countPosts: 5,
          countChildren: 6,
          children: [],
        },
        {
          id: 3,
          name: "JavaScript",
          countPosts: 5,
          countChildren: 6,
          children: [],
        },
        {
          id: 4,
          name: "Devops",
          countPosts: 5,
          countChildren: 6,
          children: [],
        },
        {
          id: 7,
          name: "Разное",
          countPosts: 80,
          countChildren: 0,
          children: null,
        },
      ],
    };
  },

  methods: {
    openCategory(obj) {
      this.$router.push("category/" + obj.name);
    },
    fetch(item) {
      let children = [];
      if (item.id > 3) {
        children = null;
      }
      item.children = [
        {
          id: item.id + 1,
          name: item.name + "." + item.id,
          children: children,
          countPosts: 5,
          countChildren: 6,
        },
      ];
    },
  },
};
</script>

<style scoped>
</style>