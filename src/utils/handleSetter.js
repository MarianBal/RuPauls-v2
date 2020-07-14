export const handleEvent = setter => event => setter(event.target.value);

export const handleValue = (setter, value) => () => setter(!value);
