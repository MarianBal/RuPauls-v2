export const handleEvent = setter => event => setter(event.target.value);

export const handleValue = (setter, value) => () => setter(!value);

export const addValue = (setter, value) => () => setter(value);
