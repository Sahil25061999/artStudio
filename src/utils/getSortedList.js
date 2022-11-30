export const getSortedList = (data, sort) => {
  let tempSortData = [];
  if (sort.alphabet) {
    tempSortData = data.sort((item1, item2) => {
      if (item1.title.toUpperCase() > item2.title.toUpperCase()) {
        return 1;
      }
      if (item1.title < item2.title) {
        return -1;
      }
      return 0;
    });
  }

  if (sort.date) {
    tempSortData = data.sort((item1, item2) => {
      if (item1.dateUploaded > item2.dateUploaded) {
        return 1;
      }
      if (item1.dateUploaded < item2.dateUploaded) {
        return -1;
      }
      return 0;
    });
  }
  if (sort.ascending) {
    return tempSortData;
  } else {
    return tempSortData.reverse();
  }
};
