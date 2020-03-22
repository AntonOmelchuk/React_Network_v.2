export const required = (field: string) => (value: string) => {
    if(!value) return `Please enter your ${field}`;
    return false;
};

export const maxLength = (length: number) => (value: string) => {
    if(value && value.length > length) return `Max length is ${length}`;
    return false;
};
