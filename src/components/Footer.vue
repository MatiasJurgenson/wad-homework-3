<template>
<footer class="footer">
        <ul>
            <li>
                <p>© Copyright group w 2023</p>
            </li>
            <li>
                <p>Contact support: groupw@support.com</p>
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