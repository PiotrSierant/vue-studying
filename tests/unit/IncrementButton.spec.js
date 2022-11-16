import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import IncrementBtnVue from "@/components/IncrementBtn.vue";

describe("IncrementBtn.vue", () => {
    const wrapper = shallowMount(IncrementBtnVue)
    it("contains h1", () => {

        expect(wrapper.contains('h1')).to.equal(true);
    })
    it('h1 has super important class', () => {
        const h1 = wrapper.find('h1');
        const superClass = 'super-header';
        expect(h1.classes()).to.include(superClass)
    })
    it('contains button', () => {
        expect(wrapper.contains('button')).to.equal(true);
    })
    it('button click increments counter', () => {
        const counterInitialValue = 0;
        expect(wrapper.vm.counter).to.equal(counterInitialValue);
        wrapper.find('button').trigger('click');
        expect(wrapper.vm.counter).to.equal(counterInitialValue + 1)
    })
})