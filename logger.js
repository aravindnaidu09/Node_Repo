console.log(__filename);
console.log(__dirname);
console.log(exports);
console.log(module);
console.log(this);
// const x =;
const firstName = 'aravind';

function printFullName(lastName) {
    const fullName = firstName + lastName;
    return fullName;
}

module.exports.FullName = printFullName;