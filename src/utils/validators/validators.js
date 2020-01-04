export const required = field => value => {
    if(!value) return `Please enter your ${field}`;
    return false;
};

export const maxLength = length => value => {
    if(value && value.length > length) return `Max length is ${length}`;
    return false;
};