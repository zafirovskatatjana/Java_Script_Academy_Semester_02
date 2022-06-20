const { faker } = require("@faker-js/faker");

let people = [];

for (i = 0; i <= 10; i++) {
    let first_name = faker.name.firstName();
    let address = faker.address.city();
    let phone = faker.phone.phoneNumber();
    let company = faker.company.companyName();

    people.push({
        first_name: first_name,
        address: address,
        phone: phone,
        company: company,
    });
}

console.log(people);
