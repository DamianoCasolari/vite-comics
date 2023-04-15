        
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
        <div
            class="container-lg options_container fs_25 d-flex justify-content-center flex-wrap text-center align-items-center">
            <a href="#" class="additional_option d-lg-flex my-3" v-for="option in optionsArray">
                <div class="img_container d-flex justify-content-center align-items-center">
                    <img :src="getImagePath(`../assets/img/${option.img}`)" :alt="option.name">
                </div>
                <div class="name_option m-2">{{ option.name }}</div>
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/utility_selector" as *;

.extra_options {
    background-color: $clr_extra_options;


    .options_container {
        padding: 15px 0;
        height: 100%;

        .additional_option {
            width: calc(100% / 3);
            color: $clr_total_light;

            &:hover img {
                animation: tilt 0.3s linear alternate infinite;
            }

            .name_option {
                transition-duration: 0.5s;
            }

            &:hover {
                // color: $clr_primary;
                filter: invert(1);
            }

            img {
                object-fit: contain;
                height: 50px;
            }
        }
    }
}

// MEDIA QUERY 

@media screen and (min-width: 576px) {
    .extra_options {
        height: 150px;

        .additional_option {
            width: calc(100% / 5) !important;

        }
    }
}

// ANIMATION 

@keyframes tilt {
    from {
        transform: rotate(-10deg);
    }

    to {
        transform: rotate(10deg);
    }

}
</style>