const spreadOperator = () => {
  const objectSample = {
    a: 1,
    b: 2,
    c: 'ahoj',
    d: {
      complex: true,
      pi: 3.14
    }
  };

  const modifiedObject = {
    ...objectSample,
    b: 43,
    c: -5
  };

  console.log(modifiedObject);
}

const objectDestructor = () => {
  const action = { widgetIdentifier: '123' };
  const state = {
    widgets: {
      123: {
        a: 1,
        b: 2
      },
      456: {
        a: 3,
        b: 4
      },
    }
  };
  const { widgets: { [action.widgetIdentifier]: removedMarkup, ...newState } } = state;

  console.log(newState);
  console.log(removedMarkup);
  console.log({ ...state, widgets: newState });
}

export {
  spreadOperator,
  objectDestructor
}