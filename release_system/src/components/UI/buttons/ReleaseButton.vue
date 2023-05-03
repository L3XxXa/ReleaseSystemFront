<template>
    <button class="release__button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "ReleaseButton"
}
</script>

<style scoped>
.release__button {
    border: none;
    font-family: Montserrat;
    font-size: 20px;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
}

.release__button:hover {
    box-shadow: 0 0;
    background-color: #F5F5F5;
}
</style>