[출저](https://airbnb.io/enzyme/docs/api/ShallowWrapper/props.html)

# Props() => Object

```cpp
import PropTypes from 'prop-types';

function MyComponent(props) {
  const { includedProp } = props;
  return (
    <div className="foo bar" includedProp={includedProp}>Hello</div>
  );
}
MyComponent.propTypes = {
  includedProp: PropTypes.string.isRequired,
};

const wrapper = shallow(<MyComponent includedProp="Success!" excludedProp="I'm not included" />);
expect(wrapper.props().includedProp).to.equal('Success!');

// Warning: .props() only returns props that are passed to the root node,
// which does not include excludedProp in this example.
// See the note above about wrapper.instance().props.

console.log(wrapper.props());
// {children: "Hello", className: "foo bar", includedProp="Success!"}

console.log(wrapper.instance().props); // React 15.x - working as expected
// {children: "Hello", className: "foo bar", includedProp:"Success!", excludedProp: "I'm not included"}

console.log(wrapper.instance().props);
// React 16.* - Uncaught TypeError: Cannot read property 'props' of null
```
