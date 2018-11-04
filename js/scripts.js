'use strict';

(function () {

    var data = [
        {
            id: 'box1',
            title: 'First box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: [' highlighted ', ' special-header ', ' important']
        },
        {
            id: 'box2',
            title: 'Second box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: [' special-header ', ' important']
        },
        {
            id: 'box3',
            title: 'Third box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: [' highlighted ', ' important']
        },
        {
            id: 'box4',
            title: 'Fourth box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: [' highlighted ']
        },
        {
            id: 'box5',
            title: 'Fifth box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: []
        }
    ];
    
    for (var i = 0; i < data.length; i++) {

// Wygenerowanie divów + pobranie obiektów z tablicy data
        
        document.write('<div class=\"box\" id=\"' + data[i].id + '\">');
        document.write('<header>' + data[i].title + '</header>');
        document.write('<div class=\"content\">' + data[i].content + '</div>');
        document.write('</div>');
        
// Pobranie z tablicy obiektów categories i dodanie jako klasy

        var addClass = document.getElementsByClassName('box');
        addClass[i].className += ' ,' + data[i].categories; 
        
    }

})();