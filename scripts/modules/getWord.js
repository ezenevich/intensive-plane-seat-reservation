const getWord = (n, word) => {
    let result = [...word];

    if (n === 1) {
        return result.join('');
    }

    if (n > 1 && n < 5) {
        result.pop();
        result.push('а')
        return result.join('');
    }

    if (n === 5 || n === 6) {
        result.pop();
        return result.join('');
    }
}

export default getWord;