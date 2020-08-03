import { getLetterMatchCount } from './index';

describe('index.js:', ()=>{
   describe('WHEN: getLetterMatchCount is invoked', ()=>{
       const secretWord = 'party';
       test('it returns the correct count when there are no matching letters, ', ()=>{
            const letterMatchCount = getLetterMatchCount('mold', secretWord);
            expect(letterMatchCount).toBe(0);
       });
       test('and it returns the correct count when there are 3 matching letters, ', ()=>{
           const letterMatchCount = getLetterMatchCount('train', secretWord);
           expect(letterMatchCount).toBe(3);
       });
       test('and it returns the correct count when there are duplicate letters in the guess.', ()=>{
           const letterMatchCount = getLetterMatchCount('parka', secretWord);
           expect(letterMatchCount).toBe(3);
       });
   });
});
