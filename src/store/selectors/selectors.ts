//types
import { RootState } from "../../types/store-types";
import { IGranulatesDataType, IGranulateItemType, IGranulatesSettingsType } from "../../types/data-types";

// GRANULATES SELECTROS
export const SelectorGetGranulatesState = (state: RootState): IGranulatesDataType => state.granulates.items;
export const SelectorGetCurrentGranulates = (UNID: number) => (state: RootState): IGranulateItemType => state.granulates.items[UNID];
export const SelectorGetGranulatesSettings = (state: RootState): IGranulatesSettingsType => state.granulates.granulatesSettings;
export const SelectorGetGranulatesSettingsVorekWeight = (state: RootState): number => state.granulates.granulatesSettings.basicVorekWeight;
export const SelectorGetGranulatesSettingsContainerWeight = (state: RootState): number => state.granulates.granulatesSettings.basicContainerWeight;
