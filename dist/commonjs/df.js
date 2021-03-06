'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DfValueConverter = undefined;

var _i18n = require('./i18n');



var DfValueConverter = exports.DfValueConverter = function () {
  DfValueConverter.inject = function inject() {
    return [_i18n.I18N];
  };

  function DfValueConverter(i18n) {
    

    this.service = i18n;
  }

  DfValueConverter.prototype.toView = function toView(value, dfOrOptions, locale, df) {
    if (value === null || typeof value === 'undefined' || typeof value === 'string' && value.trim() === '') {
      return value;
    }

    if (dfOrOptions && typeof dfOrOptions.format === 'function') {
      return dfOrOptions.format(value);
    } else if (df) {
      console.warn('This ValueConverter signature is depcrecated and will be removed in future releases. Please use the signature [dfOrOptions, locale]');
    } else {
        df = this.service.df(dfOrOptions, locale || this.service.getLocale());
      }

    return df.format(value);
  };

  return DfValueConverter;
}();