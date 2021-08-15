<template>
  <div>
    <p class="title">Категории</p>
    <v-treeview
      return-object
      dense
      :open.sync="openIds"
      :items="categories"
      item-key="name"
      open-on-click
    >
      <template v-slot:prepend="{ open }">
        <v-icon>
          {{ open ? "mdi-folder-open" : "mdi-folder" }}
        </v-icon>
      </template>

      <template v-slot:label="{ item }">
        <a
          v-if="item.countPosts != 0 || item.countChildren != 0"
          href=""
          @click.prevent="openCategory(item)"
          >{{ item.name }}</a
        >
        <span v-else
          ><strong>{{ item.name }}</strong></span
        >
        {{ item.countPosts != 0 ? item.countPosts + " постов" : "" }}
        {{ item.countChildren != 0 ? item.countChildren + " категорий" : "" }}
        {{
          item.countPosts == 0 && item.countChildren == 0
            ? "Пока ничего нет :("
            : ""
        }}
      </template>
    </v-treeview>
  </div>
</template>

<script>
export default {
  computed: {
    openIds: {
      get: function() {
        return this.$store.getters.OPENIDS;
      },
      set: function(newValue) {
        this.$store.dispatch("SET_OPENIDS", newValue);
      }
    }
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "Golang",
          countPosts: 5,
          countChildren: 6,
          children: [
            {
              id: 22,
              name: "Golang 1",
              countPosts: 5,
              countChildren: 6,
              children: []
            },
            {
              id: 23,
              name: "Golang 2",
              countPosts: 5,
              countChildren: 6,
              children: []
            }
          ]
        },
        {
          id: 2,
          name: "Python",
          countPosts: 5,
          countChildren: 6,
          children: [
            {
              id: 32,
              name: "Python 1",
              countPosts: 5,
              countChildren: 6,
              children: []
            },
            {
              id: 33,
              name: "Python 2",
              countPosts: 5,
              countChildren: 6,
              children: []
            }
          ]
        },
        {
          id: 3,
          name: "JavaScript",
          countPosts: 0,
          countChildren: 0
        },
        {
          id: 4,
          name: "Devops",
          countPosts: 0,
          countChildren: 6,
          children: [
            {
              id: 43,
              name: "Devops 1",
              countPosts: 5,
              countChildren: 6,
              children: []
            }
          ]
        },
        {
          id: 7,
          name: "Разное",
          countPosts: 80,
          countChildren: 0,
          children: null
        }
      ]
    };
  },

  methods: {
    openCategory(obj) {
      this.$router.push("/category/" + obj.name);
    },
  }
};
</script>

<style scoped></style>
