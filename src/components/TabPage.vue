<template>
  <div class="tabs">
    <b-card no-body>
      <b-tabs :card='false' :lazy='true'>
        <!-- Render Tabs -->
        <b-tab :title="`Tab ${i}`" v-for="i in tabs" :key="i"> <!--- HOW RENDER DIFFERENT COMPONENTS IN TABS -->
          Tab Contents {{i}}                                          <!--- HOW TO GET CLOSE-TAB IN TAB -->
          <b-btn size="sm" variant="danger" class="float-right" @click="()=>closeTab(i)">
            Close tab
          </b-btn>
        </b-tab>

        <!-- New Tab Button (Using tabs slot) -->
        <b-nav-item slot="tabs" @click.prevent="newTab" href="#">
          +
        </b-nav-item>

        <!-- Render this if no tabs -->
        <div slot="empty" class="text-center text-muted">
          There are no open tabs
          <br> Open a new tab using + button.
        </div>
      </b-tabs>
    </b-card>
  </div>
</template>


<script>
export default {
  name: 'TabPage',
  data () {
    return {
      tabs: [],
      tabCounter: 0
    }
  },
  methods : {
    closeTab (x) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1)
        }
      }
    },
    newTab () {
      this.tabs.push(this.tabCounter++)
    }
  }
}
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
