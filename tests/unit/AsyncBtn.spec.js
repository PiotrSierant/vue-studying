import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import AsyncBtn from "@/components/AsyncBtn.vue";
import sinon from 'sinon';

const bestPlayer = 'Eden Hazard'
const mockResponse = {
    data: {
        player: bestPlayer,
    }
}
const mockAxios = {
    get: sinon.stub().returns(Promise.resolve(mockResponse))
}

describe('AsyncBtn', () => {
    it('properly gets best player name from API', (done) => {
        const wrapper = shallowMount(AsyncBtn, {
            mocks: {
                $http: mockAxios
            }
        })
        wrapper.find('button').trigger('click');

        setImmediate(() => {
            expect(wrapper.vm.bestPlayer).to.be.equal(bestPlayer);
            done();
        })
    })
})