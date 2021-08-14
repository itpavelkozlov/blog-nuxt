<template>
  <div>
    <v-list dense>
      <v-list-item-group color="primary">
        <v-subheader>Категории</v-subheader>
      </v-list-item-group>

      <div v-for="(v, i) in categories" :key="i">
        <v-list-group
          v-if="v.subcategoryCount !== 0"
          append-icon="mdi-chevron-down"
        >
          <template v-slot:activator>
            <v-list-item-title>{{ v.title }}</v-list-item-title>
          </template>

          <div v-for="(v, i) in v.subcategory" :key="i">
            <v-list-group
              prepend-icon="mdi-chevron-down"
              v-if="v.subcategoryCount !== 0"
              sub-group
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ v.title }}</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="(v, i) in v.subcategory" :key="i" link>
                <v-list-item-title
                  style="padding-left: 50px"
                  v-text="v.title"
                ></v-list-item-title>
              </v-list-item>
            </v-list-group>

            <v-list-item dense v-else link
              ><v-list-item-title
                style="padding-left: 50px"
                v-text="v.title"
              ></v-list-item-title
            ></v-list-item>
          </div>
        </v-list-group>
        <v-list-item v-else link>
          <v-list-item-title>{{ v.title }}</v-list-item-title>
        </v-list-item>
      </div>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          title: "Golang",
          subcategory: [
            {
              title: "Golang 1",
              subcategory: [
                {
                  title: "Golang 1.1",
                  subcategory: [],
                  subcategoryCount: 5,
                  postsCount: 70,
                },
              ],
              subcategoryCount: 1,
              postsCount: 70,
            },
            {
              title: "Golang 2",
              subcategory: [],
              subcategoryCount: 0,
              postsCount: 70,
            },
            {
              title: "Golang 3",
              subcategory: [],
              subcategoryCount: 0,
              postsCount: 70,
            },
          ],
          subcategoryCount: 3,
          postsCount: 70,
        },
        {
          title: "Python",
          subcategory: [
            {
              title: "Python inner 1",
              subcategory: [],
              subcategoryCount: 0,
              postsCount: 37,
            },
            {
              title: "Python inner 2",
              subcategory: [],
              subcategoryCount: 0,
              postsCount: 37,
            },
          ],
          subcategoryCount: 2,
          postsCount: 57,
        },
        {
          title: "JavaScript",
          subcategory: [
            {
              title: "JavaScript inner",
              subcategory: [],
              subcategoryCount: 0,
              postsCount: 37,
            },
          ],
          subcategoryCount: 1,
          postsCount: 37,
        },
        {
          title: "Devops",
          subcategory: [],
          subcategoryCount: 0,
          postsCount: 17,
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>