var currentQuestionIndex = null;
var currentLst = null

function showQuestions(indexnum, lst){
    currentLst = lst;
    currentQuestionIndex=indexnum;
    
    var qObject =currentLst[indexnum] 

    document.getElementById("question").innerHTML = qObject.q;

    var optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML= ""

    qObject.opts.forEach(function(optxt) {
        var  letter = optxt.charAt(0);

        var radio = document.createElement("input");
        radio.type="radio";
        radio.name='options';
        radio.value=letter;
        var id = "opt_"+letter; 
        radio.id = id;

        var label = document.createElement("label")
        label.htmlFor = id;
        label.textContent = optxt;
        label.id = "optlabel"


        var linebreak = document.createElement("br")
        optionsDiv.appendChild(radio);
        optionsDiv.appendChild(label);
        optionsDiv.appendChild(linebreak);

    });

    document.getElementById("check").style.display = "inline-block";


    document.getElementById("result").textContent = ""




}

function check(){
        
    var selected = document.querySelector('input[name="options"]:checked');
    
    if(!selected){
        alert("Nothing Is Selected...")
    }
    var userAns = selected.value;
    var correctAns = currentLst[currentQuestionIndex].ans;
   

    if(userAns == correctAns ){
        document.getElementById("result").textContent='Correct Answer!!Good job!!'
    }
    else{
        document.getElementById("result").textContent='Try Again...'
    }
}


var artQues = [
    {
        q: "Q) Who painted the Mona Lisa?",
        opts: [
            "a) Michelangelo",
            "b) Vincent van Gogh",
            "c) Pablo Picasso",
            "d) Leonardo da Vinci"
        ],
        ans: "d"
    },
    {
        q: "Q) Which art movement is characterized by visible brush strokes, light colors, and an emphasis on light?",
        opts: [
            "a) Cubism",
            "b) Impressionism",
            "c) Surrealism",
            "d) Baroque"
        ],
        ans: "b"
    },
    {
        q: "Q) What do you call a painting done on wet plaster?",
        opts: [
            "a) Mosaic",
            "b) Watercolor",
            "c) Fresco",
            "d) Collage"
        ],
        ans: "c"
    },
    {
        q: "Q) Which famous Dutch artist painted “Starry Night”?",
        opts: [
            "a) Rembrandt van Rijn",
            "b) Vincent van Gogh",
            "c) Johannes Vermeer",
            "d) Piet Mondrian"
        ],
        ans: "b"
    },
    {
        q: "Q) What is the term for an artist’s board where they mix paints?",
        opts: [
            "a) Easel",
            "b) Palette",
            "c) Canvas",
            "d) Chisel"
        ],
        ans: "b"
    },
    {
        q: "Q) Which medium uses melted wax mixed with pigments?",
        opts: [
            "a) Encaustic",
            "b) Tempera",
            "c) Gouache",
            "d) Pastel"
        ],
        ans: "a"
    },
    {
        q: "Q) Which artist is known for the sculpture “David”?",
        opts: [
            "a) Donatello",
            "b) Michelangelo",
            "c) Auguste Rodin",
            "d) Henry Moore"
        ],
        ans: "b"
    },
    {
        q: "Q) What element of art refers to the lightness or darkness of a color?",
        opts: [
            "a) Hue",
            "b) Value",
            "c) Texture",
            "d) Form"
        ],
        ans: "b"
    },
    {
        q: "Q) In printmaking, which tool is used to carve into a block of wood or linoleum?",
        opts: [
            "a) Palette knife",
            "b) Gouge",
            "c) Stylus",
            "d) Spatula"
        ],
        ans: "b"
    },
    {
        q: "Q) Which 20th-century artist is famous for his abstract drip paintings?",
        opts: [
            "a) Jackson Pollock",
            "b) Salvador Dalí",
            "c) Claude Monet",
            "d) Andy Warhol"
        ],
        ans: "a"
    }
];


function art(){

    document.getElementById("body").style.backgroundImage="none";
    document.getElementById("body").style.backgroundColor="#fdffb6";
   
    currentQuestionIndex = Math.floor(Math.random() * artQues.length); 
    
    showQuestions(currentQuestionIndex,artQues);

}


