<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <form :class="this.errors ? 'errors' : false">
    <div>
      <label for="name">Name:</label>
      <input id="name" v-model="name" required @invalid="invalidateForm" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input
        id="email"
        type="email"
        v-model="email"
        required
        @invalid="invalidateForm"
      />
    </div>
    <div>
      <label for="text">Comment:</label>
      <textarea id="text" v-model="text"></textarea>
    </div>
    <div>
      <input type="submit" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      errors: false
    };
  },
  methods: {
    invalidateForm() {
      this.errors = true;
    }
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss">
// Boilerplate styles
body {
  padding: 2em;
}
label {
  display: block;
}
div + div {
  margin-top: 1em;
}

// ✨ The magic ✨
form.errors {
  :invalid {
    outline: 2px solid red;
  }
}
</style>           