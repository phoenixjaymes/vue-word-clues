import initialWordsData from './data/words';

export const store = {
  state: {
    wordsData: initialWordsData,
    wordList: [],
    section: 'home',
  },
  getWordList(menuObj) {
    const languageObject = this.state.wordsData.find((item) => item.language === menuObj.language);
    const categoryObject = languageObject.data.find((item) => item.category === menuObj.category);
    const groupObject = categoryObject.data.find((item) => item.id === menuObj.group);

    this.state.wordList = groupObject.data;
  },
  changeSection(sectionName, menuObj = undefined) {
    if (menuObj !== undefined) {
      this.getWordList(menuObj);
    }

    this.state.section = sectionName;
  },
  setWordsData(data) {
    this.state.wordsData = data;
  },
}