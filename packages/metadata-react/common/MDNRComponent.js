/**
 * Компонент
 * - содержит свойство _mounted
 * - знает, размещен ли он в основном дереве react или во всплывающем окне
 * - устанавливает title основного раздела интерфейса
 *
 * Created 11.01.2017
 */

import React from 'react';
import PropTypes from 'prop-types';
import MComponent from './MComponent';

export default class MDNRComponent extends MComponent {

  static contextTypes = {
    dnr: PropTypes.object
  };

  shouldComponentUpdate({_mgr, _meta, title, handleIfaceState}) {

    let res = true;

    const {handleManagerChange, ltitle} = this;

    if(handleManagerChange && this.props._mgr != _mgr) {
      handleManagerChange({_mgr, _meta});
      res = false;
    }

    if (ltitle && title != ltitle) {
      handleIfaceState({
        component: '',
        name: 'title',
        value: ltitle,
      });
      res = false;
    }

    return res;
  }
}