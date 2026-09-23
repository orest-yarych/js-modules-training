// TODO: Вікно зі знижкою показується при кожному візиті,
// TODO: доки користувач не закриє його з галочкою «Більше не показувати».
// TODO:
// TODO: Що зробити:
// TODO: При завантаженні показати вікно, якщо в сховищі немає позначки promoHidden.
// TODO: На кнопку «Закрити» ховати вікно.
// TODO: Якщо галочка стоїть — перед закриттям записати позначку.
// TODO: Перевірити обидва сценарії: закрити без галочки і з галочкою.

import { STORAGE_KEYS } from './js/constants';
import { onCloseBtnClick } from './js/handlers';
import { refs } from './js/refs';
import { loadFromLS } from './js/storage';

const hidePromo = loadFromLS(STORAGE_KEYS.PROMO_HIDDEN);

if (!hidePromo) {
  refs.promoDiv.hidden = false;
}

refs.closePromoBtn.addEventListener('click', onCloseBtnClick);
