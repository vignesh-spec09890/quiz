 let question = document.getElementById("question");
    let choices = Array.from(document.getElementsByClassName("choice"));
    let chs = Array.from(document.getElementsByClassName("chs"));
    let chtxt = Array.from(document.getElementsByClassName("chtxt"));
    let submit = document.getElementById("submit");
    let back=document.getElementById("back")
        let next = document.getElementById("nxt");
        let dots=document.getElementById("chukka")
   let point=Array.from(document.getElementsByClassName("dot"))
    let container=document.getElementById("cont")
 let result=document.getElementById("res")

    let answered = 1;
    let answers = {};
    let answerList=[];
    let evalu=[];
    let Max_answers=10
    let dotArray=[]
let path=-1


    
    let CurrentQuestion;
    let selectedOption;
    let selectedChs;
    function getRandom() {
      let num= Math.floor(Math.random() * 100);
       if(answerList.includes(num)){
        return getRandom()
       }
      return num
    }

    let qs = [
      
{
  quesion: "Which planet is known as the Red Planet?",
  choice1: "Earth",
  choice2: "Mars",
  choice3: "Venus",
  choice4: "Jupiter",
  answer: 2,
},
{
  quesion: "What gas do plants use for photosynthesis?",
  choice1: "Oxygen",
  choice2: "Nitrogen",
  choice3: "Carbon Dioxide",
  choice4: "Hydrogen",
  answer: 3,
},
{
  quesion: "How many days are there in a leap year?",
  choice1: "365",
  choice2: "366",
  choice3: "364",
  choice4: "360",
  answer: 2,
},
{
  quesion: "Which organ pumps blood throughout the human body?",
  choice1: "Brain",
  choice2: "Lungs",
  choice3: "Heart",
  choice4: "Kidney",
  answer: 3,
},
{
  quesion: "Which is the largest ocean on Earth?",
  choice1: "Indian Ocean",
  choice2: "Atlantic Ocean",
  choice3: "Pacific Ocean",
  choice4: "Arctic Ocean",
  answer: 3,
},
{
  quesion: "What is the boiling point of water in Celsius?",
  choice1: "90°C",
  choice2: "100°C",
  choice3: "110°C",
  choice4: "120°C",
  answer: 2,
},
{
  quesion: "Which animal is known as the Ship of the Desert?",
  choice1: "Horse",
  choice2: "Camel",
  choice3: "Elephant",
  choice4: "Donkey",
  answer: 2,
},
{
  quesion: "Which shape has three sides?",
  choice1: "Square",
  choice2: "Rectangle",
  choice3: "Triangle",
  choice4: "Circle",
  answer: 3,
},
{
  quesion: "Which metal is liquid at room temperature?",
  choice1: "Iron",
  choice2: "Copper",
  choice3: "Mercury",
  choice4: "Silver",
  answer: 3,
},
{
  quesion: "Which sense organ helps us to hear?",
  choice1: "Eye",
  choice2: "Nose",
  choice3: "Ear",
  choice4: "Tongue",
  answer: 3,
},
{
  quesion: "What is the currency of India?",
  choice1: "Dollar",
  choice2: "Euro",
  choice3: "Rupee",
  choice4: "Yen",
  answer: 3,
},
{
  quesion: "Which part of the plant absorbs water?",
  choice1: "Leaf",
  choice2: "Stem",
  choice3: "Root",
  choice4: "Flower",
  answer: 3,
},
{
  quesion: "Which day comes after Friday?",
  choice1: "Thursday",
  choice2: "Saturday",
  choice3: "Sunday",
  choice4: "Monday",
  answer: 2,
},
{
  quesion: "Which animal is known as the King of the Jungle?",
  choice1: "Tiger",
  choice2: "Elephant",
  choice3: "Lion",
  choice4: "Leopard",
  answer: 3,
},
{
  quesion: "How many hours are there in one day?",
  choice1: "12",
  choice2: "18",
  choice3: "24",
  choice4: "36",
  answer: 3,
},
{
  quesion: "Which festival is called the Festival of Lights?",
  choice1: "Holi",
  choice2: "Diwali",
  choice3: "Eid",
  choice4: "Christmas",
  answer: 2,
},
{
  quesion: "Which planet is closest to the Sun?",
  choice1: "Venus",
  choice2: "Earth",
  choice3: "Mercury",
  choice4: "Mars",
  answer: 3,
},
{
  quesion: "Which bird cannot fly?",
  choice1: "Eagle",
  choice2: "Parrot",
  choice3: "Penguin",
  choice4: "Sparrow",
  answer: 3,
},
{
  quesion: "Which month has the least number of days?",
  choice1: "January",
  choice2: "February",
  choice3: "March",
  choice4: "April",
  answer: 2,
},
{
  quesion: "Which is the tallest animal in the world?",
  choice1: "Elephant",
  choice2: "Giraffe",
  choice3: "Camel",
  choice4: "Horse",
  answer: 2,
},
{
  quesion: "Which tool is used to measure temperature?",
  choice1: "Barometer",
  choice2: "Thermometer",
  choice3: "Speedometer",
  choice4: "Altimeter",
  answer: 2,
},
{
  quesion: "Which is the national animal of India?",
  choice1: "Lion",
  choice2: "Elephant",
  choice3: "Tiger",
  choice4: "Leopard",
  answer: 3,
},
{
  quesion: "Which gas is essential for breathing?",
  choice1: "Carbon Dioxide",
  choice2: "Nitrogen",
  choice3: "Oxygen",
  choice4: "Helium",
  answer: 3,
},
{
  quesion: "Which color is formed by mixing red and blue?",
  choice1: "Green",
  choice2: "Purple",
  choice3: "Orange",
  choice4: "Yellow",
  answer: 2,
},
{
  quesion: "Which part of the body helps us think?",
  choice1: "Heart",
  choice2: "Brain",
  choice3: "Lungs",
  choice4: "Stomach",
  answer: 2,
},
{
  quesion: "Which organelle is known as the powerhouse of the cell?",
  choice1: "Nucleus",
  choice2: "Ribosome",
  choice3: "Mitochondria",
  choice4: "Golgi apparatus",
  answer: 3,
},
{
  quesion: "Which macromolecule stores genetic information?",
  choice1: "Protein",
  choice2: "Carbohydrate",
  choice3: "Lipid",
  choice4: "Nucleic acid",
  answer: 4,
},
{
  quesion: "Which process converts glucose into energy in cells?",
  choice1: "Photosynthesis",
  choice2: "Respiration",
  choice3: "Transpiration",
  choice4: "Diffusion",
  answer: 2,
},
{
  quesion: "Which blood cells help in fighting infections?",
  choice1: "Red blood cells",
  choice2: "Platelets",
  choice3: "White blood cells",
  choice4: "Plasma",
  answer: 3,
},
{
  quesion: "Which enzyme is present in saliva?",
  choice1: "Pepsin",
  choice2: "Amylase",
  choice3: "Lipase",
  choice4: "Trypsin",
  answer: 2,
},
{
  quesion: "What is the basic structural and functional unit of life?",
  choice1: "Tissue",
  choice2: "Organ",
  choice3: "Cell",
  choice4: "Organ system",
  answer: 3,
},
{
  quesion: "Which gas is released during photosynthesis?",
  choice1: "Carbon dioxide",
  choice2: "Oxygen",
  choice3: "Nitrogen",
  choice4: "Hydrogen",
  answer: 2,
},
{
  quesion: "Which part of the brain controls balance and coordination?",
  choice1: "Cerebrum",
  choice2: "Medulla",
  choice3: "Cerebellum",
  choice4: "Hypothalamus",
  answer: 3,
},
{
  quesion: "Which hormone regulates blood sugar levels?",
  choice1: "Thyroxine",
  choice2: "Adrenaline",
  choice3: "Insulin",
  choice4: "Estrogen",
  answer: 3,
},
{
  quesion: "Which tissue connects bones to muscles?",
  choice1: "Ligament",
  choice2: "Tendon",
  choice3: "Cartilage",
  choice4: "Epithelium",
  answer: 2,
},
{
  quesion: "Which process allows movement of water across a semipermeable membrane?",
  choice1: "Diffusion",
  choice2: "Active transport",
  choice3: "Osmosis",
  choice4: "Translocation",
  answer: 3,
},
{
  quesion: "Which organ filters waste from the blood?",
  choice1: "Liver",
  choice2: "Lungs",
  choice3: "Kidneys",
  choice4: "Heart",
  answer: 3,
},
{
  quesion: "Which vitamin is produced when skin is exposed to sunlight?",
  choice1: "Vitamin A",
  choice2: "Vitamin B12",
  choice3: "Vitamin C",
  choice4: "Vitamin D",
  answer: 4,
},
{
  quesion: "Which blood vessel carries blood away from the heart?",
  choice1: "Vein",
  choice2: "Capillary",
  choice3: "Artery",
  choice4: "Venule",
  answer: 3,
},
{
  quesion: "Which structure controls the entry and exit of substances in a cell?",
  choice1: "Cell wall",
  choice2: "Cell membrane",
  choice3: "Nucleus",
  choice4: "Cytoplasm",
  answer: 2,
},
{
  quesion: "Which part of the flower produces pollen?",
  choice1: "Ovary",
  choice2: "Petal",
  choice3: "Anther",
  choice4: "Stigma",
  answer: 3,
},
{
  quesion: "Which pigment is responsible for photosynthesis?",
  choice1: "Hemoglobin",
  choice2: "Melanin",
  choice3: "Chlorophyll",
  choice4: "Carotene",
  answer: 3,
},
{
  quesion: "Which system controls voluntary actions in the body?",
  choice1: "Autonomic nervous system",
  choice2: "Peripheral nervous system",
  choice3: "Central nervous system",
  choice4: "Somatic nervous system",
  answer: 4,
},
{
  quesion: "Which process involves the division of body cells?",
  choice1: "Meiosis",
  choice2: "Mitosis",
  choice3: "Fertilization",
  choice4: "Replication",
  answer: 2,
},
{
  quesion: "Which organ stores bile?",
  choice1: "Pancreas",
  choice2: "Gall bladder",
  choice3: "Liver",
  choice4: "Stomach",
  answer: 2,
},
{
  quesion: "Which gas is essential for aerobic respiration?",
  choice1: "Nitrogen",
  choice2: "Carbon dioxide",
  choice3: "Oxygen",
  choice4: "Hydrogen",
  answer: 3,
},
{
  quesion: "Which blood group is known as the universal donor?",
  choice1: "A",
  choice2: "B",
  choice3: "AB",
  choice4: "O",
  answer: 4,
},
{
  quesion: "Which structure carries urine from kidney to bladder?",
  choice1: "Urethra",
  choice2: "Ureter",
  choice3: "Nephron",
  choice4: "Pelvis",
  answer: 2,
},
{
  quesion: "Which part of the eye controls the amount of light entering?",
  choice1: "Lens",
  choice2: "Retina",
  choice3: "Pupil",
  choice4: "Optic nerve",
  answer: 3,
},
{
  quesion: "Which component of blood helps in clotting?",
  choice1: "Plasma",
  choice2: "Red blood cells",
  choice3: "White blood cells",
  choice4: "Platelets",
  answer: 4,
},
{
  quesion: "Which civilization is known for building the pyramids?",
  choice1: "Mesopotamian",
  choice2: "Egyptian",
  choice3: "Indus Valley",
  choice4: "Chinese",
  answer: 2,
},
{
  quesion: "Who was the founder of the Maurya Empire?",
  choice1: "Ashoka",
  choice2: "Bindusara",
  choice3: "Chandragupta Maurya",
  choice4: "Bimbisara",
  answer: 3,
},
{
  quesion: "What was the main purpose of the Great Wall of China?",
  choice1: "Trade",
  choice2: "Defense",
  choice3: "Transportation",
  choice4: "Communication",
  answer: 2,
},
{
  quesion: "Which civilization developed the earliest known writing system?",
  choice1: "Egyptians",
  choice2: "Romans",
  choice3: "Greeks",
  choice4: "Sumerians",
  answer: 4,
},
{
  quesion: "Who was known as the 'Father of the Indian Constitution'?",
  choice1: "Jawaharlal Nehru",
  choice2: "B. R. Ambedkar",
  choice3: "Mahatma Gandhi",
  choice4: "Rajendra Prasad",
  answer: 2,
},
{
  quesion: "What was the main goal of the Non-Cooperation Movement?",
  choice1: "Armed rebellion",
  choice2: "Economic development",
  choice3: "Peaceful resistance",
  choice4: "Territorial expansion",
  answer: 3,
},
{
  quesion: "Which empire was ruled by Julius Caesar?",
  choice1: "Greek Empire",
  choice2: "Persian Empire",
  choice3: "Roman Empire",
  choice4: "Ottoman Empire",
  answer: 3,
},
{
  quesion: "What was the primary reason for the French Revolution?",
  choice1: "Foreign invasion",
  choice2: "Religious conflict",
  choice3: "Social and economic inequality",
  choice4: "Scientific revolution",
  answer: 3,
},
{
  quesion: "Which ancient city is associated with the Indus Valley Civilization?",
  choice1: "Babylon",
  choice2: "Harappa",
  choice3: "Rome",
  choice4: "Athens",
  answer: 2,
},
{
  quesion: "Who was the first Mughal emperor of India?",
  choice1: "Akbar",
  choice2: "Humayun",
  choice3: "Babur",
  choice4: "Shah Jahan",
  answer: 3,
},
{
  quesion: "What was the main feature of feudalism in medieval Europe?",
  choice1: "Democracy",
  choice2: "Land-based hierarchy",
  choice3: "Industrial production",
  choice4: "Trade unions",
  answer: 2,
},
{
  quesion: "Which movement emphasized the use of reason and science over tradition?",
  choice1: "Renaissance",
  choice2: "Enlightenment",
  choice3: "Romanticism",
  choice4: "Reformation",
  answer: 2,
},
{
  quesion: "Who led the Salt March as part of India’s freedom struggle?",
  choice1: "Subhas Chandra Bose",
  choice2: "Bhagat Singh",
  choice3: "Mahatma Gandhi",
  choice4: "Lala Lajpat Rai",
  answer: 3,
},
{
  quesion: "Which empire is known for its efficient road system and communication?",
  choice1: "Mughal Empire",
  choice2: "Roman Empire",
  choice3: "Gupta Empire",
  choice4: "Ottoman Empire",
  answer: 2,
},
{
  quesion: "What was the main objective of the Renaissance?",
  choice1: "Religious reform",
  choice2: "Humanism and revival of classical learning",
  choice3: "Colonial expansion",
  choice4: "Political revolution",
  answer: 2,
},
{
  quesion: "Which Indian ruler is remembered for promoting religious tolerance?",
  choice1: "Aurangzeb",
  choice2: "Akbar",
  choice3: "Shivaji",
  choice4: "Babur",
  answer: 2,
},
{
  quesion: "Which civilization is known as the 'Cradle of Democracy'?",
  choice1: "Roman",
  choice2: "Egyptian",
  choice3: "Greek",
  choice4: "Chinese",
  answer: 3,
},
{
  quesion: "What was the primary cause of World War I?",
  choice1: "Colonial disputes",
  choice2: "Alliance systems and nationalism",
  choice3: "Religious conflict",
  choice4: "Economic depression",
  answer: 2,
},
{
  quesion: "Which movement aimed to reform the Catholic Church?",
  choice1: "Renaissance",
  choice2: "Reformation",
  choice3: "Industrial Revolution",
  choice4: "Enlightenment",
  answer: 2,
},
{
  quesion: "Who was the leader of the Russian Revolution?",
  choice1: "Stalin",
  choice2: "Lenin",
  choice3: "Trotsky",
  choice4: "Gorbachev",
  answer: 2,
},
{
  quesion: "Which ancient trade route connected Asia and Europe?",
  choice1: "Spice Route",
  choice2: "Silk Road",
  choice3: "Amber Road",
  choice4: "Royal Road",
  answer: 2,
},
{
  quesion: "What was the main impact of the Industrial Revolution?",
  choice1: "Decline of cities",
  choice2: "Growth of agriculture",
  choice3: "Rise of factories and urbanization",
  choice4: "End of trade",
  answer: 3,
},
{
  quesion: "Which leader is associated with the policy of non-violence?",
  choice1: "Napoleon",
  choice2: "Abraham Lincoln",
  choice3: "Mahatma Gandhi",
  choice4: "Hitler",
  answer: 3,
},
{
  quesion: "Which empire was known for its naval dominance in the Mediterranean?",
  choice1: "Ottoman Empire",
  choice2: "Roman Empire",
  choice3: "Persian Empire",
  choice4: "Gupta Empire",
  answer: 2,
},
{
  quesion: "What was the main purpose of the United Nations after World War II?",
  choice1: "Colonial expansion",
  choice2: "Global peace and cooperation",
  choice3: "Economic domination",
  choice4: "Military alliances",
  answer: 2,
},

{
  quesion: "Which country recently became the most populous nation in the world?",
  choice1: "China",
  choice2: "India",
  choice3: "USA",
  choice4: "Indonesia",
  answer: 2,
},
{
  quesion: "Which organization is primarily responsible for maintaining international peace?",
  choice1: "NATO",
  choice2: "World Bank",
  choice3: "United Nations",
  choice4: "IMF",
  answer: 3,
},
{
  quesion: "Which country officially exited the European Union?",
  choice1: "France",
  choice2: "Germany",
  choice3: "Italy",
  choice4: "United Kingdom",
  answer: 4,
},
{
  quesion: "What is BRICS mainly formed to promote?",
  choice1: "Military alliance",
  choice2: "Economic cooperation",
  choice3: "Religious unity",
  choice4: "Environmental protection",
  answer: 2,
},
{
  quesion: "Which sea is crucial for global shipping between Europe and Asia?",
  choice1: "Baltic Sea",
  choice2: "Red Sea",
  choice3: "Black Sea",
  choice4: "Caspian Sea",
  answer: 2,
},
{
  quesion: "Which country controls the Panama Canal?",
  choice1: "USA",
  choice2: "Mexico",
  choice3: "Panama",
  choice4: "Colombia",
  answer: 3,
},
{
  quesion: "Which country launched a successful mission to the Moon’s south pole?",
  choice1: "USA",
  choice2: "China",
  choice3: "Russia",
  choice4: "India",
  answer: 4,
},
{
  quesion: "Which global body regulates international trade rules?",
  choice1: "IMF",
  choice2: "World Bank",
  choice3: "WTO",
  choice4: "UNESCO",
  answer: 3,
},
{
  quesion: "Which alliance was created mainly for collective defense?",
  choice1: "ASEAN",
  choice2: "SAARC",
  choice3: "BRICS",
  choice4: "NATO",
  answer: 4,
},
{
  quesion: "Which country is the world’s largest exporter of arms?",
  choice1: "Russia",
  choice2: "China",
  choice3: "France",
  choice4: "USA",
  answer: 4,
},
{
  quesion: "Which currency is used by most European Union countries?",
  choice1: "Dollar",
  choice2: "Pound",
  choice3: "Euro",
  choice4: "Franc",
  answer: 3,
},
{
  quesion: "Which region is known as the Horn of Africa?",
  choice1: "Northern Africa",
  choice2: "Western Africa",
  choice3: "Eastern Africa",
  choice4: "Southern Africa",
  answer: 3,
},
{
  quesion: "Which country leads the world in renewable energy capacity addition?",
  choice1: "Germany",
  choice2: "India",
  choice3: "China",
  choice4: "Norway",
  answer: 3,
},
{
  quesion: "Which conflict region involves Israel and Palestine?",
  choice1: "West Bank and Gaza",
  choice2: "Crimea",
  choice3: "Donbas",
  choice4: "Kashmir",
  answer: 1,
},
{
  quesion: "Which country has the highest military expenditure globally?",
  choice1: "China",
  choice2: "Russia",
  choice3: "USA",
  choice4: "UK",
  answer: 3,
},
{
  quesion: "Which organization manages global public health emergencies?",
  choice1: "UNICEF",
  choice2: "WHO",
  choice3: "FAO",
  choice4: "IMF",
  answer: 2,
},
{
  quesion: "Which country is central to the Belt and Road Initiative?",
  choice1: "Japan",
  choice2: "China",
  choice3: "South Korea",
  choice4: "Vietnam",
  answer: 2,
},
{
  quesion: "Which agreement aims to limit global temperature rise?",
  choice1: "Kyoto Protocol",
  choice2: "Paris Agreement",
  choice3: "Geneva Convention",
  choice4: "Montreal Protocol",
  answer: 2,
},
{
  quesion: "Which ocean carries the highest volume of global trade?",
  choice1: "Pacific Ocean",
  choice2: "Atlantic Ocean",
  choice3: "Indian Ocean",
  choice4: "Arctic Ocean",
  answer: 3,
},
{
  quesion: "Which country has veto power in the UN Security Council?",
  choice1: "India",
  choice2: "Japan",
  choice3: "Germany",
  choice4: "China",
  answer: 4,
},
{
  quesion: "Which country adopted Bitcoin as legal tender?",
  choice1: "USA",
  choice2: "Japan",
  choice3: "El Salvador",
  choice4: "India",
  answer: 3,
},
{
  quesion: "Which nation is often called the ‘world’s factory’?",
  choice1: "Germany",
  choice2: "South Korea",
  choice3: "China",
  choice4: "Japan",
  answer: 3,
},
{
  quesion: "Which region dominates global semiconductor manufacturing?",
  choice1: "Europe",
  choice2: "Middle East",
  choice3: "East Asia",
  choice4: "Africa",
  answer: 3,
},
{
  quesion: "Which continent has the youngest average population?",
  choice1: "Asia",
  choice2: "Africa",
  choice3: "Europe",
  choice4: "Australia",
  answer: 2,
},
{
  quesion: "Which international court settles disputes between countries?",
  choice1: "ICC",
  choice2: "ICJ",
  choice3: "UNHRC",
  choice4: "WTO",
  answer: 2,
},


];

    function setQuestion() {
       if(answerList.length>=Max_answers) return
         
      

      let q = getRandom();
     answerList.push(q)
     path++
     let obj={
      qno:q,
      rectify:false,
      submitted:false,
      selectedChoice:undefined,
         }
         evalu.push(obj)
     let dot=document.createElement("div")
     
     dot.textContent=""+answerList.length
     dot.classList.add("dot")
     dots.appendChild(dot)
     dotArray.push(dot)
     
      
      CurrentQuestion = qs[q];
      question.textContent = CurrentQuestion.quesion;
      choices.forEach((choice) => {
        let num = choice.dataset["number"];
        choice.textContent = CurrentQuestion["choice" + num];
      });
point=Array.from(document.getElementsByClassName("dot"))
dotNav()

    }

    setQuestion();

    function select() {
      for (let i = 0; i < chs.length; i++) {
        chs[i].addEventListener("click", () => {
          chs[i].firstElementChild.style.backgroundColor = "#2d5b84";
          selectedOption = i + 1;
          console.log(selectedOption + "   " + CurrentQuestion.answer);
          selectedChs = chs[i].firstElementChild;

          if (i === 0) {
            chs[1].firstElementChild.style.backgroundColor = "#56a5eb";
            chs[2].firstElementChild.style.backgroundColor = "#56a5eb";
            chs[3].firstElementChild.style.backgroundColor = "#56a5eb";
          }
          if (i === 1) {
            chs[0].firstElementChild.style.backgroundColor = "#56a5eb";
            chs[2].firstElementChild.style.backgroundColor = "#56a5eb";
            chs[3].firstElementChild.style.backgroundColor = "#56a5eb";
          }
          if (i === 2) {
            chs[0].firstElementChild.style.backgroundColor = "#56a5eb";
            chs[1].firstElementChild.style.backgroundColor = "#56a5eb";
            chs[3].firstElementChild.style.backgroundColor = "#56a5eb";
          }
          if (i === 3) {
            chs[0].firstElementChild.style.backgroundColor = "#56a5eb";
            chs[1].firstElementChild.style.backgroundColor = "#56a5eb";
            chs[2].firstElementChild.style.backgroundColor = "#56a5eb";
          }
        });
      }
    }
    select();
