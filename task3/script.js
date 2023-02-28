const questions=[
    {
        'que':'Which city is regarded as a Queen of Adriatic sea?',
        'a':':London',
        'b':'Paris',
        'c':'Rome',
        'd':'Venice',
        'correct':'d'
    },
    {
        'que':'What is name of the largest desert of the world?',
        'a':'Sahara',
        'b':'Thar',
        'c':'Thal',
        'd':'Vatican',
        'correct':'a'
    },
    {
        'que':'Which river flows behind the Taj Mahal?',
        'a':'Yamuna',
        'b':'Narmada',
        'c':'Indus',
        'd':'Beas',
        'correct':'a'
    },
    {
        'que':'Who among the following wrote Sanskrit grammar?',
        'a':'Kalidasa',
        'b':'Charak',
        'c':'Panini',
        'd':'Aryabhatt',
        'correct':'c'
    },
    {
        'que':'The metal whose salts are sensitive to light is?',
        'a':'Zinc',
        'b':'Silver',
        'c':'Copper',
        'd':'Aluminium',
        'correct':'b'
    },
    {
        'que':'Tsunamis are not caused by',
        'a':'Hurricanes',
        'b':'Earthquakes',
        'c':'Undersea landslides',
        'd':'Volcanic eruptions',
        'correct':'a'
    },
    {
        'que':'The hottest planet in the solar system?',
        'a':'Mercury',
        'b':'Venus',
        'c':'Mars',
        'd':'Jupiter',
        'correct':'b'
    },
    {
        'que':'Which of the following is not a nuclear power center?',
        'a':'Narora',
        'b':'Kota',
        'c':'Chamera',
        'd':'Kakrapara',
        'correct':'c'
    },
    {
        'que':'Where can Coral reefs be found in India?',
        'a':'The Malabar Coast',
        'b':'Rameshwaram',
        'c':'Trivandrum',
        'd':'Mahabalipuram',
        'correct':'b'
    },
    {
        'que':'The United Nations Organization has its Headquarters at',
        'a':'Bali',
        'b':'Hague',
        'c':'New York',
        'd':'Washington DC',
        'correct':'c'
    }
]
let index=0;
let total=questions.length;
let right=0,wrong=0;
const optioninput=document.querySelectorAll(".options")
const queBox=document.getElementById("queBox")
var prebtn = document.getElementById("btn1")
var qno=document.getElementById("qno")

let totaltime=60;
let min=0;
let sec=0;
let counter=0;

let timer=setInterval(function(){
    counter++;
    min=Math.floor((totaltime-counter)/60);
    sec=totaltime-min*60-counter;
    console.log(min);
    console.log(sec);
    document.getElementById('time').innerHTML=min +":"+ sec;
    if(counter==totaltime){
        alert("Time's up!!");
        return endQuiz()
        clearInterval(timer);
    }
},1000);

const loadquestion=()=>{

    if(index==total){
        return endQuiz()
    }
    reset();
    const data=questions[index]
    console.log(data)
    queBox.innerText=`${index+1}) ${data.que}`;
    document.getElementById('qno').innerHTML=`
        (${index+1} of ${total})`

    optioninput[0].nextElementSibling.innerText=data.a;
    optioninput[1].nextElementSibling.innerText=data.b;
    optioninput[2].nextElementSibling.innerText=data.c;
    optioninput[3].nextElementSibling.innerText=data.d;
}

const submitquiz=()=>{
    const data=questions[index]
    const ans=getAnswer()
    if(ans==data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    console.log(right);
    //console.log(index);
    if(index>=1){
        prebtn.disabled=false;
    }
    else
    {
        prebtn.disabled=true;
    }
    loadquestion();
    return;
}

const previous=()=>{
    index--;
    right--;
    //console.log(index);
    loadquestion();
    console.log(right);
    return;
}

const getAnswer=()=>{
    let answer;
    optioninput.forEach(
        (input)=>{
            if(input.checked){
               answer= input.value;
            }
        }
    )
    return answer;
}

const reset=()=>{
    optioninput.forEach(
        (input)=>{
            input.checked=false
        }
    )
}

const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
    <i class="fa-solid fa-party-horn"></i>
    <i class="fa-sharp fa-solid fa-gift"></i>
    <h3>Thank You !!</h3>
    <h3>You've completed the Quiz</h3>
    <h2 class="ans">${right} out of ${total} are correct </h2>
    <a href="index.html" class="replay">Play Again</a>
    <a href="start.html" class="quite">Quit Quiz</a>
    </div>`
}

loadquestion();
