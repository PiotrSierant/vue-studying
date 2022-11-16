import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import ComputedTDD from "@/components/ComputedTDD.vue";

describe('ComputedTDD.vue', () => {
    it('properly renders odd numbers', () => {
        const localThis = { odd: true };
        const computedValue = ComputedTDD.computed.nums.call(localThis);

        expect(computedValue).to.be.equal('1, 3, 5, 7, 9');
    })
    it('properly renders even numbers', () => {
        const localThis = { odd: false };
        const computedValue = ComputedTDD.computed.nums.call(localThis);

        expect(computedValue).to.be.equal('2, 4, 6, 8');
    })
})