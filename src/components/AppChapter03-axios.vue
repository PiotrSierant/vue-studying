<template>
    <div class="my-app">
        <b-container>
            <transition name="fade" mode="out-in">
                <div key="1" v-if="loading" class="d-flex justify-content-center my-5">
                    <b-spinner variant="primary" />
                </div>

                <b-row v-else>
                    <b-col sm="12" v-for="(quote, index) in quotes" :key="index">
                        <b-card :title="quote.title" tag="article" class="my-2">
                            <div sm="12" v-html="quote.content">
                            </div>

                            <b-button variant="primary" size="sm" @click='getNewOne(index)'>Losuj kolejny</b-button>

                        </b-card>
                    </b-col>
                </b-row>

            </transition>
        </b-container>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            loading: true,
            quotes: []
        };
    },
    methods: {
        async getNewOne(index) {
            this.loading = true;
            const url = `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&timestamp=${new Date().getTime()}`;
            try {
                let { data } = await this.axios(url);
                if (data === undefined) {
                    this.quotes.push(data.shift());
                } else {
                    this.$set(this.quotes, index, data.shift());
                }
            }
            catch (error) {
                console.log(error.message);
            }
        }
    },
    async created() {
        await this.axios.all([this.getNewOne(), this.getNewOne(), this.getNewOne()])
        this.loading = false;
    }
}
</script>
  
<style>
.my-app {
    padding: 50px 0;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>