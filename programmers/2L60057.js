function solution(s) {
    var answer = s;

    for (let i = 1; i <= s.length / 2; i++) {
        let tmpStr = '';
        let checkStr = s.slice(0, i);
        let count = 1;

        for (let j = i; j < s.length; j += i) {
            let cutStr = s.slice(j, i + j);
            if (checkStr === cutStr) {
                count++;
            }
            else {
                if (count > 1) {
                    tmpStr += count + checkStr
                } else {
                    tmpStr += checkStr
                }

                checkStr = cutStr;
                count = 1;
            }
        }

        if (checkStr) {
            if (count > 1) {
                tmpStr += count + checkStr
            }
            else {
                tmpStr += checkStr
            }
        }

        if (answer.length > tmpStr.length) {
            answer = tmpStr
        }
    }

    return answer.length;
}