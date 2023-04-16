        
<script>
import { arrayDcComics, arrayShop, arrayDc, arraySites, socialIcon } from "../data/linksFooter"
import { appearWithScroll } from '../assets/js/utilityMethods.js';


export default {
    name: "SiteFooter",
    data() {
        return {
            socialIcon: socialIcon,
            arrayDcComics: arrayDcComics,
            arrayShop: arrayShop,
            arrayDc: arrayDc,
            arraySites: arraySites,
            appearWithScroll: appearWithScroll
        }
    },
    methods: {
        getImagePath: function (name) {
            return new URL(`../assets/img/${name}`, import.meta.url).href
        },
        scrollFunction() {
            const section = document.querySelector(".container_footer")
            appearWithScroll(section)
        }
    },
    mounted() {
        this.scrollFunction()

    }
}
</script>
        
<template>
    <footer id="app_footer">
        <div class="container_footer ">
            <!-- ----TOP FOOTER----- -->
            <div class="top_footer my_background">
                <div class="info_top_footer">
                    <div class="img_container d-flex py-3 container-lg">
                        <div class="col-4 col-md-2">
                            <div class="link_list_footer mx-3">
                                <h2 class="my-3 my-xl-4">DC COMICS</h2>
                                <ul>
                                    <li v-for="link in arrayDcComics"><a href="#">{{ link }}</a></li>
                                </ul>
                            </div>
                            <div class="link_list_footer mx-3">
                                <h2 class="my-3  my-xl-4">shop</h2>
                                <ul>
                                    <li v-for="link in arrayShop"><a href="#">{{ link }}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-4 col-md-2 ">
                            <div class="link_list_footer mx-3">
                                <h2 class="my-3 my-xl-4">DC</h2>
                                <ul>
                                    <li v-for="link in arrayDc"><a href="#">{{ link }}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-4 col-md-2">
                            <div class="link_list_footer mx-3">
                                <h2 class="my-3 my-xl-4">sites</h2>
                                <ul>
                                    <li v-for="link in arraySites"><a href="#">{{ link }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ----BOTTOM FOOTER----- -->
            <div class="bottom_footer container-lg d-sm-flex justify-content-between align-items-center py-4 px-3">
                <div class="link_container">
                    <a href="#">SIGN-UP NOW!</a>
                </div>
                <nav class="d-flex align-items-center mt-4 mt-sm-0">
                    <div class="mx-2 d-none d-md-flex"> follow us</div>
                    <div class="social_nav fw-bold d-flex">
                        <div v-for="icon in socialIcon">
                            <a class="text-dark mx-2" href="#">
                                <img :src="getImagePath(icon.icon)" :alt="icon.name">
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped></style>