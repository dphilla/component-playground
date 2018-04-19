<!--currently not working-->


<template id="VueTabs">
  <div>
      <tabs>
          <tab name="First tab">
              First tab content
          </tab>
          <tab name="Second tab">
              Second tab content
          </tab>
          <tab name="Third tab">
              Third tab content
          </tab>
      </tabs>
  </div>
</template>

<script>

export default {
  name: 'VueTabs',
  data () {
    return {
      msg: 'Configurability is Key'
    }
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
