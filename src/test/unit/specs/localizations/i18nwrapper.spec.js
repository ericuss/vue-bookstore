import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
let expect = chai.expect;
let i18nwrapperComponent = null;

describe('i18nwrapper tests', () => {
	beforeEach(() => {
        const vue = { use() { }, i18n: { add() { }, set() { }, }, };
        const vuexI18n = { plugin: { }, };
        const store = { };
        const es = { };
        const esBookstore = { };
        const en = { };
        const enBookstore = { };

        i18nwrapperComponent = require('inject-loader!../../../../src/localizations/i18nwrapper')({
            vue: vue,
            'vuex-i18n': vuexI18n,
            '../store/store': store,
            './es.json': es,
            './bookstore/es.json': esBookstore,
            './en.json': en,
            './bookstore/en.json': enBookstore,
		}).default;
	});

	describe('Exists class', () => {
        it('i18nwrapper', () => {
            i18nwrapperComponent.should.not.equal(undefined);
		});
    });
    
	describe('Try to configure', () => {
        it('is called and works', () => {
            i18nwrapperComponent.configure();
            true.should.equal(true);
		});
        it('Vue use is called', () => {
            // Arrange
            const vue = { use() { }, i18n: { add() { }, set() { }, }, };
            const vuexI18n = { plugin: { }, };
            const store = { };
            const es = { };
            const esBookstore = { };
            const en = { };
            const enBookstore = { };
            
            sinon.spy(vue, "use");
            
            const i18nwrapper = require('inject-loader!../../../../src/localizations/i18nwrapper')({
                vue: vue,
                'vuex-i18n': vuexI18n,
                '../store/store': store,
                './es.json': es,
                './bookstore/es.json': esBookstore,
                './en.json': en,
                './bookstore/en.json': enBookstore,
            }).default;
            
            // Act
            i18nwrapper.configure();
            
            // Assert
            vue.use.called.should.equal(true);
        });
        
        it('Vue add is called', () => {
            // Arrange
            const vue = { use() { }, i18n: { add() { }, set() { }, }, };
            const vuexI18n = { plugin: { }, };
            const store = { };
            const es = { };
            const esBookstore = { };
            const en = { };
            const enBookstore = { };
            
            sinon.spy(vue.i18n, "add");
            
            const i18nwrapper = require('inject-loader!../../../../src/localizations/i18nwrapper')({
                vue: vue,
                'vuex-i18n': vuexI18n,
                '../store/store': store,
                './es.json': es,
                './bookstore/es.json': esBookstore,
                './en.json': en,
                './bookstore/en.json': enBookstore,
            }).default;
            
            // Act
            i18nwrapper.configure();
            
            // Assert
            vue.i18n.add.called.should.equal(true);
        });
        
        it('Vue set is called', () => {
            // Arrange
            const vue = { use() { }, i18n: { add() { }, set() { }, }, };
            const vuexI18n = { plugin: { }, };
            const store = { };
            const es = { };
            const esBookstore = { };
            const en = { };
            const enBookstore = { };
            
            sinon.spy(vue.i18n, "set");
            
            const i18nwrapper = require('inject-loader!../../../../src/localizations/i18nwrapper')({
                vue: vue,
                'vuex-i18n': vuexI18n,
                '../store/store': store,
                './es.json': es,
                './bookstore/es.json': esBookstore,
                './en.json': en,
                './bookstore/en.json': enBookstore,
            }).default;
            
            // Act
            i18nwrapper.configure();
            
            // Assert
            vue.i18n.set.called.should.equal(true);
		});
	});
});
