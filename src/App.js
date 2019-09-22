import React from 'react';
import Button from './components/button/button';
import './App.css';
import {
  getRndNumber, putUnderscores, getRndLetters,
} from './utils';

class App extends React.Component {
  state = {
    words: [
      { id: 0, img: require('./assets/images/0.jpg'), word: 'ДЕРЕВО' },
      { id: 1, img: require('./assets/images/1.jpg'), word: 'КНИГА' },
      { id: 2, img: require('./assets/images/2.jpg'), word: 'МАШИНА' }
    ],
    targetLetters: [],
    userLetters: [],
    rndLetters: [],
    isGuessed: false,
    targetWordId: 0,
    targetWordIndex: 0,
    maxCountWords: 2 //Кол-во слов минус 1
  }

  componentDidMount = () => {
    this.initialState();
  }

  addLetter = (newLetter, userLetters, rndLetters, index) => {
    const underscore = ' ';
    for (let i = 0; i < userLetters.length; i++) {
      if (userLetters[i] === underscore) {
        userLetters[i] = newLetter;
        rndLetters[index] = ' ';
        i = userLetters.length; //остановка цикла
      }
    }
    const isGuessed = this.isTheWordGuessed(userLetters);
    console.log(userLetters);
    console.log('isGuessed from addLetter ' + isGuessed);

    this.setState({ userLetters, rndLetters, isGuessed });
  }

  delLetter = (letter, userLetters, rndLetters, index) => {
    for (let i = 0; i < rndLetters.length; i++) {
      if (rndLetters[i] === ' ') {
        rndLetters[i] = letter;
        userLetters[index] = ' ';
        i = rndLetters.length; //остановка цикла
      }
    }
    this.setState({ userLetters, rndLetters });
  }

  isTheWordGuessed = (userLetters) => {
    for (let i = 0; i < this.state.targetLetters.length; i++) {
      if (userLetters[i] !== this.state.targetLetters[i]) {
        console.log("user " + userLetters[i]);
        console.log("target " + this.state.targetLetters[i]);
        console.log("targetLetters " + this.state.targetLetters);
        return false;
      }
    }
    return true;
  }

  removeItemFromWords = () => {
    console.log('words ');
    console.log(this.state.words);

    const removedId = this.state.targetWordId;
    let tmpArray = this.state.words;  //words записываю во временный массив 
    const removedIndex = tmpArray.findIndex(idWord => idWord.id === removedId);

    tmpArray.splice(removedIndex, 1);  //Удаляю word из words

    const maxCountWords = this.state.maxCountWords - 1;
    if (maxCountWords >= 0) {
      const newIndex = getRndNumber(0, maxCountWords);
      const newTargetLetters = [...tmpArray[newIndex].word];
      const newWordId = tmpArray[newIndex].id;

      const userLetters = putUnderscores(newTargetLetters.length);
      const countLettersToAdd = Math.floor(newTargetLetters.length / 3);

      const targetLetters = [...newTargetLetters]; //it's must be, as targetLetters will be changed
      const rndLetters = getRndLetters(targetLetters, countLettersToAdd)
      console.log('rndLetters: ' + rndLetters);

      this.setState({
        words: tmpArray,
        targetLetters: newTargetLetters, targetWordId: newWordId, targetWordIndex: newIndex, 
        userLetters, rndLetters, maxCountWords, isGuessed: false
      });
    }
  } 

  initialState = () => {
    console.log(this.state.words);

    const index = getRndNumber(0, this.state.maxCountWords); //index of random array of words
    const targetLetters = [...this.state.words[index].word];
    const targetWordId = this.state.words[index].id;
    const userLetters = putUnderscores(targetLetters.length);
    const countLettersToAdd = Math.floor(targetLetters.length / 3);
    const rndLetters = getRndLetters(targetLetters, countLettersToAdd)

    this.setState({
      targetWordId, targetWordIndex: index, targetLetters: [...this.state.words[index].word],
      userLetters, rndLetters
    });
  }

  render() {
    return (
      <div className="form">

        <div className='tc f2 mt3 red'>
          {"Угадай слово!"}
        </div>

        <div className='image'>
          {<img className='tc br4 mt4'
            src={this.state.words[this.state.targetWordIndex].img} alt='' />
          }
        </div>

        { !this.state.isGuessed ? 
        <div>
          <div className='word'>
            {this.state.userLetters.map((item, index) => (
              <Button letter={item} key={index}
                click={this.delLetter.
                  bind(this, item, this.state.userLetters, this.state.rndLetters, index)} />
            ))}
          </div>

          <div className='words'>
            {this.state.rndLetters.map((item, index) => (
              <Button letter={item} key={index}
                click={this.addLetter.
                  bind(this, item, this.state.userLetters, this.state.rndLetters, index)} />
            ))}
          </div>
        </div> :
        <div>
          <h1>{this.state.targetLetters}</h1>

          <button className='tc h2 w4 mt2 br3 b'
            onClick={this.removeItemFromWords.bind(this)}
          >Вперед</button>
        </div>
      }  

      </div>
    );
  }
}

export default App;
