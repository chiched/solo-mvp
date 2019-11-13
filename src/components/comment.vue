<template>
  <div class="comment">
  {{ comment }}
  </div>
</template>

<script>
export default {
  name: 'comment',
  props: {
  },
  computed: {
    comment() {
      return this.$store.state.comment;
    },
  },
  methods: {
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comment {
    position: absolute;
    bottom: 9px;
    color: #a70000;
    font-size: 12px;
    font-weight: bold;
    left: 31px;
}
</style>

