<template>
    <div class="layout-breadcrumb">
        <a-breadcrumb :routes="routes">
            <template slot="itemRender" slot-scope="{ route }">
                <span>{{ route.title }}</span>
            </template>
        </a-breadcrumb>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                routes: []
            }
        },
        created() {
            this.routeMatched()
        },
        watch: {
            $route() {
                this.routeMatched()
            }
        },
        methods: {
            routeMatched() {
                this.routes = [{
                    title: '举杯邀月',
                }]
                this.$route.matched.filter((item) => {
                    if (!item.meta.hidden) {
                        this.routes.push({
                            name: item.name,
                            title: item.meta.title,
                        })
                    }
                })
            }
        }
    }
</script>
