<template>
    <div ref="thisComponent" class="base">
        <a
            ref="activator"
            class="activator"
            :class="{
                entered: isEntered,
            }"
            @click="onClick"
            @mouseenter="mouseenter"
            @mouseleave="mouseleave"
            @mousedown="mousedown"
            @mouseup="mouseup"
        >
            <a class="activator-text">
                <slot></slot>
            </a>
            <ArrowDown style="width: 16px" />
        </a>
        <div v-if="open" class="popover" :style="parentWidth">
            <div v-for="(action, index) in actions" :key="action.label + index" class="item" @click="action.onAction">
                {{ action.label }}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, onMounted, watchEffect, PropType } from 'vue-demi';
import { ArrowDown } from '@simple-education/icons';
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
        const thisComponent = ref();
        const closeActions = (event: Event) => {
            const el = thisComponent.value;
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
        const activatorWidth = ref('');
        onMounted(() => {
            const activatorRect = activator.value!.getBoundingClientRect();
            activatorWidth.value = activatorRect!.width + 'px';
        });
        const parentWidth = computed(() => ({
            '--parent-width': `${activatorWidth.value}`,
        }));
        return {
            onClick,
            isEntered,
            mousedown,
            mouseup,
            mouseenter,
            mouseleave,
            thisComponent,
            activator,
            activatorWidth,
            parentWidth,
            ArrowDown,
        };
    },
});
</script>
<style scoped lang="scss">
@use '~/@simple-education/tokens/stylesheet.scss' as *;
.base {
    display: inline-flex;
}
.activator {
    display: inline-flex;
    align-items: center;
    background: $surface;
    border: solid 1px $border;
    border-radius: $border-radius-1;
    text-decoration: none;
    padding: $space-2 $space-3;
    cursor: pointer;
}
.activator-text {
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
.popover::before {
    content: '';
    border: 10px solid transparent;
    border-bottom: 10px solid #ffffff;
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
}
.popover {
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
.item {
    margin: $space-2;
    padding: $space-2;
    cursor: pointer;
}
.item:hover {
    background: rgba(0, 0, 0, 0.05);
}
</style>
