import es from './es';
import es_bookstore from './bookStore/es';

import en from './en';
import en_bookstore from './bookStore/en';


class I18n{
    configure(Vue){
        Vue.i18n.add('en', Object.assign({}, en, en_bookstore));
        Vue.i18n.add('es', Object.assign({}, es, es_bookstore));
        
        Vue.i18n.set('en');
    }
}

export default new I18n();