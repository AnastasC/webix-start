import { FORM_VALIDATION_DATA as validation }  from "../../datas/data.js"

const isInteger = (num) => Number.isInteger(+num);

const validateYear = (num) => {
    const currentYear = new Date().getFullYear();

    return isInteger(num) && +num >= validation.year && +num <= currentYear;
};

const validateVotes = (num) => {
    return isInteger(num) && num > 0 && num < validation.votes;
};

const validateRanking = (num) => {
    return num > 0 && num < validation.rating;
};

export { validateYear, validateVotes, validateRanking };