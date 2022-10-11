<template>
    <div id="app">
        <SimpleTabs :tabs="tabs" :selected="tabSelected" @change="handleTabSelect" />
        <h1>Playground</h1>
        <SimpleSkeleton type="text" :lines="5" />
        <SimpleSkeleton :size="{ width: '72px', height: '40px' }" />
        <p>Actions</p>
        <SimpleActions :open="actionsOpen" :actions="actions" @click:activator="actionsOpenToggle" @close="onClose">
            その他の操作
        </SimpleActions>
        <p>Input, Checkbox & Card</p>
        <SimpleCard
            width="50%"
            :mainAction="{
                label: '追加',
                onAction: () => (isFocus = !isFocus),
            }"
            :subAction="{
                label: 'キャンセル',
            }"
            @subAction="handleDestroy"
        >
            <div style="padding: 30px">
                <p>{{ fieldvalue }}</p>
                <SimpleInput
                    type="text"
                    :value="fieldvalue"
                    caption="生徒氏名"
                    placeholder="名前を入力してください"
                    :autofocus="isFocus"
                    remove
                    @change="handleFieldChange"
                    @remove="handleTextFieldRemove"
                />
                <div style="text-align: left">
                    <SimpleSelector
                        :value="selectRef"
                        :items="selectItems"
                        caption="クラスを選択"
                        @change="handleSelectChange"
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
                        @change="handleSelectChange"
                    />
                </div>
            </div>
        </SimpleCard>
        <p>Resource List</p>
        <p>buttons</p>
        <SimpleButton critical :icon="ArrowDown" :disabled="disabled" :loading="loading" @click="handleButtonClick">
            プレビュー
        </SimpleButton>
        <div style="height: 20px"></div>
        <div style="width: 40%; margin: 0 auto">
            <SimpleResourceList
                :items="resourceItems"
                :select="true"
                :mainAction="{
                    label: '選択解除',
                    onAction: handleCardOnMainAction,
                }"
                :multiActions="actions"
                :selectedItems="resourceListSelected"
                :weight="[2, 2, 1]"
                :loading="loading"
                @change="handleResourceListChange"
            >
                <template #header>
                    <ResourceItem distribution="left" sort :asc="idOrder" @sort="handleResourceSortById">
                        id
                    </ResourceItem>
                    <ResourceItem>name</ResourceItem>
                </template>
                <template #data="render">
                    <ResourceItem :distribution="loading ? 'center' : 'left'">
                        <component :is="loading ? 'SimpleSkeleton' : 'span'" type="text" display="inline">{{
                            render.item.id
                        }}</component>
                    </ResourceItem>
                    <ResourceItem>
                        <component :is="loading ? 'SimpleSkeleton' : 'span'" type="text" display="inline">{{
                            render.item.name
                        }}</component>
                    </ResourceItem>
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
                    dark
                    @remove="handleRemoveItem(item)"
                >
                    {{ item }}
                </SimpleTag>
            </template>
        </SimpleStack>
        <p>Modal</p>
        <SimpleButton primary @click="handleModalOpen"> 開く </SimpleButton>
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
                @change="handleFieldChange"
                @remove="handleTextFieldRemove"
            />
        </SimpleModal>
        <p>WeeklySelector & Calender</p>
        <div>
            <WeeklySelector
                :isEachWeek="isEachWeek"
                :weekValue="weekState"
                @change="changeWeek"
                @changeEach:day="isEachWeek = false"
                @changeEach:week="isEachWeek = true"
            />
        </div>
        <div style="width: 40%; margin: 0 auto">
            <SimpleCalender :highLights="weekState" hiddenHighLightInHolidays></SimpleCalender>
        </div>
        <div style="margin-top: 30px">
            <SimpleCard style="width: 30%; margin: 0 auto">
                <p>date picker & time picker</p>
                <SimpleDatePicker
                    style="margin: 0 auto"
                    :inputValue="dateInputValue"
                    @change="handleDateChange"
                ></SimpleDatePicker>
                <SimpleTimePicker
                    style="margin: 0 auto"
                    :inputValue="timeInputValue"
                    @change="handleTimeChange"
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
                    @change="handleDatetimeChange"
                ></SimpleDateTimePicker>
            </SimpleCard>
        </div>
        <SimpleCombobox
            style="width: 20%; margin: 0 auto"
            :fieldValue="comboField"
            :items="comboItems"
            :selectedItems="comboSelected"
            allowAdd
            remove
            multiple
            search
            error="エラーです"
            @fieldChange="comboFieldChange"
            @remove="comboFieldRemove"
            @add="handleAddItems"
            @change="comboSelectedChange"
        >
        </SimpleCombobox>
        <SimpleButton primary @click="handleToastActive1">Toast1</SimpleButton>
        <SimpleButton primary @click="handleToastActive2">Toast2</SimpleButton>
        <SimpleToast :active="toastActive1" content="保存しました1" @dismiss="handleToastDismiss1" />
        <SimpleToast
            :active="toastActive2"
            content="保存しました2"
            :action="{ label: '元に戻す', onAction: handleToastDismiss1 }"
            @dismiss="handleToastDismiss2"
        />

        <div style="height: 800px"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch, inject } from 'vue-demi';
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
import SimpleSkeleton from './components/SimpleSkeleton/SimpleSkeleton';
import SimpleIcon from './components/SimpleIcon/SimpleIcon';
import SimpleSaveBar from './components/SimpleSaveBar/SimpleSaveBar';
import SimpleToast from './components/SimpleToast/SimpleToast';
import SimpleProgressBar from './components/SimpleProgressBar/SimpleProgressBar';

