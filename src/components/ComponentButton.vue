<template>
     <button
            type="button"
            @click="functionButton"
            >
            {{ titleButton }}
        </button>
</template>
<script>
export default {
    name: 'ComponentButton',
    props: {
        functionButton: {
            type: Function,
            default() {
                return () => console.log('Error button')
            }
        },
        titleButton: {
            type: String,
            default() {
                return ''
            }
        },
        className: {
            type: String,
            default() {
                return ''
            }
        },
    }
}
</script>