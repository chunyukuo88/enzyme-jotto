import moxios from 'moxios';

import { getSecretWord } from "../actions/hookActions";

describe('hookActions.js: ', ()=>{
   describe('WHEN: I make an axios call, ', ()=>{
      beforeEach(()=>{
          moxios.install();
      });
      afterEach(()=>{
          moxios.uninstall();
      });

      test('THEN: it invokes the getSecretWord callback on axios response.', async ()=>{
        const secretWord = 'party';

        moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: secretWord,
            });
         });

        const mockSetSecretWord = jest.fn();
        await getSecretWord(mockSetSecretWord);

        expect(mockSetSecretWord).toBeCalledWith(secretWord);
      });
   });
});
