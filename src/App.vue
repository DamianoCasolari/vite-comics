<script>
import SiteHeader from "./components/SiteHeader.vue"
import SiteMain from "./components/SiteMain.vue"
import SiteFooter from "./components/SiteFooter.vue"

export default {
    components: {
        SiteHeader,
        SiteMain,
        SiteFooter,
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <SiteHeader />
    <main id="app_main">
        <div class="main_content"></div>

        <div class="extra_options">

        </div>

    </main>
    <SiteFooter />
</template>

<style lang="scss" scoped></style>
