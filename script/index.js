const loadLessons=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res=>res.json())
    .then((json) => displayLessons(json.data))
};

const loadLevelWord=(id)=>{
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/levels/${id}`
    console.log(url); 
    fetch(url)
    .then((res)=>res.json())
    .then((data) =>displayLevelWord(data.data));
};

const displayLevelWord = (words)=>{
   const wordContainer = document.getElementById("word-container");
   wordContainer.innerHTML= "";

   words.forEach((word) => {
    console.log(word);
    const card=document.createElement("div");
    card.innerHTML=`
     <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5">
                <h2>Eager</h2>
                <p>Meaning & Pronunciation</p>
                <div>
                    "আগ্রহী / ইগার"
                </div>
                </div>
    `;
    wordContainer.appendChild(card);
   });  
  
};



const displayLessons=(lessons)=>{
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML= " "
    for(let lesson of lessons){
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML=`
        <button onclick="loadLevelWord(${lesson.level_no})" href="" class="btn btn-primary btn-outline"> <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</button>
        `;

        levelContainer.append(btnDiv);
    }

};
loadLessons();


