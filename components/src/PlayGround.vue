<template>
    <div id="app">
        <SimpleTabs :tabs="tabs" :selected="tabSelected" @change="handleTabSelect" />
        <h1>Playground</h1>
        <p>buttons</p>
        <SimpleButton primary :disabled="disabled" :loading="loading" @click="handleButtonClick"> ボタン </SimpleButton>
        <p>Actions</p>
        <SimpleActions :open="actionsOpen" :actions="actions" @click:activator="actionsOpenToggle" @close="onClose">
            その他の操作
        </SimpleActions>
        <p>Input, Checkbox & Card</p>
        <SimpleCard
            width="50%"
            :mainAction="{
                text: '追加',
                onAction: handleCardOnMainAction,
            }"
            :subAction="{
                text: 'キャンセル',
            }"
            @subAction="handleDestroy"
        >
            <SimpleInput
                :value="fieldvalue"
                caption="生徒氏名"
                placeholder="名前を入力してください"
                remove
                @change:value="handleFieldChange"
                @remove="handleTextFieldRemove"
            />
            <div style="text-align: left">
                <SimpleSelector
                    :value="selectRef"
                    :items="selectItems"
                    caption="クラスを選択"
                    @change:select="handleSelectChange"
                />
            </div>
            <div style="text-align: left">
                <SimpleCheckbox label="生徒の端末に即反映する" :value="checked" @change="handleChecked" />
            </div>
            <div style="text-align: left">
                <SimpleSelector
                    radio
                    :value="selectRef"
                    :items="selectItems"
                    caption="クラスを選択"
                    @change:select="handleSelectChange"
                />
            </div>
        </SimpleCard>
        <p>Resource List</p>
        <p>{{ resourceItems }}</p>
        <div style="width: 40%; margin: 0 auto">
            <SimpleResourceList
                :items="resourceItems"
                select
                :mainAction="{
                    label: '選択解除',
                    onAction: handleCardOnMainAction,
                }"
                :multiActions="actions"
                :selectedItems="resourceListSelected"
                :weight="[1, 1]"
                @change="handleResourceListChange"
            >
                <template #header>
                    <ResourceItem sort :asc="idOrder" @sort="handleResourceSortById">id</ResourceItem>
                    <ResourceItem>name</ResourceItem>
                </template>
                <template #data="render">
                    <ResourceItem>{{ render.item.id }}</ResourceItem>
                    <ResourceItem>{{ render.item.name }}</ResourceItem>
                </template>
                <template #pagination>
                    <SimplePagination
                        :length="19"
                        :current="currentSelectPage"
                        @next="handleNext"
                        @previous="handlePrevious"
                        @change="handlePageChange"
                    ></SimplePagination>
                </template>
            </SimpleResourceList>
        </div>
        <p>Banner</p>
        <SimpleBanner style="width: 40%; margin: 0 auto" title="今日までの提出物" buttonLabel="確認" @action="action">
            <span style="font-weight: 500">百マス計算</span>
        </SimpleBanner>
        <p>Smooth Picker</p>
        <p>selected: {{ smoothPickerSelected }}</p>
        <SimpleSmoothPicker
            :items="smoothPickerItems"
            :selected="smoothPickerSelected"
            @change="handleSmoothPickerChange"
        ></SimpleSmoothPicker>
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
            style="width: 20%; margin: 0 auto"
            :fieldValue="comboField"
            :items="comboItems"
            :selectedItems="comboSelected"
            allowAdd
            remove
            multiple
            search
            @fieldChange="comboFieldChange"
            @remove="comboFieldRemove"
            @add:item="handleAddItems"
            @change:select="comboSelectedChange"
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
                @change:week="changeWeek"
                @add:week="changeWeek"
                @del:week="changeWeek"
            />
        </div>
        <div style="width: 40%; margin: 0 auto">
            <SimpleCalender :highLights="weekState.week"></SimpleCalender>
        </div>
        <div style="margin-top: 30px">
            <SimpleCard style="width: 30%; margin: 0 auto">
                <p>date picker & time picker</p>
                <SimpleDatePicker
                    style="margin: 0 auto"
                    :inputValue="dateInputValue"
                    @change:date="handleDateChange"
                ></SimpleDatePicker>
                <SimpleTimePicker
                    style="margin: 0 auto"
                    :inputValue="timeInputValue"
                    @change:time="handleTimeChange"
                ></SimpleTimePicker>
            </SimpleCard>
        </div>
        <div style="margin-top: 30px">
            <SimpleCard style="width: 30%; margin: 0 auto">
                <p>datetime picker</p>
                <SimpleDateTimePicker
                    style="margin: 0 auto"
                    allowPast
                    :inputValue="datetimeInputValue"
                    @change:datetime="handleDatetimeChange"
                ></SimpleDateTimePicker>
            </SimpleCard>
        </div>
        <div style="height: 800px"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue-demi';
