

import { I18N } from './i18n';

export var NfValueConverter = function () {
  NfValueConverter.inject = function inject() {
    return [I18N];
  };

  function NfValueConverter(i18n) {
    

    this.service = i18n;
  }

  NfValueConverter.prototype.toView = function toView(value, formatOptions, locale, numberFormat) {
    var nf = numberFormat || this.service.nf(formatOptions, locale || this.service.getLocale());

    return nf.format(value);
  };

  return NfValueConverter;
}();