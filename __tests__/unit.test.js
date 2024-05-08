// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
describe('Validation Functions', () => {
  describe('Phone Number Validation', () => {
    test('should return true for a valid phone number format', () => {
      expect(isPhoneNumber('123-456-7890')).toBe(true);
    });
    test('should return false for an invalid phone number format', () => {
      expect(isPhoneNumber('12345')).toBe(false);
    });
    test('should return true for a valid phone number format with area code', () => {
      expect(isPhoneNumber('(123) 456-7890')).toBe(true);
    });
    test('should return false for a number with too few digits', () => {
      expect(isPhoneNumber('123-4567')).toBe(false);
    });
  });

  describe('Email Validation', () => {
    test('should return true for a valid email', () => {
      expect(isEmail('email@example.com')).toBe(true);
    });
    test('should return false for an invalid email without domain', () => {
      expect(isEmail('email@')).toBe(false);
    });
    test('should return true for a valid email with subdomain', () => {
      expect(isEmail('info@sub.example.com')).toBe(true);
    });
    test('should return false for an email without "@" symbol', () => {
      expect(isEmail('email.example.com')).toBe(false);
    });
  });

  describe('Password Strength Validation', () => {
    test('should return true for a strong password', () => {
      expect(isStrongPassword('A1b2c3d4')).toBe(true);
    });
    test('should return false for a password too short', () => {
      expect(isStrongPassword('A1b')).toBe(false);
    });
    test('should return true for a password at maximum length', () => {
      expect(isStrongPassword('Abcdef1ghijklmn')).toBe(true);
    });
    test('should return false for a password with special characters', () => {
      expect(isStrongPassword('Abc123!')).toBe(false);
    });
  });

  describe('Date Format Validation', () => {
    test('should return true for a valid date format', () => {
      expect(isDate('12/31/2020')).toBe(true);
    });
    test('should return false for a date with invalid month', () => {
      expect(isDate('13/31/2020')).toBe(false);
    });
    test('should return true for a valid date with single-digit month and day', () => {
      expect(isDate('1/1/2020')).toBe(true);
    });
    test('should return false for a date with invalid formatting', () => {
      expect(isDate('31/12/2020')).toBe(false);
    });
  });

  describe('Hex Color Code Validation', () => {
    test('should return true for a valid 3-character hex color', () => {
      expect(isHexColor('#abc')).toBe(true);
    });
    test('should return false for an invalid hex color', () => {
      expect(isHexColor('123456')).toBe(false);
    });
    test('should return true for a valid 6-character hex color', () => {
      expect(isHexColor('#a1b2c3')).toBe(true);
    });
    test('should return false for a hex color with invalid characters', () => {
      expect(isHexColor('#g1h2i3')).toBe(false);
    });
  });
});