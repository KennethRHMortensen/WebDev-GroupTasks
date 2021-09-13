function isPalindrome(s) {
    
    if(s.length <= 1) return true;
    // returner inputs 0 index som SKAL være input
    return s[0] === s[s.length - 1] && isPalindrome(s.substring(1, s.length - 1));
            //Bikseskib[B]  === Bikseskib[9-1 = b] && Bikseskib[8 == i] -1 )
}

console.log(`is palindrome? ${isPalindrome("racecar")}`);