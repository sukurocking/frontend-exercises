javascript:(function() {
    let userInput = prompt("Please enter a search string: ");
        let url = "https://www.google.com/search?q=" + userInput;
        window.location.href = url;
})();
