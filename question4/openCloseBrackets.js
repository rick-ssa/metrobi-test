/* 4) Write an efficient method that tells us whether or not an input string brackets ("{", "}",
"(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,
“{([)]}” => false */

// can it have any other character besides the brackets?

const openCloseBrackets = brackets => {
    const openBrackets = ['{','[','(']
    const closeBrackets = {"{":"}", "[":"]", "(":")"}
    const stack = []

    if (!openBrackets.includes(brackets.charAt(0))
        || openBrackets.includes(brackets.charAt(brackets.length - 1))) {

        return false
    }

    for(let i=0; i < brackets.length; i++) {
        let character = brackets.charAt(i)
        if(openBrackets.includes(brackets.charAt(i))) {
            stack.push(closeBrackets[character])
        } else {
            let expectedCloseBrackets = stack.pop()

            if(character !== expectedCloseBrackets) {
                return false
            }
        }
    }

    return stack.length === 0
}

console.log(openCloseBrackets('{[()]()[]{}}'))//true
console.log(openCloseBrackets('{[]}')) //true
console.log(openCloseBrackets('{(])}')) //false
console.log(openCloseBrackets('{([)]}')) //false
console.log(openCloseBrackets('}[]}')) //false
console.log(openCloseBrackets('}[]}')) //false
console.log(openCloseBrackets('{[)}')) //false
console.log(openCloseBrackets('')) //false
