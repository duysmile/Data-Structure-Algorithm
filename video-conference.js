// https://www.hackerrank.com/contests/hourrank-30/challenges/video-conference/problem
// https://www.youtube.com/watch?v=uOG3QyxIjso&feature=youtu.be

function solve(names) {
    const prefixes = [];
    const existedPrefix = {};
    const setExisted = {};
    names.forEach(item => {
        if (existedPrefix[item]) {
            existedPrefix[item] += 1;
            const count = existedPrefix[item];
            prefixes.push(`${item} ${count}`);
        } else {
            let inserted = false;
            existedPrefix[item] = 1;
            for (let i = 0; i < item.length; i++){
                const subStr = item.slice(0, i + 1);
                if (!inserted && !setExisted[subStr]) {
                    inserted = true;
                    prefixes.push(subStr);
                }
                setExisted[subStr] = 1;
            }
            if (!inserted) {
                prefixes.push(item);
            }
        }
    });

    return prefixes;
}

// const arrStr = `alvin
// alice
// alvin`;

const arrStr = `ghfd
ijh
iedbejcag
iijhhgeda
ieh
iii
ididddi
i
ificg
ifddidhj
iifiedhbdi
i
`;
const arr = arrStr.trim().split('\n');

console.log(solve(arr));
