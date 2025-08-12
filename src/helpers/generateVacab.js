export function createTokenizer(specialTokens = ["<PAD>", "<UNK>", "<BOS>", "<EOS>"]) {
    let word2id = {};
    let id2word = {};
    let vocabList = [...specialTokens];

    function buildVocabFromText(text) {
        const vocabSet = new Set();
        text.split(/\s+/).forEach(word => {
            vocabSet.add(word.toLowerCase());
        });

        vocabList = [...specialTokens, ...vocabSet];
        word2id = {};
        id2word = {};

        vocabList.forEach((word, idx) => {
            word2id[word] = idx;
            id2word[idx] = word;
        });
    }

    function encode(text) {
        const tokens = text.split(/\s+/).map(word => word2id[word.toLowerCase()] ?? word2id["<UNK>"]);
        return tokens;
    }

    function decode(tokens) {
        return tokens.map(id => id2word[id] ?? "<UNK>").join(" ");
    }

    return { buildVocabFromText, encode, decode };
}
