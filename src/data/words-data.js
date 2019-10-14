const DATA = {
    words: [
      { id: 0, img: require('../assets/images/0.jpg'), word: 'МЁД' },
      { id: 1, img: require('../assets/images/1.jpg'), word: 'СОК' },
      { id: 2, img: require('../assets/images/2.jpg'), word: 'КОТ' },
      { id: 3, img: require('../assets/images/3.jpg'), word: 'МАШИНА' },
      { id: 4, img: require('../assets/images/4.jpg'), word: 'МОЛОКО' },
      { id: 5, img: require('../assets/images/5.jpg'), word: 'ДЕРЕВО' },
      { id: 6, img: require('../assets/images/6.jpg'), word: 'РОЗА' },
      { id: 7, img: require('../assets/images/7.jpg'), word: 'КНИГА' },
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
      { id: 23, img: require('../assets/images/23.jpg'), word: 'РЫБКА' },
      { id: 24, img: require('../assets/images/24.jpg'), word: 'КРЕСЛО' },
      { id: 25, img: require('../assets/images/25.jpg'), word: 'СВЕКЛА' },
      { id: 26, img: require('../assets/images/26.jpg'), word: 'КРОВАТЬ' },
      { id: 27, img: require('../assets/images/27.jpg'), word: 'ТОРТ' },
      { id: 28, img: require('../assets/images/28.jpg'), word: 'ГИТАРА' },
      { id: 29, img: require('../assets/images/29.jpg'), word: 'ПИРОГ' },
      { id: 30, img: require('../assets/images/30.jpg'), word: 'ЗОНТИК' },
      { id: 31, img: require('../assets/images/31.jpg'), word: 'МАСЛО' },
      { id: 32, img: require('../assets/images/32.jpg'), word: 'ШАПКА' },
      { id: 33, img: require('../assets/images/33.jpg'), word: 'МОРКОВЬ' },
      { id: 34, img: require('../assets/images/34.jpg'), word: 'ХЛЕБ' },      
      { id: 35, img: require('../assets/images/35.jpg'), word: 'БАБОЧКА' },      
      { id: 36, img: require('../assets/images/36.jpg'), word: 'БАРАБАН' },      
      { id: 37, img: require('../assets/images/37.jpg'), word: 'БРЮКИ' },      
      { id: 38, img: require('../assets/images/38.jpg'), word: 'ДИВАН' },      
      { id: 39, img: require('../assets/images/39.jpg'), word: 'ФУТБОЛ' },      
      { id: 40, img: require('../assets/images/40.jpg'), word: 'КЕПКА' },      
      { id: 41, img: require('../assets/images/41.jpg'), word: 'КОРОБКА' },      
      { id: 42, img: require('../assets/images/42.jpg'), word: 'КОРОВА' },      
      { id: 43, img: require('../assets/images/43.jpg'), word: 'КОВЁР' },      
      { id: 44, img: require('../assets/images/44.jpg'), word: 'МЯЧ' },      
      { id: 45, img: require('../assets/images/45.jpg'), word: 'НОСКИ' },      
      { id: 46, img: require('../assets/images/46.jpg'), word: 'ПОДУШКА' },      
      { id: 47, img: require('../assets/images/47.jpg'), word: 'ТАПОЧКИ' },      
      { id: 48, img: require('../assets/images/48.jpg'), word: 'ТЕЛЕФОН' },      
      { id: 49, img: require('../assets/images/49.jpg'), word: 'ВАЗА' },      
      { id: 50, img: require('../assets/images/50.jpg'), word: 'ВЕЛОСИПЕД' }      
    ],
    targetLetters: [],
    userLetters: [],
    rndLetters: [],
    isGuessed: false,
    isGameOver: false,
    isConfetti: false,
    isFade: false,
    targetWordId: 0,
    targetWordIndex: 0,
    maxCountWords: 50, //Кол-во слов минус 1
    viewportWidth: 0,
    viewportHeight: 0
}

export default DATA;
