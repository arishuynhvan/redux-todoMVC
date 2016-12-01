import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TextInput from '../../src/components/TextInput';
import {expect} from 'chai';

const {renderIntoDocument,
       scryRenderedDOMComponentsWithTag,
       Simulate} = TestUtils;

describe('TextInput', () => {
  it('renders an item with the right state', () => {
    const text = 'React';
    const component = renderIntoDocument(
      <TextInput value={text} />
    );
    const todo = scryRenderedDOMComponentsWithTag(component, 'input');

    expect(todo.length).to.equal(1);
    //expect(todo[0].textContent).to.contain('React'); //text is assigned to prop, but state (value) is empty at the start
  });
  it('calls a callback when pressing enter', () => {
    const text = 'React';
    var hasDoneEditing = false;
    const doneEditing = () => hasDoneEditing = true;
    const component = renderIntoDocument(
      <TextInput text={text} doneEditing={doneEditing}/>
    );
    const input = component.refs.itemInput
    Simulate.keyDown(input, {key: "Enter", keyCode: 13, which: 13});

    expect(hasDoneEditing).to.equal(true);
  });

  it('calls a callback when pressing escape or losing focus', () => {
    const text = 'React';
    var hasCanceledEditing = false;
    const cancelEditing = () => hasCanceledEditing = true;
    const component = renderIntoDocument(
      <TextInput text={text} cancelEditing={cancelEditing}/>
    );
    const input = component.refs.itemInput
    Simulate.keyDown(input, {key: "Escape", keyCode: 27, which: 27});

    expect(hasCanceledEditing).to.equal(true);
  });
});