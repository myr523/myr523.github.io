import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Home from '../../src/components/Home'


describe('<Home />', () => {
  it('should render single <h1>', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('#Home')).to.have.length(1)
  })
})
