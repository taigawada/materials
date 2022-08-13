<template>
    <div class="loader" :style="styles"></div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from 'vue-demi';
type Size = 'tiny' | 'normal' | 'large';
export default defineComponent({
    props: {
        size: {
            type: String as PropType<Size>,
            default: 'normal',
            required: false,
        },
        color: {
            type: Array as PropType<number[]>,
            default: () => [255, 194, 85],
            required: false,
        },
    },
    setup(props) {
        const styles = computed(() => {
            let size = '2.5em';
            if (props.size === 'tiny') {
                size = '1.5em';
            } else if (props.size === 'large') {
                size = '5em';
            } else {
                size = '2.5em';
            }
            let borderWeight = '0.4em';
            if (props.size === 'tiny') {
                borderWeight = '0.2em';
            } else if (props.size === 'large') {
                borderWeight = '0.5em';
            } else {
                borderWeight = '0.4em';
            }
            return {
                '--spinner-color': `rgb(${props.color[0]}, ${props.color[1]}, ${props.color[2]})`,
                '--spinner-color-alpha': `rgba(${props.color[0]}, ${props.color[1]}, ${props.color[2]}, 0.2)`,
                '--spinner-size': size,
                '--spinner-border-weight': borderWeight,
            };
        });
        return {
            styles,
        };
    },
});
</script>
<style scoped>
.loader,
.loader:after {
    border-radius: 50%;
    width: var(--spinner-size);
    height: var(--spinner-size);
}
.loader {
    display: inline-block;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: var(--spinner-border-weight) solid var(--spinner-color-alpha);
    border-right: var(--spinner-border-weight) solid var(--spinner-color-alpha);
    border-bottom: var(--spinner-border-weight) solid var(--spinner-color-alpha);
    border-left: var(--spinner-border-weight) solid var(--spinner-color);
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: rotateAnime 0.7s infinite linear;
    animation: rotateAnim 0.7s infinite linear;
}
@-webkit-keyframes rotateAnim {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes rotateAnim {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>
