// Функция для проверки длины строки

const checkStringLength = (string, maxLength) => {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
};

// Функция для проверки, является ли строка палиндромом

const checkPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let newString = '';


  for (let i = normalizedString.length - 1; i >= 0; i--) {
    newString += normalizedString.at(i);
  }

  if (newString === normalizedString) {
    return true;
  }

  return false;
};

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.

const extractNumbers = (string) => {
  let resultString = '';
  for (let i = 0; i < string.length; i++) {
    resultString += parseInt(string.at(i));
  }

  return parseInt(resultString.replaceAll('NaN', ''));

};
