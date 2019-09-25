import React from 'react';
import Button from './components/button/button';
import './App.css';
import {
  getRndNumber, putUnderscores, getRndLetters,
} from './utils';
import DATA from './data/words-data';

import Confetti from './components/confetti/confetti';
import PlaySound from './components/play-sound';

class App extends React.Component {
  state = DATA;

  componentDidMount = () => {
    this.initialState();
  }

  onAnimationEnd = () => {
    this.setState({ isFade: false })
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


    this.setState({ userLetters, rndLetters });

    if (isGuessed) {
      this.setState({ isConfetti: true });
      setTimeout(() => this.setState({ isGuessed, isConfetti: false, isFade: true }), 3000);
    } else
      this.setState({ isGuessed });
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
        return false;
      }
    }
    return true; //The word has been guessed!
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
      const countLettersToAdd = 0; //Math.floor(newTargetLetters.length / 3);

      const targetLetters = [...newTargetLetters]; //it's must be, as targetLetters will be changed
      const rndLetters = getRndLetters(targetLetters, countLettersToAdd)
      console.log('rndLetters: ' + rndLetters);

      this.setState({
        words: tmpArray,
        targetLetters: newTargetLetters, targetWordId: newWordId, targetWordIndex: newIndex,
        userLetters, rndLetters, maxCountWords, isGuessed: false, isFade: true
      });
    }
  }

  initialState = () => {
    console.log(this.state.words);

    const index = getRndNumber(0, this.state.maxCountWords); //index of random array of words
    const targetLetters = [...this.state.words[index].word];
    const targetWordId = this.state.words[index].id;
    const userLetters = putUnderscores(targetLetters.length);
    const countLettersToAdd = 0; //Math.floor(targetLetters.length / 3);
    const rndLetters = getRndLetters(targetLetters, countLettersToAdd)

    this.setState({
      targetWordId, targetWordIndex: index, targetLetters: [...this.state.words[index].word],
      userLetters, rndLetters
    });
  }

  render() {
    const isFade = this.state.isFade
    return (
      <div className={isFade ? 'form-fade-animation' : 'form'}
        onAnimationEnd={() => this.onAnimationEnd()}
      >
        <div className='tc f2 mt3 red'>
          Угадай слово!
        </div>

        <img className='tc br4 mt4 mb4 image'
          src={this.state.words[this.state.targetWordIndex].img} alt='' />

        { !this.state.isGuessed ?
          <div>
            <div className='word'>
              {this.state.userLetters.map((item, index) => (
                <Button letter={item} key={index}
                  click={this.delLetter.bind(
                    this, item, this.state.userLetters, this.state.rndLetters, index)} />
              ))}
            </div>

            <div className='words'>
              {this.state.rndLetters.map((item, index) => (
                <Button letter={item} key={index}
                  click={this.addLetter.bind(
                    this, item, this.state.userLetters, this.state.rndLetters, index)} />
              ))}
            </div>
            { this.state.isConfetti ?
              <div>
                <Confetti />
                <PlaySound urlStr={require('./assets/sounds/s2.mp3')} />
              </div> :
              null
            }
          </div> :
          <div>
            <div className='tc f2 b pt2 pb4'>{this.state.targetLetters}</div>
            <img
              className={'tc w4 h4 mt2'}
              src={require('./assets/icons/arrow-next.png')} alt=''
              onClick={this.removeItemFromWords.bind(this)}
              onAnimationEnd={() => this.onAnimation}
            />
          </div>
        }

      </div>
    );
  }
}

export default App;
