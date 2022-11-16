import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import EventEmitter from "@/components/EventEmitter.vue";


describe('EventEmitter.vue', () => {
    const requestObj = {
        name: 'Johny',
        password: 'johny123!@w'
    };


    it('emits customEvent with proper object as argument', () => {
        const wrapper = shallowMount(EventEmitter);


        wrapper.vm.emitEvent();

        expect(wrapper.emitted().customEvent[0][0]).to.be.eql(requestObj);
    });

    it(`emits an event without mounting`, () => {
        const events = {};
        const $emit = (event, ...args) => {
            events[event] = [...args];
        }

        EventEmitter.methods.emitEvent.call({ $emit });
        expect(events.customEvent[0]).to.eql(requestObj)
    })
})