import SimpleButton from './components/SimpleButton/SimpleButton';
import SimpleTabs from './components/SimpleTabs/SimpleTabs';
import SimpleActions from './components/SimpleActions/SimpleActions';
import SimpleCheckbox from './components/SimpleCheckbox/SimpleCheckbox';
import SimpleBanner from './components/SimpleBanner/SimpleBanner';
import SimpleInput from './components/SimpleInput/SimpleInput';
import SimpleCard from './components/SimpleCard/SimpleCard';
import SimpleTag from './components/SimpleTag/SimpleTag';
import SimpleModal from './components/SimpleModal/SimpleModal';
import SimpleSelector from './components/SimpleSelector/SimpleSelector';
import SimpleSmoothPicker from './components/SimpleSmoothPicker/SimpleSmoothPicker';
import WeeklySelector from './components/WeeklySelector/WeeklySelector';
import SimpleCombobox from './components/SimpleCombobox/SimpleCombobox';
import SimpleStack from './components/SimpleStack/SimpleStack';
import SimpleDatePicker from './components/SimpleDatePicker/SimpleDatePicker';
import SimpleCalender from './components/SimpleCalender/SimpleCalender';
import SimpleTimePicker from './components/SimpleTimePicker/SimpleTimePicker';
import SimpleDateTimePicker from './components/SimpleDateTimePicker/SimpleDateTimePicker';
import SimpleResourceList from './components/SimpleResourceList/SimpleResourceList';
import ResourceItem from './components/ResourceItem/ResourceItem';
import SimplePagination from './components/SimplePagination/SimplePagination';

import { weekBoolean, monthBoolean } from './types/types';
import { sortItems } from './utils/utils';
import { format } from 'date-fns';
interface WeekState {
    week: monthBoolean;
}
const sleep = (waitTime: number) => new Promise((resolve) => setTimeout(resolve, waitTime));

export default defineComponent({
    name: 'App',
    components: {
        SimpleTabs,
        SimpleButton,
        SimpleActions,
        SimplePagination,
        SimpleBanner,
        SimpleCard,
        SimpleCheckbox,
        SimpleInput,
        SimpleSelector,
        SimpleStack,
        SimpleTag,
        SimpleCombobox,
        SimpleModal,
        SimpleSmoothPicker,
        WeeklySelector,
        SimpleCalender,
        SimpleResourceList,
        ResourceItem,
        SimpleTimePicker,
        SimpleDatePicker,
        SimpleDateTimePicker,
    },
    setup() {
        // SimpleButton
        const disabled = ref(false);
        const loading = ref(false);
        const handleButtonClick = async () => {
            console.log('clickParent');
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
            console.log('select');
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
        // Card
        const handleCardOnMainAction = () => {
            alert(`${fieldvalue.value}\n${checked.value}\n${selectRef.value}`);
        };
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
            console.log(selected);
            comboSelected.value = selected;
        };
        // Time Picker
        const timeInputValue = ref('');
        const handleTimeChange = (newValue: Date) => {
            timeInputValue.value = format(newValue, 'HH時mm分');
        };
        // Date Picker
        const dateInputValue = ref('');
        const handleDateChange = (newDate: Date) => {
            dateInputValue.value = format(newDate, 'yyyy年MM月dd日');
        };
        // Datetime Picker
        const datetimeInputValue = ref('');
        const handleDatetimeChange = (newDate: Date) => {
            datetimeInputValue.value = format(newDate, 'yyyy年MM月dd日HH時mm分');
        };
        // ResourceList
        const resourceItems = ref([
            {
                id: '#0001',
                name: 'taigawada',
            },
            {
                id: '#0002',
                name: 'niwasann',
            },
            {
                id: '#0003',
                name: 'naokihirata',
            },
        ]);
        const resourceListSelected = ref<string[]>([]);
        const handleResourceListChange = (newArray: string[]) => {
            resourceListSelected.value = newArray;
        };
        const idOrder = ref(true);
        const handleResourceSortById = (order) => {
            resourceItems.value.sort(sortItems('id', order ? 'asc' : 'desc'));
            idOrder.value = order;
        };
        // pagination
        const currentSelectPage = ref(0);
        const handleNext = () => currentSelectPage.value++;
        const handlePrevious = () => currentSelectPage.value--;
        const handlePageChange = (index: number) => {
            currentSelectPage.value = index;
        };
        // smooth picker
        const smoothPickerItems = [...new Array(100).keys()];
        const smoothPickerSelected = ref(0);
        const handleSmoothPickerChange = (newValue: number) => {
            smoothPickerSelected.value = newValue;
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
            handleCardOnMainAction,
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
            smoothPickerSelected,
            handleSmoothPickerChange,
            resourceItems,
            resourceListSelected,
            handleResourceListChange,
            idOrder,
            handleResourceSortById,
            currentSelectPage,
            handlePrevious,
            handleNext,
            handlePageChange,
            smoothPickerItems,
            timeInputValue,
            handleTimeChange,
            dateInputValue,
            handleDateChange,
            datetimeInputValue,
            handleDatetimeChange,
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
