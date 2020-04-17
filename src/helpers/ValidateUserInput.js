export default (name, value, length) => {
    const letterNumber = /^[0-9a-zA-Z]+$/;
    switch (name) {
        case 'board-order':
            return {
                errors:
                    isNaN(value) || value === ""
                        ? 'Input must be an INTEGER!'
                        : parseInt(value) <= 0
                        ? 'Must be greater than zero!'
                        : parseInt(value) > length
                            ? `Must be less or equal ${length}!`
                            : '',
                inputStatus:
                    isNaN(value) || value === "" || parseInt(value) <= 0 || parseInt(value) > length
            };
        case 'board-title':
            return {
                errors:
                    !value.match(letterNumber)
                        ? 'Please, input alphanumeric characters only!'
                        : value.length > 10
                            ? 'This title is too long'
                            : '',
                inputStatus:
                    !value.match(letterNumber) || value.length > 10
            };
        case 'task-title':
            return {
                errors:
                    !value.match(letterNumber)
                        ? 'Please, input alphanumeric characters only!'
                        : value.length > 7
                        ? 'This title is too long'
                        : '',
                inputStatus:
                    !value.match(letterNumber) || value.length > 7
            };
        case 'task-description':
            return {
                errors:
                    value.length >= 100
                        ? 'Description must be less than 100 characters'
                        : '',
                inputStatus:
                    value.length >= 100
            };
        default:
            return {
                errors : '',
                inputStatus: false
            }
    }
}
