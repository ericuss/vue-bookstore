// import Vue from 'vue';
// import Vuex from 'vuex';
// import vuexI18n from 'vuex-i18n';
// import Text from '@/components/controls/Text';

// describe('Controls - Text.vue', () => {
//   it('should render correct contents', () => {
//     const Constructor = Vue.extend(Text);
//     let store =  store = new Vuex.Store({
//       state: {},
//     });

//     Vue.use(vuexI18n.plugin, store);
//     Vue.i18n.add('en', { 'MESSAGE': 'Message' });
//     Vue.i18n.add('es', { 'MESSAGE': 'Mensaje' });
//     Vue.i18n.set('es');
//     Vue.prototype.$t = (text) => text;
//     const vm = new Constructor().$mount({ propsData: { Text: 'MESSAGE' } });
    
//     console.log(vm.props)
//     expect(vm.$el.textContent)
//       .to.equal('');
//   });
// });
