import { SIZES, STORAGE_KEYS } from './constants';
import { apply } from './helpers';
import { refs } from './refs';
import * as storageService from './storage';

export function onReaderToolsClick(event) {
  if (!event.target.matches('button[data-step]')) {
    return;
  }
  const { step } = event.target.dataset;
  const data =
    Number(storageService.loadFromLS(STORAGE_KEYS.FONT_SIZE)) + Number(step);
  if (data >= SIZES.MIN && data <= SIZES.MAX) {
    storageService.saveToLS(STORAGE_KEYS.FONT_SIZE, data);
    apply(data);
  }
}

export function onCloseBtnClick(event) {
  refs.promoDiv.hidden = true;
  if (refs.neverCheckBox.checked) {
    storageService.saveToLS(STORAGE_KEYS.PROMO_HIDDEN, 1);
  }
}
