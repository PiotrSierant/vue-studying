import { expect } from "chai";
import { shallowMount, mount } from "@vue/test-utils";
import Main from '@/components/Main.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import UsersList from '@/components/UsersList.vue';

describe('StubbingMain.vue', () => {
    // it('renders with mount and does async operation', () => {
    //     const wrapper = mount(Main);

    //     expect(wrapper.find(HelloWorld).exists()).to.be.equal(true);
    //     expect(wrapper.find(UsersList).exists()).to.be.equal(true);
    // });

    it('renders with stub and doesn\'t do async operation', () => {
        const wrapper = mount(Main, {
            stubs: {
                UsersList: true,
            }
        })

        expect(wrapper.find(HelloWorld).exists()).to.be.equal(true);
        expect(wrapper.find(UsersList).exists()).to.be.equal(true);
    })
})