<template>
    <div>
        <p class="title">Теги</p>
        <v-chip outlined @click="detail(i)" class="ma-2 chip" v-for="(i,v) in tags" :key="v">
                {{i.name}}
        </v-chip>
    </div>
</template>

<script>
export default {
  data() {
    return {
        tags:[
            {name:"Go"}, {name:"Python"},{name:"JS"},{name:"Backend"},{name:"Frontend"},{name:"DevOPS"},{name:"Other"},
            {name:"Go"}, {name:"Python"},{name:"JS"},{name:"Backend"},{name:"Frontend"},{name:"DevOPS"},{name:"Other"},
            {name:"Go"}, {name:"Python"},{name:"JS"},{name:"Backend"},{name:"Frontend"},{name:"DevOPS"},{name:"Other"},
            {name:"Go"}, {name:"Python"},{name:"JS"},{name:"Backend"},{name:"Frontend"},{name:"DevOPS"},{name:"Other"},
            {name:"Go"}, {name:"Python"},{name:"JS"},{name:"Backend"},{name:"Frontend"},{name:"DevOPS"},{name:"Other"},
            {name:"Go"}, {name:"Python"},{name:"JS"},{name:"Backend"},{name:"Frontend"},{name:"DevOPS"},{name:"Other"},
            {name:"Go"}, {name:"Python"},{name:"JS"},{name:"Backend"},{name:"Frontend"},{name:"DevOPS"},{name:"Other"},
            {name:"Go"}, {name:"Python"},{name:"JS"},{name:"Backend"},{name:"Frontend"},{name:"DevOPS"},{name:"Other"}
        ]
    }
  },
  methods:{
      detail(i){
          this.$router.push("/tags/"+i.name)
      }
  }
}
</script>

<style scoped>
.chip{
    /* cursor: pointer; */
}
</style>