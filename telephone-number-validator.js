/* this function validates or reject a US phone number based on any combination of the formats provided below:
        555-555-5555
        (555)555-5555
        (555) 555-5555
        555 555 5555
        5555555555
        1 555 555 5555
    the area code is required. If a country code is provided, it must be 1.
    return true if the string is a valid US phone number; otherwise return false.*/
function telephoneCheck(str) {
    // use a regEx variable to validate or reject a US phone number
    let testStr = /^(1|1\s?)?((\d{10}$)|(\d{3}|\(\d{3}\)|-\d{3}-)\s?(\d{3}|-\d{3}-)\s?(\d{4}$|-\d{4}$)\s?)/;
    return testStr.test(str);
}