function Submit() {
  
    submit.addEventListener("click", () => {
      if(answered===Max_answers){
evaluation()    
  }
      chs.forEach((choice) => {
        choice.style.pointerEvents = "all";
      });
      if (isNaN(selectedOption)) {
        alert("please select an option");
        return;
      } else {
        if (CurrentQuestion.answer === selectedOption) {
          evalu[path].rectify=true
                    evalu[path].selectedChoice=selectedOption
evalu[path].submitted=true
          answers.answered = true;
          answered++;
          console.log(answers);
        } else {
          evalu[path].rectify=false
          evalu[path].selectedChoice=selectedOption
          evalu[path].submitted=true
          answers.answered = false;
          answered++;
          console.log(answers);
        }
      }
      chs.forEach((choice) => {
        choice.style.pointerEvents = "none";
      });
      selectedChs.style.backgroundColor = "#0b1823";
      selectedChs = undefined;

    console.log(evalu);
dotArray[path].classList.add("submitted");
    submit.style.pointerEvents = "none";

    });
     


}
Submit()


function Next() {

  
    next.addEventListener("click", () => {
        submit.style.pointerEvents = "all";

      if(path+1===Max_answers && countSubmitted()>=3){
        evaluation()
        return
      }
      if(path===Max_answers){
next.style.pointerEvents="none"
      }
if(path!=answerList.length-1){
   nxtQuestion = qs[answerList[++path]];
      question.textContent = nxtQuestion.quesion;
      choices.forEach((choice) => {
        let num = choice.dataset["number"];
        choice.textContent = nxtQuestion["choice" + num];
      });
} else{
  selectedOption = undefined;
      chs.forEach((choice) => {
        choice.style.pointerEvents = "all";
        choice.firstElementChild.style.backgroundColor = "#56a5eb";
      });
      setQuestion();
}
ResetUI(path)
dotted()

});


}
Next()