import { ThreePointLeader, ArrowDown } from '@simple-education-dev/icons';
import { CyclePeriod } from './components/WeeklySelector/useWeeklySelector';
import { sortItems } from './utilities/utils';
import { format } from 'date-fns';

import { usePreferredDark } from '@vueuse/core';
import { switchThemeKey } from './utilities/install';

import { ToastTimerKey } from './components/SimpleToast/useToastStore';

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
        SimpleSkeleton,
        SimpleIcon,
        SimpleSaveBar,
        SimpleToast,
        SimpleProgressBar,
    },
    setup() {
        const toastTimerStore = inject(ToastTimerKey);
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
        const isFocus = ref(false);
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
        const weekState = ref<CyclePeriod[]>([]);
        const changeWeek = (newValue: CyclePeriod[]) => {
            weekState.value = newValue;
        };
        const isEachWeek = ref(true);
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
        const handleResourceSortById = (order: boolean) => {
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
        const isDark = usePreferredDark();
        const switchTheme = inject(switchThemeKey);
        watch(isDark, () => {
            if (switchTheme) {
                switchTheme(isDark.value ? 'dark' : 'light');
            }
        });
        // Toast
        const toastActive1 = ref(false);
        const handleToastActive1 = async () => {
            toastActive1.value = !toastActive1.value;
        };
        const handleToastDismiss1 = async () => {
            toastActive1.value = false;
        };
        const toastActive2 = ref(false);
        const handleToastActive2 = async () => {
            toastActive2.value = !toastActive2.value;
        };
        const handleToastDismiss2 = async () => {
            toastActive2.value = false;
        };
        return {
            toastTimerStore,
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
            isFocus,
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
            isEachWeek,
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
            toastActive1,
            handleToastActive1,
            handleToastDismiss1,
            toastActive2,
            handleToastActive2,
            handleToastDismiss2,

            ThreePointLeader,
            ArrowDown,
        };
    },
});
</script>
<style lang="scss">
body {
    background: var(--global-background);
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--text);
}
.other-operation-actions-container {
    padding: var(--space-1);
}
.other-operation-action {
    $action-height: 40px;
    height: $action-height;
    line-height: $action-height;
    padding: 0 var(--space-5);
}
.other-operation-action:hover {
    background: var(--hovered);
}
.to-gabbage-text {
    color: var(--text-error);
}
</style>
