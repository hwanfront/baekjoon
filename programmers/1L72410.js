function solution(new_id) {
    var answer = '';
    const firstStepArray = new_id.toLocaleLowerCase().split("");
    const secondStepArray = firstStepArray.filter(e => {
        if (e === "-" || e === "_" || e === "." 
        || (48 <= e.charCodeAt() && e.charCodeAt() < 58) 
        || (97 <= e.charCodeAt() && e.charCodeAt() < 123)) {
            return true;
        }
        return false;
    });
    const thridStepArray = secondStepArray.filter((e, i) => {
        if (!i) return true;
        if (e === "." && secondStepArray[i - 1] === ".") return false;
        return true;
    })

    const fourthStepArray = thridStepArray.filter((e, i) => {
        if (!i && e === ".") return false;
        if (i === thridStepArray.length - 1 && e === ".") return false;
        return true;
    })

    const fifthStepArray = fourthStepArray;
    if(!fourthStepArray.length) fifthStepArray.push("a");

    const fifthStepArraySlice = fifthStepArray.slice(0, 15)

    const sixthStepArray = fifthStepArraySlice.filter((e, i) => {
        if (i === fifthStepArraySlice.length - 1 && e === ".") return false;
        return true;
    });

    if(sixthStepArray.length > 3) answer = sixthStepArray.join('').trim();
    else {
        const len = sixthStepArray.length;
        const letter = sixthStepArray[len - 1];
        answer = sixthStepArray;
        for(let i = 0; i < 3 - len; i++) {
            answer.push(letter);
        }
        answer = answer.join('').trim();
    }

    return answer;
}

solution("...!@BaT#*..y.abcdefghijklm")
solution("z-+.^.")
solution("=.=")
solution("123_.def")
solution("abcdefghijklmn.p")




