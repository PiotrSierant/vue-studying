<template>
    <div class="panel panel-primary">
        <div class="panel-heading">
            <section class="panel-title my-class">
                <h4>Champion</h4>
                <button class="btn btn-danger" type="button" @click="remove">Delete</button>
            </section>
        </div>
        <div class="panel-body">
            <div class="input-group margin-bottom">
                <span class="input-group-addon">Hero Name</span>
                <span class="input-group-addon">{{name}}</span>
            </div>
            <div class="input-group margin-bottom">
                <span class="input-group-addon">Hero Nick</span>
                <span class="input-group-addon">{{nick}}</span>
            </div>
        </div>
        <div class="row margin-bottom">
            <div class="col-md-6">
                <div class="progress">
                    <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" style="width: 100%">
                    {{hp}}/{{hp}} HP</div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="progress">
                    <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" style="width: 100%">
                    {{mana}}/{{mana}} MANA</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ComponentChampPanel',
    methods: {
        remove() {
            this.$emit('remove', this.name)
        }
    },
    props: {
        name: {
            type: String,
            default() {
                return ''
            }
        },
        nick: {
            type: String,
            default() {
                return ''
            }
        },
        hp: {
            type: [String, Number],
            default() {
                return 0
            }
        },
        mana: {
            type: [String, Number],
            default() {
                return 0
            }
        }
    }
}
</script>
<style scoped>
    .my-class {
        display: flex;
        justify-content: space-between;
    }
    .margin-bottom {
        margin-bottom: 1rem;
    }
</style>