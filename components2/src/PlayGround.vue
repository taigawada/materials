<template>
    <div id="app">
        <SimpleTabs
            :tabs="tabs"
            :selected="tabSelected"
            @change="handleTabSelect"
        />
        <h1>Playground</h1>
        <p>buttons</p>
        <SimpleButton
            primary
            :disabled="disabled"
            :loading="loading"
            @click="handleButtonClick"
        >
            ボタン
        </SimpleButton>
        <p>Actions</p>
        <SimpleActions
            :open="actionsOpen"
            :actions="actions"
            @click="actionsOpenToggle"
            @close="onClose"
        >
            その他の操作
        </SimpleActions>
        <p>Input, Checkbox & Card</p>
        <SimpleCard
            width="50%"
            :mainAction="{
                text: '追加',
            }"
            :subAction="{
                text: 'キャンセル',
            }"
        >
            <SimpleInput
                :value="fieldvalue"
                caption="生徒氏名"
                placeholder="名前を入力してください"
                remove
                @change:value="handleFieldChange"
                @remove="handleTextFieldRemove"
            />
            <SimpleCheckbox
                label="生徒の端末に即反映する"
                :value="checked"
                @change="handleChecked"
            />
            <SimpleSelector
                :value="selectRef"
                :items="selectItems"
                @change="handleSelectChange"
            />
        </SimpleCard>
        <p>Banner</p>
        <SimpleBanner
            style="width: 40%; margin: 0 auto"
            title="今日までの提出物"
            buttonLabel="確認"
            @action="action"
        >
            <b>百マス計算</b>
        </SimpleBanner>
        <p>Tags, Combobox</p>
        <SimpleStack>
            <SimpleTag
                v-for="(item, index) in comboSelected"
                :key="item + index"
                @remove="handleRemoveItem(item)"
            >
                {{ item }}
            </SimpleTag>
        </SimpleStack>
        <SimpleCombobox
            style="width: 40%; margin: 0 auto"
            :fieldValue="comboField"
            :items="comboItems"
            :selectedItems="comboSelected"
            allowAdd
            remove
            multiple
            @fieldChange="comboFieldChange"
            @add:item="handleAddItems"
            @change:selected="comboSelectedChange"
        >
        </SimpleCombobox>
        <p>Modal</p>
        <SimpleButton normal @click="handleModalOpen"> 開く </SimpleButton>
        <SimpleModal
            title="this is modal"
            :mainAction="{
                text: 'ダウンロード',
            }"
            :subAction="{
                text: 'キャンセル',
            }"
            :open="modalOpen"
            @subAction="handleModalOpen"
            @destroy="handleModalOpen"
        >
            <SimpleInput
                :value="fieldvalue"
                caption="生徒氏名"
                placeholder="名前を入力してください"
                remove
                @change:value="handleFieldChange"
                @remove="handleTextFieldRemove"
            />
        </SimpleModal>
        <p>WeeklySelector</p>
        <div>
            <WeeklySelector
                :weekValue="weekState.week"
                @change="changeWeek"
                @addWeek="changeWeek"
                @delWeek="changeWeek"
            />
        </div>
        <div>
            <SimpleCalender :highLights="weekState.week"></SimpleCalender>
        </div>
        <p>date picker</p>
        <SimpleDatePicker style="width: 20%; margin: 0 auto">
        </SimpleDatePicker>
        <div style="height: 800px"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from '@vue/composition-api';
import SimpleButton from './SimpleButton/SimpleButton.vue';
import SimpleTabs from './SimpleTabs/SimpleTabs.vue';
import SimpleActions from './SimpleActions/SimpleActions.vue';
import SimpleCheckbox from './SimpleCheckbox/SimpleCheckbox.vue';
import SimpleBanner from './SimpleBanner/SimpleBanner.vue';
import SimpleInput from './SimpleInput/SimpleInput.vue';
import SimpleCard from './SimpleCard/SimpleCard.vue';
import SimpleTag from './SimpleTag/SimpleTag.vue';
import SimpleModal from './SimpleModal/SimpleModal.vue';
import SimpleSelector from './SimpleSelector/SimpleSelector.vue';
import WeeklySelector from './WeeklySelector/WeeklySelector.vue';
import SimpleCombobox from './SimpleCombobox/SimpleCombobox.vue';
import SimpleStack from './SimpleStack/SimpleStack.vue';
import SimpleDatePicker from './SImpleDatePicker/SimpleDatePicker.vue';
import SimpleCalender from './SimpleCalender/SimpleCalender.vue';

