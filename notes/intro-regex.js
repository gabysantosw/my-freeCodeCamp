// FCC JS CERT
// REGULAR EXPRESSION SECTION

// regular expressions: special strings that represent a search pattern
// also known as 'regex' or 'regexp'

// using the .test() method
// finding a specific word in a string: use / /
// the matching is case sensitive
/word/.test('string to test'); // returns false 'word' is not included in string
/word/.test('word'); // returns true, 'word' is included in string

// matching with more than one posibility
// we use the | (OR) operator
// matching multiple words: /word1|word2|word3/
/yes|no|maybe/.test('yes, i can go'); // true
/yes|no|maybe/.test('no'); // true
/yes|no|maybe/.test('what'); // false

// ignore case-sensiblity
// a glag is used, i flag ignores the casesensitivity
/word/i.test('WORD');

// extract matches
string.match(regex);
// returns the matched string as an array

// g flag
string.match(/substring/g);
// returns at least one match of the string as an array

// wildcard character .
// . will match any one character
// /hu./ would match hug, hum, hut, etc
string.match(/wor./);

// character classes, multiple posibilities
// group of characters are placed inside [ ]
// /b[aiu]g/ would match bag big bug, NOT beg or bog
string.match(/[aeiou]/gi); // matches all vowels, returns all matches, ignores case-sensitivity

// using hyphen - to match multiple characters
// /[a-e]at/ would match aat, bat, cat, etc

// match numbers
// [a-z0-9] would match all leters and numbers
string.match(/[a-z0-9]/gi);

// match single characters not specified
// negated character sets: characters you DONT want to match
// represented by an ^ inside a character group class
// /[^aeiou]/ matches all characters that are not vowels
// this would include spaces too
string.match(/[^aeiou0-9]/gi); // doesn't match any vowels or numbers

// match characters that occur one or more times
// + checks if a character may be repeated one or more times subsecuently
// [a+] would return one match with abc, still one ('aa') with aabc
string.match(/s+/gi);

// match characters that occur zero or more times
// * checks if a character occurs zero or more times
// /go*/ would return 'g' in 'gut', 'gooo' in 'goooal' and null in 'asdf'
string.match(/Aa*/);

// lazy matching
// greedy match: finds the longest possible part of a string that fits that regex pattern and returns it as a a match. Regex are greedy by default. LONGEST POSSIBLE MATCH
// lazy match: finds smallest possible part of a string that satisfies the regex. it uses the ? character. SHORTEST POSSIBLE MATCH
'titanic'.match(/t[a-z]*i/); // starts with t, ends with i and has any letters in between, returns 'titani', this is a greedy match
'titanic'.match(/t[a-z]*?i/); // returns 'ti'
// to check if line contains a tag
'<h1>asdf</h1>'.match(/<h1*?>/); // returns 'h1'

// match beginning string patterns
// uses ^ outside the character group class an at the beginning of the regex
/^first/.test(string);

// match ending string patterns
// $ at the end of the regex
/last$/.test(string);

// match all letters and numbers
// \w is a shortcut for [A-Za-z0-9_] characters
/[A-Za-z0-9_]+/.test(string); // longhand
/\w+/.test(string);  // shorthand
// /\w/ using .test will return an array of matches
// using .length shows the count of alphanumeric characters used
/\w/g.test(string).length;

// match everything but letters and numbers
// \W would be the oposite of \w
// counting number of non-alphanumeric characters used
/\W/g.test(string).length;

// match all numbers
// \d for digit characters, equal to [0-9]
/\d/g.test(string);

// match all non-numbers
// \D would be the opposite of \d and equal to [^0-9]
/\D/g.test(string);

// restrict possible usernames
// numbers only at the end, letters can be lower or uppercase, at least two characters long
// /^[A-Za-z][\w+]/i

// match whitespace
// \s searches for whitespace, tab, new line, etc
/\s/g.test(string);

// match non-whitespace characters
/\S/g.test(string);

// specify upper and lower number of matches
// quantify specifiers: {lower, upper} to check repetition by number of times
/a{3,5}h/.test(string); // a appearing between 3 and 5 times in a string that ends with h
/Oh{3,6}\sno/.test('Ohhh no'); // matches

// specify only the lower number of matches
// leave the upper part empty: {lower,}

// specify exact number of matches
// {timesRepeated}

// check all or none
// use ? to check if that specific character exists in string
/colou?r/.test('color'); // Returns true
/colou?r/.test('colour'); // Returns true

// positive and negative lookahead
// positive lookadhead: makes sure the element in the search patter is there, but wont actually match it, (?...) is the syntax, where ... is the required part that's not matched
// negative lookahead: makes sure the element in the search pattern is not there. the syntax is (?!...) where ... is the pattern you don't want there
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]
// simple password checker
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true
// greater chan 5 characters long and 2 consecutive digits
/(?=\w{5,})(?=\D*\d{2})/.test(string);

// reuse patterns using capture groups
// parenthesis () are used to find repeat substrings
// to specify where that repeat string will appear: \ followed by a number
// the number starts at 1 and increases with each repetition
// \1 whould match the first group
// match word that occurs twice separated by a space
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
// using .match() method on a string will return an array with the string it matches, along with its capture group
// match numbers separated only three times in a string, each separated by a space
// should match '42 42 42'
/^(\d+)\s\1\s\1$/.test(string);

// use capture groups to search and replace
// .replace method replaces matches with parameter
string.replace(regex, modification);
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."
// capture groups can be accessed using $ followed by number
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"

// remove whitespace from start and end
string.trim(); // would work here, but lets use regex instead
// removes spaces at the start or end of string
string.replace(/^\s+|\s+$/g, '')
