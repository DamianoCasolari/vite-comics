        
<script>
export default {
    name: "SiteFooter",
    data() {
        return {
            socialIcon: [
                {
                    icon: "footer-facebook.png",
                    name: "facebook"
                },
                {
                    icon: "footer-twitter.png",
                    name: "twitter"
                },
                {
                    icon: "footer-youtube.png",
                    name: "youtube"
                },
                {
                    icon: "footer-pinterest.png",
                    name: "pinterest"
                },
                {
                    icon: "footer-periscope.png",
                    name: "periscope"
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
    <footer id="app_footer">
        <div class="container_footer fs_25">

            <div class="top_footer my_background">
                <div class="info_top_footer">
                    <div class="img_container d-flex pt-3 pt-lg-0 container-lg">
                        <div class="col-4 col-md-2">
                            <div class="link_list_footer mx-3">
                                <h2 class=" my-lg-3">DC COMICS</h2>
                                <ul>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                </ul>
                            </div>
                            <div class="link_list_footer mx-3">
                                <h2 class="my-lg-3">shop</h2>
                                <ul>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>

                                </ul>
                            </div>
                        </div>
                        <div class="col-4 col-md-2 ">
                            <div class="link_list_footer mx-3">
                                <h2 class="my-lg-3">DC</h2>
                                <ul>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>

                                </ul>
                            </div>
                        </div>
                        <div class="col-4 col-md-2">
                            <div class="link_list_footer mx-3">
                                <h2 class="my-lg-3">sites</h2>
                                <ul>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                    <li><a href="#">ciao</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom_footer container-lg d-flex justify-content-between align-items-center py-4 px-3">
                <div class="link_container">
                    <a href="#">SIGN-UP NOW!</a>
                </div>
                <nav class="d-flex">
                    <div class="mx-2"> follow us</div>
                    <div class="social_nav fw-bold d-none d-md-flex">
                        <div v-for="icon in socialIcon">
                            <a class="text-dark" href="#">
                                <img :src="getImagePath(`../assets/img/${icon.icon}`)" :alt="icon.name">
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped></style>