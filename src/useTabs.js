export const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initalTab);
  return {
    currentItem: allTabs[currentItem],
    chagneItem: setCurrentIndex
  };
};