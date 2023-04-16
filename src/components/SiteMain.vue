        
<script>
import OptionBanner from "./OptionBanner.vue"
import SingleComic from "./SingleComic.vue"
import arrayComicsInfo from '../data/dc-comics.json';
// import arrayComicsInfo from '../data/dc-comics.json' assert {type: 'json'};


export default {
    name: "SiteMain",
    components: {
        OptionBanner,
        SingleComic
    },
    data() {
        return {
            arrayComicsInfo: arrayComicsInfo
        }
    },
}
</script>
        
<template>
    <main id="app_main">

        <div class="my_jumbotron">
            <img src="../assets/img/jumbotron.jpg" alt="jumbotron">
        </div>

        <div class="main_content container-lg">
            <div class="tag">current series</div>

            <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 ">
                <SingleComic v-for="comic, index in arrayComicsInfo" :img="arrayComicsInfo[index].thumb"
                    :text="arrayComicsInfo[index].series" />
            </div>
        </div>
        <OptionBanner />
    </main>
</template>

<style lang="scss" scoped></style>