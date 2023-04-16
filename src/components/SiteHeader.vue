        
<script>
import { navLinks } from "../data/itemsMenù.js"
import OffCanvas from "./OffCanvas.vue"

export default {
    name: "SiteHeader",
    components: {
        OffCanvas
    },
    data() {
        return {
            navLinks: navLinks,
            currentIndex: 0,
            menùHamburger: false,
            lastPosition: 0
        }
    },
    methods: {
        addActive(index) {
            this.currentIndex = index;
        },
        clickMenù() {
            this.menùHamburger = !this.menùHamburger
        },
        closeOffCanvas(e) {
            const element = document.querySelector(".nav_offcanvas ")
            if (element.contains(e.target)) {
                this.menùHamburger = !this.menùHamburger
            }
        },
        scrollFunction() {
            const currentPosition = window.pageYOffset;
            if (currentPosition > this.lastPosition) {
                this.menùHamburger = false;
            } else {
                this.menùHamburger = true;
            }
            this.lastPosition = currentPosition;

        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollFunction);
    },
}
</script>
        
<template>
    <header id="app_header">
        <div class="container_header container-lg d-flex justify-content-between align-items-center py-4 px-3">
            <div class="img_container logoDc" :class="{ 'gray_scale': menùHamburger }">
                <img src="../assets/img/dc-logo.png" alt="logo-dc">
            </div>

            <nav>
                <button class="d-lg-none menu_hamburger" @click="clickMenù">&#x2630;</button>
                <div class="nav_option fw-bold d-none d-lg-flex">
                    <div v-for="link, index in navLinks" class="nav_item mx-3" @click="addActive(index)"
                        :class="currentIndex == index ? 'active' : ''">
                        <a href="#">{{ link.name }}</a>
                    </div>
                </div>
            </nav>
        </div>

    </header>
    <OffCanvas :class="this.menùHamburger ? 'd-block menu-opened' : ' menu-closed'" @click="closeOffCanvas" />
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/utility_selector.scss" as *;

.menu-opened {
    animation: opened 0.3s linear forwards;

}

.menu-closed {
    animation: closed 0.3s linear forwards;
}


@keyframes opened {

    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes closed {

    from {
        opacity: 1;

    }

    to {
        opacity: 0;


    }
}
</style>