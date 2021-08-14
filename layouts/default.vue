<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="false"
      fixed
      app
      permanent
    >
      <v-card v-if="!miniVariant" class="mx-auto" outlined>
        <v-avatar class="mx-4 my-4" size="100px">
          <img
            alt="Avatar"
            src="https://avatars.githubusercontent.com/u/70743138?v=4"
          />
        </v-avatar>
        <v-card-title> Developer blog </v-card-title>
        <v-card-subtitle> Блог про IT </v-card-subtitle>
      </v-card>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-footer :absolute="true" v-if="!miniVariant">
        <v-row dense class="text-center">
          <v-col cols="3">
            <v-icon>mdi-github</v-icon>
          </v-col>
          <v-col cols="3">
            <v-icon>mdi-email</v-icon>
          </v-col>
          <v-col cols="3">
            <v-icon>mdi-telegram</v-icon>
          </v-col>
          <v-col cols="3">
            <v-icon>mdi-instagram</v-icon>
          </v-col>
        </v-row>
      </v-footer>
    </v-navigation-drawer>

    <v-app-bar fixed app>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "mdi-home",
          title: "Главная",
          to: "/",
        },
        {
          icon: "mdi-format-list-bulleted",
          title: "Категории",
          to: "/category",
        },
        {
          icon: "mdi-tag-multiple",
          title: "Теги",
          to: "/tags",
        },
        {
          icon: "mdi-archive",
          title: "Архив",
          to: "/archive",
        },
        {
          icon: "mdi-information",
          title: "Об авторе",
          to: "/info",
        },
      ],
      miniVariant: false,
    };
  },
};
</script>

<style scoped>
.v-list {
  padding: 0;
}
</style>