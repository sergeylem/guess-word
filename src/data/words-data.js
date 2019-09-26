const DATA = {
    words: [
      { id: 0, img: require('../assets/images/0.jpg'), word: 'ШАПКА' },
      { id: 1, img: require('../assets/images/1.jpg'), word: 'ДЕРЕВО' },
      { id: 2, img: require('../assets/images/2.jpg'), word: 'КНИГА' },
      { id: 3, img: require('../assets/images/3.jpg'), word: 'МАШИНА' },
      { id: 4, img: require('../assets/images/4.jpg'), word: 'МОЛОКО' },
      { id: 5, img: require('../assets/images/5.jpg'), word: 'СОК' },
      { id: 6, img: require('../assets/images/6.jpg'), word: 'РОЗА' },
      { id: 7, img: require('../assets/images/7.jpg'), word: 'КОТ' },
      { id: 8, img: require('../assets/images/8.jpg'), word: 'ЛИСА' },
      { id: 9, img: require('../assets/images/9.jpg'), word: 'ГРУША' },
      { id: 10, img: require('../assets/images/10.jpg'), word: 'ДЫНЯ' },
      { id: 11, img: require('../assets/images/11.jpg'), word: 'КРУЖКА' },
      { id: 12, img: require('../assets/images/12.jpg'), word: 'ГРИБ' },
      { id: 13, img: require('../assets/images/13.jpg'), word: 'ЯБЛОКО' },
      { id: 14, img: require('../assets/images/14.jpg'), word: 'КУБИК' },
      { id: 15, img: require('../assets/images/15.jpg'), word: 'ЛЕГО' },
      { id: 16, img: require('../assets/images/16.jpg'), word: 'ЛИМОН' },
      { id: 17, img: require('../assets/images/17.jpg'), word: 'ЛИСТОК' },
      { id: 18, img: require('../assets/images/18.jpg'), word: 'ПОЕЗД' },
      { id: 19, img: require('../assets/images/19.jpg'), word: 'СОБАКА' },
      { id: 20, img: require('../assets/images/20.jpg'), word: 'ЧАЙНИК' },
      { id: 21, img: require('../assets/images/21.jpg'), word: 'СТОЛ' },
      { id: 22, img: require('../assets/images/22.jpg'), word: 'ДОМ' },
      { id: 23, img: require('../assets/images/23.jpg'), word: 'РЫБКА' }
    ],
    targetLetters: [],
    userLetters: [],
    rndLetters: [],
    isGuessed: false,
    isConfetti: false,
    isFade: false,
    targetWordId: 0,
    targetWordIndex: 0,
    maxCountWords: 23, //Кол-во слов минус 1
    viewportWidth: 0,
    viewportHeight: 0
}

export default DATA;
