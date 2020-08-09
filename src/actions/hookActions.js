import axios from 'axios';

export const getSecretWord = async (setSecretWord) => {
    const response = await axios.get('http://localhost:3030'); //Spin this up from `code/udemy-react-testing-projects/random-word-server`
    setSecretWord(response.data);
};

// default export
export default {
    getSecretWord,
};
