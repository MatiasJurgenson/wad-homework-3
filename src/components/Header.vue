<template>
    <header class="header">
        <nav class="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/signup">SignUp</router-link>
        </nav>

        <img src="@/assets/pfp.png" class="logo" id="openProfile" width="50" height="50" alt="My picture">
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

.header {
    padding-top: .5em;
    padding-bottom: .5em;
    border: 1px solid var(--accent-color);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: var(--primary-color);
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
    position: fixed;
    left:0;
    right:0;
    top:0;
    z-index: 1;
}
</style>