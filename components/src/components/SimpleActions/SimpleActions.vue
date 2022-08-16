<template>
    <div ref="simpleActionComponentBase" class="simple-action_base">
        <a
            ref="activator"
            class="simple-action_activator"
            :class="{
                entered: isEntered,
            }"
            @click="onClick"
            @mouseenter="mouseenter"
            @mouseleave="mouseleave"
            @mousedown="mousedown"
            @mouseup="mouseup"
        >
            <a class="simple-action_activator-text">
                <slot></slot>
            </a>
            <ArrowDown style="width: 16px" />
        </a>
        <div v-if="open" class="simple-action_popover" :style="parentWidth">
            <div
                v-for="(action, index) in actions"
                :key="action.label + index"
                class="simple-action_action_content"
                @click="action.onAction"
            >
                {{ action.label }}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, watchEffect, PropType } from 'vue-demi';
import { useElementSize } from '@vueuse/core';
import { ArrowDown } from '@simple-education-dev/icons';
interface Actions {
    label: string;
    onAction: () => unknown;
}
export default defineComponent({
    components: {
        ArrowDown,
    },
    props: {
        open: Boolean,
        actions: {
            type: Array as PropType<Actions[]>,
            required: true,
        },
    },
    setup(props, context) {
        const onClick = () => {
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
        const simpleActionComponentBase = ref();
        const closeActions = (event: Event) => {
            const el = simpleActionComponentBase.value;
            if (!el.contains(event.target as HTMLElement)) {
                context.emit('close');
            }
        };
        watchEffect(() => {
            if (props.open === true) {
                document.addEventListener('click', closeActions);
            } else {
                document.removeEventListener('click', closeActions);
            }
        });
        const activator = ref<HTMLImageElement | null>(null);
        const { width } = useElementSize(activator);
        const parentWidth = computed(() => ({
            '--parent-width': String(width.value + 26) + 'px',
        }));
        return {
            onClick,
            isEntered,
            mousedown,
            mouseup,
            mouseenter,
            mouseleave,
            simpleActionComponentBase,
            activator,
            parentWidth,
            ArrowDown,
        };
    },
});
</script>
<style scoped lang="scss">
@use '@simple-education-dev/tokens/styles' as *;
.simple-action_base {
    display: inline-flex;
}
.simple-action_activator {
    display: inline-flex;
    align-items: center;
    background: $surface;
    box-sizing: border-box;
    border: solid 1px $border;
    border-radius: $border-radius-1;
    text-decoration: none;
    padding: $space-2 $space-3;
    cursor: pointer;
}
.simple-action_activator-text {
    color: $text;
    text-decoration: none;
    pointer-events: none;
    padding-right: $space-1;
}
.entered {
    cursor: pointer;
    text-decoration: none;
    background: $normal-hovered;
}
.simple-action_popover::before {
    content: '';
    border: 10px solid transparent;
    border-bottom: 10px solid $surface;
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
}
.simple-action_popover {
    position: absolute;
    display: inline-block;
    width: auto;
    height: auto;
    margin-top: 60px;
    background: #ffffff;
    box-shadow: $boxshadow;
    border-radius: $border-radius-1;
    transform: translateX(calc((var(--parent-width) - 100%) / 2));
}
.simple-action_action_content {
    margin: $space-1;
    padding: $space-2;
    cursor: pointer;
}
.simple-action_action_content:hover {
    background: rgba(0, 0, 0, 0.05);
}
</style>
