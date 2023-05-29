// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('test if 123 is a phone number', () => {
    expect(functions.isPhoneNumber('123')).toBe(false);
});

test('test if @@@-###-456 is a phone number', () => {
    expect(functions.isPhoneNumber('@@@-###-456')).toBe(false);
});

test('test if 434-432-6543 is a phone number', () => {
    expect(functions.isPhoneNumber('@434-432-6543')).toBe(true);
});

test('test if (876)-342-4358 is a phone number', () => {
    expect(functions.isPhoneNumber('(876)-342-4358')).toBe(true);
});

test('test if user@example.com is an email', () => {
    expect(functions.isEmail('user@example.com')).toBe(true);
});

test('test if test123@test.uk is an email', () => {
    expect(functions.isEmail('test123@test.uk')).toBe(true);
});

test('test if @@@ is an email', () => {
    expect(functions.isEmail('@@@')).toBe(false);
});

test('test if @@@.fsd is an email', () => {
    expect(functions.isEmail('@@@.fsd')).toBe(false);
});

test('test if HJKA23fwa2332 is a strong password', () => {
    expect(functions.isStrongPassword('HJKA23fwa2332')).toBe(true);
});

test('test if sddfJELW is a strong password', () => {
    expect(functions.isStrongPassword('sddfJELW')).toBe(true);
});

test('test if 21fdser is a strong password', () => {
    expect(functions.isStrongPassword('21fdser')).toBe(false);
});

test('test if dsfa@@ is a strong password', () => {
    expect(functions.isStrongPassword('dsfa@@')).toBe(false);
});

test('test if 03/32/2003 is a date', () => {
    expect(functions.isDate('03/32/2003')).toBe(true);
});

test('test if 09/04/3294 is a date', () => {
    expect(functions.isDate('09/04/3294')).toBe(true);
});

test('test if 08-28-2023 is a date', () => {
    expect(functions.isDate('08-28-2023')).toBe(false);
});

test('test if 05-08-20023 is a date', () => {
    expect(functions.isDate('05-08-20023')).toBe(false);
});

test('test if #A78B0E is a hex color', () => {
    expect(functions.isHexColor('#A78B0E')).toBe(true);
});

test('test if #FFF456 is a hex color', () => {
    expect(functions.isHexColor('#FFF456')).toBe(true);
});

test('test if #89 is a hex color', () => {
    expect(functions.isHexColor('#89')).toBe(false);
});

test('test if #G989 is a hex color', () => {
    expect(functions.isHexColor('#G989')).toBe(false);
});