var historyQues = [
    {
        q: "Q) Who was the first President of the United States?",
        opts: [
            "a) Abraham Lincoln",
            "b) George Washington",
            "c) Thomas Jefferson",
            "d) John Adams"
        ],
        ans: "b"
    },
    {
        q: "Q) What is the Great Wall of China?",
        opts: [
            "a) A giant river",
            "b) A mountain range",
            "c) A long wall built to protect against invaders",
            "d) A large palace"
        ],
        ans: "c"
    },
    {
        q: "Q) Which civilization built the pyramids?",
        opts: [
            "a) Romans",
            "b) Aztecs",
            "c) Egyptians",
            "d) Greeks"
        ],
        ans: "c"
    },
    {
        q: "Q) In which country was the city of Rome founded?",
        opts: [
            "a) Greece",
            "b) Italy",
            "c) Egypt",
            "d) Turkey"
        ],
        ans: "b"
    },
    {
        q: "Q) Who was known as the 'Maid of Orleans'?",
        opts: [
            "a) Anne Frank",
            "b) Cleopatra",
            "c) Joan of Arc",
            "d) Queen Victoria"
        ],
        ans: "c"
    },
    {
        q: "Q) Which ship sank in 1912 on its maiden voyage?",
        opts: [
            "a) HMS Victory",
            "b) Titanic",
            "c) Lusitania",
            "d) Mayflower"
        ],
        ans: "b"
    },
    {
        q: "Q) The Declaration of Independence declared independence from which country?",
        opts: [
            "a) Spain",
            "b) France",
            "c) England",
            "d) Germany"
        ],
        ans: "c"
    },
    {
        q: "Q) Which ancient wonder was located in Greece?",
        opts: [
            "a) Hanging Gardens of Babylon",
            "b) Statue of Zeus at Olympia",
            "c) Great Pyramid of Giza",
            "d) Colossus of Rhodes"
        ],
        ans: "b"
    },
    {
        q: "Q) Who discovered America in 1492?",
        opts: [
            "a) Marco Polo",
            "b) Christopher Columbus",
            "c) Vasco da Gama",
            "d) Ferdinand Magellan"
        ],
        ans: "b"
    },
    {
        q: "Q) What was the ancient Roman language called?",
        opts: [
            "a) Latin",
            "b) Greek",
            "c) Egyptian",
            "d) Sumerian"
        ],
        ans: "a"
    }
];


 function hiss(){

    document.getElementById("body").style.backgroundImage="none";
    document.getElementById("body").style.backgroundColor="#ffadad";
    currentQuestionIndex = Math.floor(Math.random() * 10);  
    showQuestions(currentQuestionIndex,historyQues);
    

 }

var gkQues = [
    {
        q: "Q) What is the largest planet in our solar system?",
        opts: [
            "a) Earth",
            "b) Mars",
            "c) Jupiter",
            "d) Venus"
        ],
        ans: "c"
    },
    {
        q: "Q) Which animal is known as the 'King of the Jungle'?",
        opts: [
            "a) Tiger",
            "b) Elephant",
            "c) Lion",
            "d) Giraffe"
        ],
        ans: "c"
    },
    {
        q: "Q) What do bees collect from flowers to make honey?",
        opts: [
            "a) Water",
            "b) Pollen",
            "c) Nectar",
            "d) Leaves"
        ],
        ans: "c"
    },
    {
        q: "Q) Which instrument has keys, pedals, and strings inside?",
        opts: [
            "a) Guitar",
            "b) Piano",
            "c) Drum",
            "d) Flute"
        ],
        ans: "b"
    },
    {
        q: "Q) Which continent is the Sahara Desert located on?",
        opts: [
            "a) Asia",
            "b) South America",
            "c) Africa",
            "d) Australia"
        ],
        ans: "c"
    },
    {
        q: "Q) What is the boiling point of water at sea level in Celsius?",
        opts: [
            "a) 90°C",
            "b) 100°C",
            "c) 110°C",
            "d) 120°C"
        ],
        ans: "b"
    },
    {
        q: "Q) Which color do you get by mixing red and blue?",
        opts: [
            "a) Green",
            "b) Orange",
            "c) Purple",
            "d) Brown"
        ],
        ans: "c"
    },
    {
        q: "Q) What is the capital city of India?",
        opts: [
            "a) Mumbai",
            "b) New Delhi",
            "c) Kolkata",
            "d) Chennai"
        ],
        ans: "b"
    },
    {
        q: "Q) Which gas do plants absorb from the air for photosynthesis?",
        opts: [
            "a) Oxygen",
            "b) Nitrogen",
            "c) Carbon Dioxide",
            "d) Hydrogen"
        ],
        ans: "c"
    },
    {
        q: "Q) How many legs does a spider have?",
        opts: [
            "a) Six",
            "b) Eight",
            "c) Ten",
            "d) Twelve"
        ],
        ans: "b"
    }
];


function gk(){

    document.getElementById("body").style.backgroundImage="none";
    document.getElementById("body").style.backgroundColor="#ffc6ff";
    currentQuestionIndex=Math.floor(Math.random()*10)
    showQuestions(currentQuestionIndex,gkQues)
}


