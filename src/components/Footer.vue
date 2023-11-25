<template>
<footer class="footer">
        <ul>
            <li>
                <a href="https://ois2.ut.ee/">Don't trust the other guy</a>
            </li>
            <li>
                <a href="https://www.youtube.com/watch?v=3X-iqFRGqbc">Click on me</a>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer{
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border: 1px solid var(--accent-color);
    background-color: var(--primary-color);
    padding: 5px;
    margin: auto;
    z-index: 1;
}
</style>