<template>
  <router-view/>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
     Footer
  }
}
</script>


<style>
* {
    font-family: sans-serif;
    box-sizing: border-box;
    --primary-color: #8D7B68;
    --secondary-color: #F1DEC9;
    --teritary-color: #C8B6A6;
    --accent-color: #A4907C;
    --special-color: #0096FF;
    --light-text: var(--secondary-color);
    --dark-text: #716150;
}

body {
    line-height: 1.6;
    margin: 0;
    padding:0;
    padding-top: 65px;
    background-color: var(--secondary-color);
    color: var(--light-text);
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

a {
    color: var(--special-color);
    text-decoration: none;
    margin-left: 1em;
}

button {
    background-color: var(--special-color);
    color: white;
    border-width: 0px;
    text-decoration: none;
    border-radius: 0%;
    font-size: large;
    padding: 5px 10px 5px 10px;
    transition: background-color 0.3s ease;
    cursor: pointer;
}

button:hover {
    background-color: #002a55;
}

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

.nav {
    margin-top: 3px;
    line-height: 1.6;
}

.nav a {
    padding: 10px 15px;
    text-transform: uppercase;
    text-align: center;
    display: block;
    color: var(--teritary-color);
    font-size: .99em;
    transition: background-color 0.2s ease, color 0.2s ease;
}
    
/* Pseudo-class selector */
.nav a:hover {
    background-color: var(--accent-color);
    color: var(--light-text);
}

.logo {
    margin-right: 10px;
    font-size: 1.1em;
      }

/* 
Applies when the browser's width is 1000px wide or wider: 
*/

@media (min-width: 1000px) {
    .header,
    .nav {
        display: flex;
    }
    .header {
        flex-direction: row;
        justify-content: space-between;
    }
}

@media (max-width: 1000px) {
    .header,
    .nav {
        display: flex;
    }
    .header {
        flex-direction: column;
        align-items: center;
    }
    a {
        margin-left: 0px;
    }
    .logo {
        margin-right: 0px;
    }
}

.profile {
    display: none;
    padding: 10px;
    width: 250px;
    position: absolute;
    border-radius: 5px;
    background-color: var(--accent-color);
    color: var(--light-text);
    line-height: 1.0;
    transform: scale(0);
    transition: transform 0.3s ease;
    transform-origin: top right;
}

.profile p {
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    padding: 10px;
    margin-top: 2px;
    margin-bottom: 2px;
}

@media (min-width: 1000px) {
    .header,
    .nav {
        display: flex;
    }
    .header {
        flex-direction: row;
        justify-content: space-between;
    }
}

@media (max-width: 1000px) {
    .header,
    .nav {
        display: flex;
    }
    .header {
        flex-direction: column;
        align-items: center;
    }
    a {
        margin-left: 0px;
    }
    .logo {
        margin-right: 0px;
    }
}
</style>
