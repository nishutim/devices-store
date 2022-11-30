const getTrimmedFirstLetterCapitalizedValue = (value: string) => {
   let trimmedValue = value.trim();
   let firstLetterCapitalizedValue = trimmedValue[0].toUpperCase() + trimmedValue.slice(1).toLowerCase();
   return firstLetterCapitalizedValue;
}

export default getTrimmedFirstLetterCapitalizedValue;