export const getSelectedCategoryList = (videoInformation, category) => {
  if (category === 'all') {
    return videoInformation;
  }
  const filteredCategoryList = videoInformation.filter((item) => {
    return item.category === category;
  });
  return filteredCategoryList;
};
