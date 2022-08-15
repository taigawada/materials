<template>
    <div class="simple-button_container">
        <!-- disabled -->
        <a
            v-if="disabled"
            :style="sizeToPixel"
            :class="{
                disablePrime: primary,
                disableNormal: normal,
                disablePlain: plain,
            }"
        >
            <a :class="{ textDisable: !plain }">
                <slot></slot>
            </a>
        </a>
        <!-- loading -->
        <a
            v-else-if="loading"
            :style="sizeToPixel"
            :class="{
                disablePrime: primary,
                disableNormal: normal,
                disablePlain: plain,
            }"
        >
            <a :class="{ textLoading: !plain }">
                <slot></slot>
            </a>
            <div v-show="!plain" class="simple-button_spinner">
                <SimpleSpinner size="normal" :color="spinnerColor" />
            </div>
        </a>
        <!-- primary button -->
        <a v-else-if="primary" class="base-prime" :style="sizeToPixel">
            <a
                class="wrapper-prime"
                :style="sizeToPixel"
                :href="url"
                :target="target"
                :class="{
                    enteredPrime: isEntered,
                }"
                @click="handleClick"
                @mouseenter="mouseenter"
                @mouseleave="mouseleave"
                @mousedown="mousedown"
                @mouseup="mouseup"
            >
                <a class="text-prime">
                    <slot></slot>
                </a>
            </a>
        </a>
        <!-- normal button -->
        <a
            v-else-if="normal"
            class="base-normal"
            :style="sizeToPixel"
            :class="{
                enteredNormal: isEntered,
            }"
            :href="url"
            :target="target"
            @click="handleClick"
            @mouseenter="mouseenter"
            @mouseleave="mouseleave"
            @mousedown="mousedown"
            @mouseup="mouseup"
        >
            <a class="text-normal">
                <slot></slot>
            </a>
        </a>
        <!-- plain button -->
        <a
            v-else-if="plain"
            class="base-plain"
            :class="{
                enteredPlain: isEntered,
            }"
            :href="url"
            :target="target"
            @click="handleClick"
            @mouseenter="mouseenter"
            @mouseleave="mouseleave"
            @mousedown="mousedown"
            @mouseup="mouseup"
        >
            <slot></slot>
        </a>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue-demi';
import SimpleSpinner from '../SimpleSpinner/SimpleSpinner.vue';

export default defineComponent({
    components: {
        SimpleSpinner,
    },
    props: {
        primary: {
            type: Boolean,
            required: false,
        },
        normal: {
            type: Boolean,
            required: false,
        },
        plain: {
            type: Boolean,
            required: false,
        },
        disabled: {
            type: Boolean,
            required: false,
        },
        loading: {
            type: Boolean,
            required: false,
        },
        url: {
            type: String,
            default: undefined,
            required: false,
        },
        external: {
            type: Boolean,
            required: false,
        },
        size: {
            type: Number,
            default: 10,
            required: false,
        },
    },
    setup(props, context) {
        const handleClick = () => {
            context.emit('click');
        };
        const isEntered = ref(false);
        const mousedown = (): void => {
            isEntered.value = true;
        };
        const mouseup = (): void => {
            isEntered.value = false;
        };
        const mouseenter = (): void => {
            isEntered.value = true;
        };
        const mouseleave = (): void => {
            isEntered.value = false;
        };
        const sizeToPixel = computed(() => ({
            '--props-size': `${props.size + 'px'}`,
        }));
        const target = computed(() => {
            if (props.external) {
                return '_blank';
            } else {
                return '_self';
            }
        });
        const spinnerColor = computed(() => {
            if (props.primary && !props.normal) {
                return [255, 255, 85];
            } else if (!props.primary && props.normal) {
                return [105, 105, 105];
            } else {
                return [255, 194, 85];
            }
        });
        return {
            handleClick,
            isEntered,
            mousedown,
            mouseup,
            mouseenter,
            mouseleave,
            sizeToPixel,
            target,
            spinnerColor,
        };
    },
});
</script>
<style scoped lang="scss">
@use '@simple-education-dev/tokens/styles' as *;
.simple-button_container {
    padding: 0 $space-1;
}
.base-prime {
    position: relative;
    background: $text-white;
    background: $primary-base;
    border-radius: $border-radius-1;
    text-decoration: none;
    margin-bottom: $space-05;
    padding-top: var(--props-size);
    padding-bottom: var(--props-size);
}
.wrapper-prime {
    position: relative;
    background: $primary;
    border-radius: $border-radius-1;
    text-decoration: none;
    padding-top: var(--props-size);
    padding-bottom: calc(var(--props-size) - 2px);
}
.text-prime {
    padding: $space-4 $space-4;
    color: $text-white;
    text-decoration: none;
    pointer-events: none;
}
.base-normal {
    color: $normal;
    border: solid 1px $border;
    border-radius: $border-radius-1;
    text-decoration: none;
    padding-top: calc(var(--props-size) - 1px);
    padding-bottom: calc(var(--props-size) - 1px);
    cursor: pointer;
}
.text-normal {
    padding: $space-4 $space-4;
    color: $text;
    text-decoration: none;
    pointer-events: none;
}
.base-plain {
    cursor: pointer;
    color: $plain;
    text-decoration: none;
}
.enteredPrime {
    cursor: pointer;
    text-decoration: none;
    background: $primary-hovered;
}
.enteredNormal {
    cursor: pointer;
    text-decoration: none;
    background: $normal-pressed;
}
.enteredPlain {
    cursor: pointer;
    text-decoration: none;
    color: $plain-hovered;
}
.disablePrime {
    position: relative;
    background: $primary-disabled;
    border-radius: $border-radius-1;
    text-decoration: none;
    pointer-events: none;
    padding-top: calc(var(--props-size) + 1px);
    padding-bottom: calc(var(--props-size) + 1px);
}
.disableNormal {
    position: relative;
    background: #dedede;
    border-radius: $border-radius-1;
    text-decoration: none;
    pointer-events: none;
    padding-top: calc(var(--props-size) + 1px);
    padding-bottom: calc(var(--props-size) + 1px);
    opacity: 0.6;
}
.disablePlain {
    color: $plain-disabled;
    pointer-events: none;
}
.textDisable {
    padding: 1em 1em;
    color: $text;
    text-decoration: none;
    pointer-events: none;
}
.textLoading {
    opacity: 0;
    padding: $space-4 $space-4;
    color: $text-white;
    text-decoration: none;
    pointer-events: none;
}
.simple-button_spinner {
    position: absolute;
    pointer-events: none;
    left: 50%;
    top: 57%;
    transform: translate(-50%, -50%);
}
</style>
