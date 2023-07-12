import { useState } from "react";
import api from '../api'

function Search() {
    const [prefix, setPrefix] = useState("");
    const [suggestion, setSuggestion] = useState("");

    (async()=>{
        const words = await api.getBoardGameSearch().then(res => {
            console.log('getBoardGameSearch: ', res);
            return res;
        })
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            console.log(word)
        }
    })();

    const onChange = (e) => {
        var value = e.target.value;
        setPrefix(value);
        var words = value.split(" ");
        var trie_prefix = words[words.length - 1].toLowerCase();
        

        var found_words = ['a', 'b']
                /*myTrie.find(trie_prefix).sort((a, b) => {
            return a.length - b.length;
        });
        */
        
        var first_word = found_words[0];
        if (
            found_words.length !== 0 &&
            value !== "" &&
            value[value.length - 1] !== " "
        ) {
            if (first_word != null) {
            var remainder = first_word.slice(trie_prefix.length);
            setSuggestion(value + remainder);
        }
        } else {
            setSuggestion(value);
        }
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 39) {
            setPrefix(suggestion);
        }
    };


    return (
        <form action="/boardgame/search" method="get">
            <input type="text" 
                id="searchTerm" 
                name="searchTerm" 
                placeholder="Search..."
                value={prefix}
                onChange={onChange}
                onKeyDown={handleKeyDown}
            />
            <button type="submit">Buscar</button>
        </form>
    )
}

export default Search