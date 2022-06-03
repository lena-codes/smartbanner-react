import React from 'react'
import renderer, { ReactTestInstance } from 'react-test-renderer'

import { SmartBanner } from '../src/index'
import { CloseIcon } from './Icon/CloseIcon'

describe('Snapshot Tests', () => {
  it('renders correctly for all required parameters', () => {
    const tree = renderer
      .create(
        <SmartBanner
          title='test'
          author='testAuthor'
          buttonLink='google.com'
          buttonText='Go'
          description='this is a test'
          src='random-image.png'
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders light theme as default', () => {
    const tree = renderer
      .create(
        <SmartBanner
          title='test'
          author='testAuthor'
          buttonLink='google.com'
          buttonText='Go'
          description='this is a test'
          src='random-image.png'
          onClose={() => {}}
        />
      )
      .toJSON()
    const tree2 = renderer
      .create(
        <SmartBanner
          title='test'
          author='testAuthor'
          buttonLink='google.com'
          buttonText='Go'
          description='this is a test'
          src='random-image.png'
          theme='light'
          onClose={() => {}}
        />
      )
      .toJSON()
    expect(tree!.toString()).toEqual(tree!.toString())
  })
  it('renders correctly for dark theme', () => {
    const tree = renderer
      .create(
        <SmartBanner
          title='test'
          author='testAuthor'
          buttonLink='google.com'
          buttonText='Go'
          description='this is a test'
          src='random-image.png'
          theme='dark'
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when all theme overwrite parameters are set', () => {
    const overwriteBackgroundColor = 'green'
    const overwriteButtonColor = 'red'
    const overwriteCloseIconColor = 'yellow'
    const overwriteTextColor = 'pink'
    const overwriteTitleColor = 'purple'

    const testRenderer = renderer.create(
      <SmartBanner
        title='test'
        author='testAuthor'
        buttonLink='google.com'
        buttonText='Go'
        description='this is a test'
        src='random-image.png'
        background={overwriteBackgroundColor}
        buttonColor={overwriteButtonColor}
        closeIconColor={overwriteCloseIconColor}
        onClose={() => alert('button clicked!')}
        textColor={overwriteTextColor}
        titleColor={overwriteTitleColor}
        theme='light'
      />
    )
    const testInstance = testRenderer.root
    const tree = testRenderer.toJSON()

    expect(tree).toMatchSnapshot()
    expect(testInstance.findByType('svg').props.fill).toEqual(
      overwriteCloseIconColor
    )
    expect(testInstance.findByType('a').props.style.color).toEqual(
      overwriteButtonColor
    )

    testInstance
      .findAllByProps({ className: 'smartbanner-text' })
      .forEach((inst) =>
        expect(inst.props.style.color).toEqual(overwriteTextColor)
      )
    expect(
      testInstance.findByProps({
        className: 'smartbanner-title smartbanner-title-light'
      }).props.style.color
    ).toEqual(overwriteTitleColor)
  })
})
