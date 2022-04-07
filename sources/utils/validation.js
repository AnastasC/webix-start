import { FORM_VALIDATION_DATA as validation }  from "../../datas/data.js"

const isInteger = (num) => Number.isInteger(+num);

const validateYear = (num) => {
    const currentYear = new Date().getFullYear();

    return isInteger(num) && +num >= validation.minYear && +num <= currentYear;
};

const validateVotes = (num) => {
    return isInteger(num) && num > 0 && num < validation.maxVotes;
};

const validateRating = (num) => {
    return num > 0 && num < validation.maxRating;
};

export { validateYear, validateVotes, validateRating };