
<template id="VueTabs">

<div id="tabs">
  <tabset>
    <tab title="Home">
      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
    </tab>
    <tab title="Profile">
      <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
    </tab>
    <tab title="Login">
      <p>Login</p>
    </tab>
  </tabset>
</div>



</template>

<script>

// WIP TODO CHANGE THIS INTO SINGLE-FILE COMPONENTS


Vue.component('tabset', {
  template: '#tabset-template',
  data: function(){
    return {
      tabs: [],
      current: null
    }
  },
  methods: {
    change: function(tab) {
      this.current = tab;
      this.tabs.forEach(function(_t) {
        _t.active = _t === tab;
      });
    },
    registerTab: function(tab) {
      if (!this.current) {
        this.current = tab;
      }
      this.tabs.push(tab);
    }
  }
});
Vue.component('tab', {
  template: '#tab-template',
  data: function() {
    return {in: false};
  },
  computed: {
    active: function() {
      var isActive = this.$parent.current === this;
      var self = this;

      // or use this method:
      // setTimeout(function() {
      //   self.in = isActive;
      // }, 0);
      this.$nextTick(function() {
        // if is commented, no animation
        this.$els.panel.offsetWidth;  // force css reflow
        this.in = isActive;
      });
      return isActive;
    }
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  compiled: function() {
    this.$parent.registerTab(this);
  }
});
// new Vue({
  // el: '#tabs'
// })

</script>



<style scoped>

</style>
