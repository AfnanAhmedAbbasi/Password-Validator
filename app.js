document.querySelector('#password').addEventListener('input', function () {
    let input = this.value;
    let number = document.querySelector('#number');
    let letter = document.querySelector('#letters');
    let specialCharacter = document.querySelector('#special-character');
    let upperCase = document.querySelector('#upper-case');
    let lowerCase = document.querySelector('#lower-case')

    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?', '|', '\\'];

    number.classList.remove('spc');
    letter.classList.remove('spc');
    specialCharacter.classList.remove('spc');
    upperCase.classList.remove('spc');
    lowerCase.classList.remove('spc');

    if (numbers.some(num => input.includes(num))) {
        number.classList.add('spc')
        iconColorChange()
    }
    function countLetters(str) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
                count++;
            
            }
        }
        return count;
    }
    if (countLetters(input) >= 12) {
        letter.classList.add('spc');
        iconColorChange()
    }
    if (specialCharacters.some(char => input.includes(char))) {
        specialCharacter.classList.add('spc');
        iconColorChange()
    }
    if (uppercaseLetters.split('').some(value => input.includes(value))) {
        upperCase.classList.add('spc');
        iconColorChange()
    }
    if (lowercaseLetters.split('').some(value => input.includes(value))) {
        lowerCase.classList.add('spc');
        iconColorChange()
    }

    function iconColorChange() {
        let dotlistli = document.querySelectorAll('#dot-list li')
        dotlistli.forEach((item, index) => {
            let icon = item.querySelector('i');
            let liIndex = document.querySelectorAll('#check-list li')[index];
            if (liIndex.classList.contains('spc')) {
                icon.style.color = 'rgb(115, 244, 115)';
            } else {
                icon.style.color = ' rgb(0,0,0) ';
            }

        });
    }
    iconColorChange();
});
