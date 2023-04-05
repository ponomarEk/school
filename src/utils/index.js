const getFullName = ({ FirstName, SecondName, LastName }) => {
  return [FirstName, SecondName, LastName].join(' ');
};

const getFilteredAbsenceById = (id, absenceData) => {
  return absenceData?.Items.filter((absence) => absence.SchoolboyId === id);
};

const checkIsSthLoading = (queryArr, mutationArr) => {
  return (
    queryArr.some((query) => query.isFetching) ||
    mutationArr.some((mutation) => mutation.isLoading)
  );
};

const getTitleSum = (title) => {
  const numbers = title.split('/');
  return numbers[0] + numbers[1];
};

export { getFullName, getFilteredAbsenceById, checkIsSthLoading, getTitleSum };