const sleep = (waitTime: number) =>
    new Promise((resolve) => setTimeout(resolve, waitTime));

export default defineComponent({
    name: 'App',
    components: {
        SimpleButton,
        SimpleActions,
        SimpleTabs,
        SimpleBanner,
        SimpleCheckbox,
        SimpleInput,
        SimpleCard,
        SimpleTag,
        SimpleModal,
        SimpleSelector,
        WeeklySelector,
        SimpleCombobox,
        SimpleStack,
        SimpleDatePicker,
        SimpleCalender,
    },
    setup() {
        // SimpleButton
        const disabled = ref(false);
        const loading = ref(false);
        const handleButtonClick = async () => {
            loading.value = true;
            await sleep(1000);
            loading.value = false;
        };
        // SimpleTabs
        const tabs = [
            {
                label: '提出物管理',
                id: 'teacher-top',
            },
            {
                label: '設定',
                id: 'teacher-settings',
            },
        ];
        const tabSelected = ref(0);
        const handleTabSelect = (select: number) => {
            tabSelected.value = select;
        };
        // SimpleActions
        const actionsOpen = ref(false);
        const actions = [
            {
                label: 'Excel形式でエクスポート',
                onAction: () => console.log('Excel形式でエクスポート'),
            },
            {
                label: 'CSV形式でエクスポート',
                onAction: () => console.log('CSV形式でエクスポート'),
            },
        ];
        const actionsOpenToggle = () => {
            actionsOpen.value = !actionsOpen.value;
        };
        const onClose = () => {
            actionsOpen.value = false;
        };
        const fieldvalue = ref('');
        const handleFieldChange = (value: string) => {
            fieldvalue.value = value;
        };
        const handleTextFieldRemove = () => {
            fieldvalue.value = '';
        };
        // Banner
        const action = () => {
            console.log('todo=>確認');
        };
        // Checkbox
        const checked = ref(false);
        const handleChecked = (value: boolean) => {
            checked.value = value;
        };
        // Selector
        const selectRef = ref('');
        const handleSelectChange = (value: string) => {
            selectRef.value = value;
        };
        const selectItems = [
            {
                value: '1-A',
                label: '1年A組',
            },
            {
                value: '1-B',
                label: '1年B組',
            },
            {
                value: '1-C',
                label: '1年C組',
            },
            {
                value: '1-D',
                label: '1年D組',
            },
            {
                value: '1-E',
                label: '1年E組',
            },
        ];
        // Modal
        const modalOpen = ref(false);
        const handleModalOpen = () => {
            modalOpen.value = !modalOpen.value;
        };
        // WeeklySelector
        const weekState = reactive({
            week: [[false, false, false, false, false, false, false]],
        });
        const changeWeek = (newValue: boolean[][]) => {
            weekState.week = newValue;
        };
        // Tags, Combobox
        const comboField = ref('');
        const comboFieldChange = (newValue: string) => {
            comboField.value = newValue;
        };
        const comboItems = ref([
            '1年A組',
            '1年B組',
            '1年C組',
            '1年D組',
            '1年E組',
        ]);
        const comboSelected = ref<string[]>([]);
        const handleAddItems = (item: string) => {
            comboSelected.value.push(item);
            comboItems.value.push(item);
        };
        const handleRemoveItem = (item: string) => {
            let currentSelect = comboSelected.value;
            currentSelect.splice(currentSelect.indexOf(item), 1);
        };
        const comboSelectedChange = (selected: Array<string>) => {
            comboSelected.value = selected;
        };
        return {
            disabled,
            loading,
            handleButtonClick,
            tabs,
            tabSelected,
            handleTabSelect,
            actions,
            actionsOpen,
            actionsOpenToggle,
            onClose,
            action,
            checked,
            handleChecked,
            fieldvalue,
            handleFieldChange,
            handleTextFieldRemove,
            selectRef,
            handleSelectChange,
            selectItems,
            modalOpen,
            handleModalOpen,
            weekState,
            changeWeek,
            comboSelected,
            comboField,
            comboFieldChange,
            comboItems,
            handleAddItems,
            handleRemoveItem,
            comboSelectedChange,
        };
    },
});
</script>
<style>
body {
    background: #f4f4f4;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
