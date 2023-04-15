<script>
import { navLinks } from "../data/itemsMenù"

export default {
    name: "OffCanvas",
    data() {
        return {
            navLinks: navLinks,
            offCanvasIndex: 0
        }
    },
    methods: {
        addActive(index) {
            this.offCanvasIndex = index;
        },
    },

}
</script>

<template>
    <nav>
        <div class="nav_offcanvas d-flex justify-content-center flex-wrap d-lg-none justify-content-center">
            <div v-for="link, index in navLinks" class="nav_item mx-3 my-3" @click="addActive(index)"
                :class="offCanvasIndex == index ? 'active' : ''">
                <a href="#">{{ link.name }}</a>
            </div>
        </div>
    </nav>
</template>


<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;



.nav_offcanvas {
    background: linear-gradient(to top, $clr_primary, transparent);
    position: fixed;
    top: 0px;

    width: 100%;
    display: flex;
    align-items: center;

    .nav_offcanvas {
        margin: 30px 0;
    }

    .nav_item a {
        color: $clr_total_light;
        text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.548)
    }

    .nav_item:hover a {
        color: $clr_extra_options;
    }

    div.active a {
        color: $clr_extra_options;
    }

}

// MEDIA QUERY 

@media screen and (min-width:360px) {
    .nav_offcanvas {
        height: 115px;

    }
}
</style>