export const rootBaseName = '/aluplas-granules-counter';

export const enum AppRoute {
  ROOT = '/',
  SETTINGS = '/settings',
  INFORMATION = '/information',
  GRANULATES_PAGE = '/granulates',
  GRANULATES_COUNTER = '/granulates/:UNID',
  GRANULATES_COUNTER_CONTAINER = 'container',
  GRANULATES_COUNTER_VOREK = 'vorek',
}

export enum ComponentsTexts {
  ROOT_PAGE_TITLE = 'Strona główna',
  OVERVIEW_PAGE_TITLE = 'Przegląd',
  GRANULATES_COUNTER_PAGE_TITLE = 'licznik granulatów',

  GRANULATES_COUNTER_VOREK_NAME = 'Worki',
  GRANULATES_COUNTER_BASIC_NAME = 'Licznik',
  GRANULATES_COUNTER_CONTAINER_NAME = 'Kontenery',

  GRANULATES_COUNTER_CONTAINER_ADDED_AMOUNT_TITLE = 'Jeden kontener - ',
  GRANULATES_COUNTER_VOREK_ADDED_AMOUNT_TITLE = 'Jedno kliknięcie +',

  GRANULATES_COUNTER_NAME = 'granulaty',
  GRANULATES_COUNTER_ADD_BUTTON = 'Dodaj',
  GRANULATES_COUNTER_PLUS_BUTTON = 'Plus',
  GRANULATES_COUNTER_MINUS_BUTTON = 'Minus',

  SETTING_SAVE = 'Zapisz ustawienia',
  SETTING_RESET_COUNTER_DATA = 'Usunąć dane licznika',

  SETTING_GRANULATES_TITLE = 'Ustawienia granulaty',
  SETTING_GRANULATES_VOREK_INPUT = 'Waga jednego worka / KG',
  SETTING_GRANULATES_CONTAINER_INPUT = 'Waga jednego kontenera / KG',

  REMOVE_CANCEL = 'Odwołaj',
  REMOVE_CONFIRM = 'Usunąć wybrane dane',
  REMOVE_CLOSE = 'Zamknij powiadomienie',
}

//this vars used inside store and settings inputs values! Dont delet or change!
export enum GranulatesSettingsNames {
  VOREK_WEIGHT = 'basicVorekWeight',
  CONTAINER_WEIGHT = 'basicContainerWeight',
}

export enum ApplicationStorageApiNames {
  GRANULATES_STORAGE = 'granulates',
}

export enum GranulatesLogsNames {
  CONTAINER = 'container',
  VOREK = 'vorek',
  COUNTER = 'counter',
}

export const GranulatesLogsTitleNames: {[propName: string]: string} = {
  [GranulatesLogsNames.CONTAINER]: 'Kontainer',
  [GranulatesLogsNames.VOREK]: 'Worek',
  [GranulatesLogsNames.COUNTER]: 'Licznik',
}
