import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import About from '../../src/components/Header'


describe('<Header />', () => {
  it('should render single <h1>', () => {
    const wrapper = shallow(<About />)
    expect(wrapper.find('#Header')).to.have.length(1)
  })
})
