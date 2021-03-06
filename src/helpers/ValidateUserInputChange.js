export default (name, value, length) => {
    const titleFormat = /^[0-9A-Za-z\s]+$/;
    const personNameFormat = /^[a-zA-Z]+$/;
    switch (name) {
        case 'board_order':
            return {
                errors:
                    isNaN(value) || value === ""
                        ? 'Input must be an INTEGER!'
                        : parseInt(value) <= 0
                        ? 'Must be greater than zero!'
                        : parseInt(value) > length + 1
                            ? `Must be less or equal ${length + 1}!`
                            : '',
                inputStatus:
                    isNaN(value) || value === "" || parseInt(value) <= 0 || parseInt(value) > length + 1
            };
        case 'board_title':
            return {
                errors:
                    !value.match(titleFormat)
                        ? 'Please, input alphanumeric characters only!'
                        : value.length > 10
                            ? 'This title is too long'
                            : '',
                inputStatus:
                    !value.match(titleFormat) || value.length > 10
            };
        case 'task_title':
            return {
                errors:
                    !value.match(titleFormat)
                        ? 'Please, input alphanumeric characters only!'
                        : value.length > 13
                        ? 'This title is too long'
                        : '',
                inputStatus:
                    !value.match(titleFormat) || value.length > 13
            };
        case 'task_description':
            return {
                errors:
                    value.length >= 100
                        ? 'Description must be less than 100 characters'
                        : '',
                inputStatus:
                    value.length >= 100
            };
        case 'first':
            return {
                errors:
                    !value.match(personNameFormat)
                        ? 'Please, input alphabetical characters only!'
                        : value.length < 3
                        ? 'First name is too short'
                        : '',
                inputStatus:
                    !value.match(personNameFormat) || value.length < 3
            };
        case 'last':
            return {
                errors:
                    !value.match(personNameFormat)
                        ? 'Please, input alphabetical characters only!'
                        : value.length < 3
                        ? 'Last name is too short'
                        : '',
                inputStatus:
                    !value.match(personNameFormat) || value.length < 3
            };
        default:
            return {
                errors : '',
                inputStatus: false
            }
    }
}
