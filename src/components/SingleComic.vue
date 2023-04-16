
<script>
export default {
    name: "SingleComic",
    data() {
        return {

        }

    },
    props: {
        img: String,
        text: String,
    }
}
</script>

<template>
    <a href="#" class="comic col py-4 px-3">
        <div class="img_container">
            <img :src="img" :alt="text">
        </div>
        <div class="text my-2 ms-1 fs-4"> {{ text }}</div>
    </a>
</template>


<style lang="scss" scoped>
.comic {
    height: 100%;
    color: white;

    .img_container {
        height: 100%;

        img {
            object-fit: cover;
            object-position: top;
            width: 100%;
            height: 250px;
        }
    }

    &:hover .text {
        animation: change_color 0.6s ease-in-out;
    }
}

// ANIMATION 

@keyframes change_color {

    0% {
        color: white;
    }

    50% {
        color: black;
    }

    100% {
        color: white;
    }

}
</style>