const dep1 = require('./dep1');

console.log('require dep1', dep1) // 순환참조 발생 -> 빈 객체로 만든다
module.exports = () => {
    console.log('dep1', dep1);
}