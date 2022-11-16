import { shallowMount } from "@vue/test-utils";
import PremierLeagueClubs from "@/components/PremierLeagueClubs.vue";
import { expect } from "chai";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
const chai = require('chai');
chai.use(sinonChai);

describe('PremierLeagueClubs.vue', () => {
    it('renders button for each team', () => {
        const wrapper = shallowMount(PremierLeagueClubs);

        wrapper.vm.clubs.forEach(club => {
            expect(wrapper.contains(`button[data-club="${club}"]`)).to.equal(true);
        })
    })

    it('click on button executes function with proper argument', () => {
        const spy = sinon.spy();

        const wrapper = shallowMount(PremierLeagueClubs, {
            propsData: {
                pickClub: spy
            }
        });

        wrapper.vm.clubs.forEach(club => {
            wrapper.find(`button[data-club="${club}"]`).trigger('click');
            spy.should.have.been.calledWith(club)
        })
    })
})