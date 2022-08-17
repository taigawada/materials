<template>
    <div id="app">
        <SimpleTabs :tabs="tabs" :selected="tabSelected" @change="handleTabSelect" />
        <h1>Playground</h1>
        <p>buttons</p>
        <SimpleButton primary :disabled="disabled" :loading="loading" @click="handleButtonClick"> ボタン </SimpleButton>
        <p>Actions</p>
        <SimpleActions :open="actionsOpen" :actions="actions" @click="actionsOpenToggle" @close="onClose">
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
            <SimpleCheckbox label="生徒の端末に即反映する" :value="checked" @change="handleChecked" />
            <div style="text-align: left">
                <SimpleSelector
                    :value="selectRef"
                    :items="selectItems"
                    caption="クラスを選択"
                    @change="handleSelectChange"
                />
            </div>
        </SimpleCard>
        <p>Banner</p>
        <SimpleBanner style="width: 40%; margin: 0 auto" title="今日までの提出物" buttonLabel="確認" @action="action">
            <b>百マス計算</b>
        </SimpleBanner>
        <p>Tags, Combobox</p>
        <SimpleStack>
            <template #default="style">
                <SimpleTag
                    v-for="(item, index) in comboSelected"
                    :key="item + index"
                    :style="style.spacing"
                    @remove="handleRemoveItem(item)"
                >
                    {{ item }}
                </SimpleTag>
            </template>
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
            @remove="comboFieldRemove"
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
            @mainAction="modalMainAction"
            @subAction="handleDestroy"
            @destroy="handleDestroy"
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
        <p>WeeklySelector & Calender</p>
        <div>
            <WeeklySelector
                :weekValue="weekState.week"
                @change="changeWeek"
                @addWeek="changeWeek"
                @delWeek="changeWeek"
            />
        </div>
        <div style="width: 40%; margin: 0 auto">
            <SimpleCalender :highLights="weekState.week"></SimpleCalender>
        </div>
        <SimpleCard style="width: 30%; margin: 0 auto">
            <p>date picker % time picker</p>
            <SimpleDatePicker style="margin: 0 auto"></SimpleDatePicker>
            <SimpleTimePicker
                style="margin: 0 auto"
                :time="timePickerValue"
                @change="handleTimePickerChange"
            ></SimpleTimePicker>
            <p>datetime picker</p>
            <SimpleDateTimePicker
                style="margin: 0 auto"
                allowPast
                :time="datetimePickerValue"
                @change="handleDateTimePickerChange"
            ></SimpleDateTimePicker>
        </SimpleCard>
        <div style="height: 800px"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue-demi';
import SimpleButton from './components/SimpleButton/SimpleButton.vue';
import SimpleTabs from './components/SimpleTabs/SimpleTabs.vue';
import SimpleActions from './components/SimpleActions/SimpleActions.vue';
import SimpleCheckbox from './components/SimpleCheckbox/SimpleCheckbox.vue';
import SimpleBanner from './components/SimpleBanner/SimpleBanner.vue';
import SimpleInput from './components/SimpleInput/SimpleInput.vue';
import SimpleCard from './components/SimpleCard/SimpleCard.vue';
import SimpleTag from './components/SimpleTag/SimpleTag.vue';
import SimpleModal from './components/SimpleModal/SimpleModal.vue';
import SimpleSelector from './components/SimpleSelector/SimpleSelector.vue';
import WeeklySelector from './components/WeeklySelector/WeeklySelector.vue';
import SimpleCombobox from './components/SimpleCombobox/SimpleCombobox.vue';
import SimpleStack from './components/SimpleStack/SimpleStack.vue';
import SimpleDatePicker from './components/SImpleDatePicker/SimpleDatePicker.vue';
import SimpleCalender from './components/SimpleCalender/SimpleCalender.vue';
import SimpleTimePicker from './components/SimpleTimePicker/SimpleTimePicker.vue';
import SimpleDateTimePicker from './components/SimpleDateTimePicker/SimpleDateTimePicker.vue';

import { weekBoolean, monthBoolean, TimeObject } from './types/types';
interface WeekState {
    week: monthBoolean;
}
const sleep = (waitTime: number) => new Promise((resolve) => setTimeout(resolve, waitTime));

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
        SimpleTimePicker,
        SimpleDateTimePicker,
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
                helpText: '1年A組の全生徒を対象にします。',
            },
            {
                value: '1-B',
                label: '1年B組',
                helpText: '1年B組の全生徒を対象にします。',
            },
            {
                value: '1-C',
                label: '1年C組',
                helpText: '1年C組の全生徒を対象にします。',
            },
            {
                value: '1-D',
                label: '1年D組',
                helpText: '1年D組の全生徒を対象にします。',
            },
            {
                value: '1-E',
                label: '1年E組',
                helpText: '1年E組の全生徒を対象にします。',
            },
        ];
        // Modal
        const modalOpen = ref(false);
        const handleModalOpen = () => {
            modalOpen.value = true;
        };
        const handleDestroy = () => {
            modalOpen.value = !modalOpen.value;
        };
        const modalMainAction = () => {
            console.log('mainAction');
        };
        // WeeklySelector
        const weekState = reactive<WeekState>({
            week: [[false, false, false, false, false, false, false]],
        });
        const changeWeek = (newValue: weekBoolean[]) => {
            weekState.week = newValue;
        };
        // Tags, Combobox
        const comboField = ref('');
        const comboFieldChange = (newValue: string) => {
            comboField.value = newValue;
        };
        const comboFieldRemove = () => {
            comboField.value = '';
        };
        const comboItems = ref(['1年A組', '1年B組', '1年C組', '1年D組', '1年E組']);
        const comboSelected = ref<string[]>(['1年A組']);
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
        // SmoothPIcker
        const smoothPickerSelectItem = ref<number | string>();
        const handleSmoothPickerChange = (selected: number | string) => {
            smoothPickerSelectItem.value = selected;
        };
        // time & date picker
        const nowDate = new Date();
        const timePickerValue: TimeObject = {
            meridiem: null, // nowDate.getHours() < 12 ? '午前' : '午後',
            hours: nowDate.getHours(),
            minutes: nowDate.getMinutes(),
        };
        const handleTimePickerChange = (newValue: TimeObject) => {
            timePickerValue.meridiem = newValue.meridiem;
            timePickerValue.hours = newValue.hours;
            timePickerValue.minutes = newValue.minutes;
        };
        const datetimePickerValue: TimeObject = {
            meridiem: nowDate.getHours() < 12 ? '午前' : '午後',
            hours: nowDate.getHours(),
            minutes: nowDate.getMinutes(),
        };
        const handleDateTimePickerChange = (newValue: TimeObject) => {
            timePickerValue.meridiem = newValue.meridiem;
            timePickerValue.hours = newValue.hours;
            timePickerValue.minutes = newValue.minutes;
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
            comboFieldRemove,
            handleTextFieldRemove,
            selectRef,
            handleSelectChange,
            selectItems,
            modalOpen,
            handleModalOpen,
            handleDestroy,
            modalMainAction,
            weekState,
            changeWeek,
            comboSelected,
            comboField,
            comboFieldChange,
            comboItems,
            handleAddItems,
            handleRemoveItem,
            comboSelectedChange,
            smoothPickerSelectItem,
            handleSmoothPickerChange,
            timePickerValue,
            handleTimePickerChange,
            datetimePickerValue,
            handleDateTimePickerChange,
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
