<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="false"
      :touchless="true"
      fixed
      app
      permanent
    >
      <v-card class="mx-auto" outlined>
        <div :class="miniVariant ? `flex-mini` : `flex`">
          <v-avatar v-if="!miniVariant" :size="miniVariant ? `20px` : `100px`">
            <img
              alt="Avatar"
              src="https://avatars.githubusercontent.com/u/70743138?v=4"
            />
          </v-avatar>

          <v-btn icon @click.stop="miniVariant = !miniVariant">
            <v-icon
              >mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon
            >
          </v-btn>
        </div>
        <div class="description" v-if="!miniVariant">
          <v-card-title> Developer blog </v-card-title>
          <v-card-subtitle> Блог про IT </v-card-subtitle>
        </div>
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

    <v-app-bar fixed app dense> </v-app-bar>

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
  methods: {},
};
</script>

<style scoped>
.v-list {
  padding: 0;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 16px;
  padding-top: 16px;
}

.flex-mini {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>