function sepEach(arr) {

    function makeSpace(str, len, char) {
        if (str.length < len) {

            return makeSpace(str + char, len, char);
        }
        else {
            return str;
        }
    }
    let size = arr.map((str) => {
        return str.length;
    })
        .reduce((a, b) => {
            return Math.max(a, b);
        });
        console.log(size)

        let line = makeSpace('', size + 5, '*');
    
        arr = arr.map((digit) => {
            return '* ' + makeSpace(digit, size, ' ') + ' *';
        })
        arr.unshift(line);
        arr.push(line);
    
        return arr.join('\n');;
    }
    console.log(sepEach(["Hello", "World", "in", "a", "fhhhhhrame"]));