var mathQues = [
    {
        q: "Q) Solve for x: 2x + 5 = 17.",
        opts: [
            "a) 5",
            "b) 6",
            "c) 7",
            "d) 8"
        ],
        ans: "b"
    },
    {
        q: "Q) What is ¾ + 2/5?",
        opts: [
            "a) 19/20",
            "b) 23/20",
            "c) 17/20",
            "d) 22/20"
        ],
        ans: "b"
    },
    {
        q: "Q) A square has a perimeter of 20 cm. What is its area?",
        opts: [
            "a) 16 cm²",
            "b) 20 cm²",
            "c) 25 cm²",
            "d) 36 cm²"
        ],
        ans: "a"
    },
    {
        q: "Q) What is 25% of 80?",
        opts: [
            "a) 15",
            "b) 20",
            "c) 25",
            "d) 30"
        ],
        ans: "b"
    },
    {
        q: "Q) What is 7² – 5²?",
        opts: [
            "a) 12",
            "b) 19",
            "c) 24",
            "d) 29"
        ],
        ans: "a"
    },
    {
        q: "Q) The perimeter of a rectangle is 14 cm and its length is 5 cm. What is its width?",
        opts: [
            "a) 2 cm",
            "b) 3 cm",
            "c) 4 cm",
            "d) 5 cm"
        ],
        ans: "b"
    },
    {
        q: "Q) What is the next number in the sequence: 5, 10, 20, 40, __?",
        opts: [
            "a) 60",
            "b) 70",
            "c) 80",
            "d) 100"
        ],
        ans: "c"
    },
    {
        q: "Q) What is the average of 4, 8, 12, and 16?",
        opts: [
            "a) 9",
            "b) 10",
            "c) 11",
            "d) 12"
        ],
        ans: "b"
    },
    {
        q: "Q) If a train travels at 60 km/h for 2.5 hours, how far does it go?",
        opts: [
            "a) 120 km",
            "b) 130 km",
            "c) 150 km",
            "d) 160 km"
        ],
        ans: "c"
    },
    {
        q: "Q) Simplify: (3 + 4) × (6 – 2).",
        opts: [
            "a) 20",
            "b) 24",
            "c) 28",
            "d) 30"
        ],
        ans: "c"
    }
];


function math(){

    document.getElementById("body").style.backgroundImage="none";
    document.getElementById("body").style.backgroundColor="#bdb2ff";
    currentQuestionIndex=Math.floor(Math.random())*10
    showQuestions(currentQuestionIndex,mathQues)
}



var triviaQues = [
    {
        q: "Q) What is the tallest mammal in the world?",
        opts: [
            "a) Elephant",
            "b) Giraffe",
            "c) Kangaroo",
            "d) Hippopotamus"
        ],
        ans: "b"
    },
    {
        q: "Q) Which planet is known as the Red Planet?",
        opts: [
            "a) Venus",
            "b) Mars",
            "c) Jupiter",
            "d) Saturn"
        ],
        ans: "b"
    },
    {
        q: "Q) What is the hardest natural substance on Earth?",
        opts: [
            "a) Gold",
            "b) Iron",
            "c) Diamond",
            "d) Quartz"
        ],
        ans: "c"
    },
    {
        q: "Q) Which famous wizard goes to Hogwarts School of Witchcraft and Wizardry?",
        opts: [
            "a) Frodo Baggins",
            "b) Harry Potter",
            "c) Percy Jackson",
            "d) Katniss Everdeen"
        ],
        ans: "b"
    },
    {
        q: "Q) Which country is famous for the Eiffel Tower?",
        opts: [
            "a) Italy",
            "b) Spain",
            "c) France",
            "d) Germany"
        ],
        ans: "c"
    },
    {
        q: "Q) What do you call a baby kangaroo?",
        opts: [
            "a) Kitten",
            "b) Calf",
            "c) Joey",
            "d) Pup"
        ],
        ans: "c"
    },
    {
        q: "Q) How many continents are there on Earth?",
        opts: [
            "a) 5",
            "b) 6",
            "c) 7",
            "d) 8"
        ],
        ans: "c"
    },
    {
        q: "Q) What is the main ingredient in guacamole?",
        opts: [
            "a) Tomato",
            "b) Avocado",
            "c) Potato",
            "d) Cucumber"
        ],
        ans: "b"
    },
    {
        q: "Q) Which instrument has six strings and is played by strumming or plucking?",
        opts: [
            "a) Violin",
            "b) Drums",
            "c) Flute",
            "d) Guitar"
        ],
        ans: "d"
    },
    {
        q: "Q) What is the chemical symbol for water?",
        opts: [
            "a) O₂",
            "b) H₂O",
            "c) CO₂",
            "d) NaCl"
        ],
        ans: "b"
    }
];




function tri(){

    document.getElementById("body").style.backgroundImage="none";
    document.getElementById("body").style.backgroundColor="#ffd6a5";
    currentQuestionIndex=Math.floor(Math.random()*10)
    showQuestions(currentQuestionIndex,triviaQues)

}       










