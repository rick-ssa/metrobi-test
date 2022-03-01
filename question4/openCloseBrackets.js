/* 4) Write an efficient method that tells us whether or not an input string brackets ("{", "}",
"(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,
“{([)]}” => false */

const openCloseBrackets = brackets => {
    const openBrackets = ['{','[','(']
    const objectBrackets = {"{":"}", "[":"]", "(":")"}
    const closeBrackets = ['}',']',')']
    const stack = []

    if (!openBrackets.includes(brackets.charAt(0))
        || openBrackets.includes(brackets.charAt(brackets.length - 1))) {

        return false
    }

    for(let i=0; i < brackets.length; i++) {

        let character = brackets.charAt(i)
        
        if(openBrackets.includes(character)) {

            stack.push(objectBrackets[character])

        } else if(closeBrackets.includes(character)) {

            let expectedCloseBrackets = stack.pop()

            if(character !== expectedCloseBrackets) {
                return false
            }
        }
    }

    return stack.length === 0
}

