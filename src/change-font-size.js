import { loadFromLS } from './js/storage';

import { STORAGE_KEYS } from './js/constants';

import { refs } from './js/refs';
import { onReaderToolsClick } from './js/handlers';
import { apply } from './js/helpers';

// TODO: Задача 9.1

// TODO: Кнопки A− і A + змінюють розмір тексту статті в межах 14–26 px.
// TODO: Обраний розмір зберігається між візитами.
// TODO:
// TODO: Що зробити:
// TODO: Прочитати збережений розмір або взяти 18 за замовчуванням.
// TODO: Функція apply застосовує розмір до статті, оновлює підпис і зберігає значення.
// TODO: Делегуванням на панелі ловити кліки по кнопках з data-step.
// TODO: Обмежити розмір мінімумом і максимумом.
const size = Number(loadFromLS(STORAGE_KEYS.FONT_SIZE)) || 18;

refs.readerTools.addEventListener('click', onReaderToolsClick);

apply(size);
