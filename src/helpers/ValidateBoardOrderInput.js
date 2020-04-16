export default value => (
    {
        errors:
            isNaN(value) || value === ""
                ? 'Input must be an INTEGER'
                : parseInt(value) <= 0
                ? 'Must be greater than zero'
                : '',
        inputStatus:
            parseInt(value) <= 0
    });