function Back(params) {

    back.addEventListener("click",()=>{
        submit.style.pointerEvents = "all";

 if(path==0){
  return
 }
 else{
  let prevQuestion = qs[answerList[--path]];
      question.textContent = prevQuestion.quesion;
      choices.forEach((choice) => {
        let num = choice.dataset["number"];
        choice.textContent = prevQuestion["choice" + num];
      });
       ResetUI(path)

 }
dotted()

    })

}

Back()

function ResetUI(opt) {
  

  chs.forEach(choice => {
                choice.firstElementChild.style.backgroundColor = "#56a5eb";
    choice.style.pointerEvents="all"
  });

    if(evalu[opt].submitted===true){
      submit.style.pointerEvents = "none";

      chs[evalu[opt].selectedChoice-1].firstElementChild.style.backgroundColor="#0b1823";
       chs.forEach(choice => {
    choice.style.pointerEvents="none"
  });
    } else{
         chs.forEach(choice => {
    choice.style.pointerEvents="all"
  });
    }

    
}

function dotted() {
  dotArray.forEach((dot, i) => {
    dot.classList.remove("current");

    if (evalu[i]?.submitted) {
      dot.classList.add("submitted");
    } else {
      dot.classList.remove("submitted");
    }
  });

  dotArray[path].classList.add("current");
}


