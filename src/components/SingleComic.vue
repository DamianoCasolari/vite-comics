
<script>
export default {
    name: "SingleComic",
    data() {
        return {

        }

    },
    props: {
        img: String,
        text: String
    }
}
</script>

<template>
    <a href="#" class="comic col py-5 px-3 text-white">
        <div class="img_container">
            <img :src="img" :alt="text">
        </div>
        <div class="my-2 fs-4"> {{ text }}</div>
    </a>
</template>


<style lang="scss" scoped>
.comic {
    height: 100%;

    .img_container {
        height: 100%;

        img {
            object-fit: cover;
            width: 100%;
            height: 300px;
        }
    }
}
</style>