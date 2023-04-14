        
<script>
export default {
    name: "OptionBanner",
    data() {
        return {
            optionsArray: [
                {
                    name: "DIGITAL COMICS",
                    img: "buy-comics-digital-comics.png",
                },
                {
                    name: "DC MERCHANDISE",
                    img: "buy-comics-merchandise.png"
                },
                {
                    name: "SUBSCRIPTION",
                    img: "buy-comics-shop-locator.png"
                },
                {
                    name: "COMIC SHOP LOCATION",
                    img: "buy-comics-subscriptions.png"
                },
                {
                    name: "DC POWER VISA",
                    img: "buy-dc-power-visa.svg"
                },
            ]
        }

    },
    methods: {
        getImagePath: function (name) {
            return new URL(name, import.meta.url).href
        }
    }
}
</script>
        
<template>
    <div class="extra_options">
        <div class="container-lg options_container fs_25 d-flex flex-wrap text-center align-items-center">
            <div class="additional_option d-lg-flex justify-content-center" v-for="option in optionsArray">
                <div class="img_container d-flex justify-content-center align-items-center">
                    <img :src="getImagePath(`../assets/img/${option.img}`)" :alt="option.name">
                </div>
                <div class="m-2">{{ option.name }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/utility_selector" as *;

.options_container {

    height: 100%;

    .additional_option {
        width: calc(100% / 5);
        color: $clr_total_light;


        img {
            object-fit: contain;
            height: 40px;
        }
    }
}
</style>