dotted()


function dotNav() {
  
  point.forEach(dot => {
    dot.addEventListener("click",()=>{
         path=parseInt(dot.textContent)-1
        
      let nq = qs[evalu[path].qno];
      question.textContent = nq.quesion;
      choices.forEach((choice) => {
        let num = choice.dataset["number"];
        choice.textContent = nq["choice" + num];
      });
      dotted()
ResetUI(path)
  });

  });

}
dotNav()

function countSubmitted() {
  let i=0
evalu.forEach(obj => {
  if(obj.submitted===true){
    i++
  }
});
  return i
}
function countRectify() {
  let i=0
evalu.forEach(obj => {
  if(obj.rectify===true){
    i++
  }
});
  return i
}
let marks=document.getElementById("marks")

function evaluation() {
 


 container.style.display="none"


   /* display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
        justify-content: center; */
 result.style.display="flex"
 result.style.flexDirection="column"
 result.style.gap="30px"
 result.style.alignItems="center"
 result.style.justifyContent="center"
let crct=countRectify()
let score=0
if(crct===0){
  score=0
} else{
 score=(crct/Max_answers)*100

}

marks.textContent=score



  
}

let savebtn=document.getElementById("save")
let username=document.getElementById("inp")
let scores=JSON.parse(localStorage.getItem("scores"))||[]

savebtn.addEventListener("click",()=>{
  if(username.value==""){
   alert("please enter username")
  } else{
    let s=parseInt(marks.textContent)
    if(s==null){
      s=0
    }
    let obj={
    name:username.value,
    score:s
  }
  
scores.push(obj)

scores.sort((a, b) => b.score - a.score);
scores.splice(5)
console.log(scores);

localStorage.setItem("scores",JSON.stringify(scores))
username.value=""
username.style.pointerEvents="none"
savebtn.style.pointerEvents="none"

  }


})



