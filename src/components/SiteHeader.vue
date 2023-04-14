        
<script>
export default {
    name: "SiteHeader",
    data() {
        return {
            navLinks: [
                {
                    name: "CHARACTER",
                    link: "#",
                },
                {
                    name: "COMICS",
                    link: "#",
                },
                {
                    name: "MOVIES",
                    link: "#",
                },
                {
                    name: "TV",
                    link: "#",
                },
                {
                    name: "GAMES",
                    link: "#",
                },
                {
                    name: "COLLECTIBLES",
                    link: "#",
                },
                {
                    name: "VIDEOS",
                    link: "#",
                },
                {
                    name: "FANS",
                    link: "#",
                },
                {
                    name: "NEWS",
                    link: "#",
                },
                {
                    name: "SHOP",
                    link: "#",
                }
            ],
            currentIndex: 0,
        }
    }
}
</script>
        
<template>
    <header id="app_header">
        <div class="container_header container-lg d-flex justify-content-between align-items-center py-4 px-3">
            <div class="img_container">
                <img src="../assets/img/dc-logo.png" alt="logo-dc">
            </div>

            <nav>
                <button class="d-lg-none menu_hamburger">&#9776;</button>
                <div class="nav_option fw-bold d-none d-lg-flex">
                    <div v-for="link, index in navLinks" class="mx-3" :class="index == 0 ? 'active' : ''">
                        <a href="#">{{ link.name }}</a>
                    </div>
                </div>
            </nav>
        </div>

    </header>
</template>

<style lang="scss" scoped></style>