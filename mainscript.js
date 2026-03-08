
// badge ar dynamic ar jonno color and icon funtion created
const createdLabels = (arr)=>{
    return arr.map( (el)=> {
        
        let  labelsBages = "";
        let labelsIcon = "";
        if(el =="bug"){
           labelsBages ="badge badge-error rounded-full";
           labelsIcon =`<i class="fa-solid fa-bug"></i>` ;
        }
         else if(el =="help wanted"){
           labelsBages ="badge badge-warning rounded-full";
           labelsIcon =`<i class="fa-solid fa-life-ring"></i>` ;
        }
         else if(el =="enhancement"){
           labelsBages ="badge badge-success rounded-full";
           labelsIcon =`<i class="fa-solid fa-rocket"></i>` ;
        }
         else if(el =="good first issue"){
           labelsBages ="badge bg-[#16A120] rounded-full";
           labelsIcon =`<i class="fa-regular fa-star"></i>` ;
        }
         else if(el =="documentation"){
           labelsBages ="badge badge-primary rounded-full";
           labelsIcon =`<i class="fa-solid fa-file-export"></i>` ;
        }
        return `<div class="${labelsBages} flex items-center gap-1 whitespace-nowrap">
        ${labelsIcon}
        <span>${el}</span>
        </div>
        `;
    }).join(" ");
}
// showLoadingSpinner function call
function showLoadingSpinner(){
    loadingSpinner.classList.remove("hidden");
    loadingSpinner.classList.add("grid");
}
// hiddenLoadingSpinner function call
function hiddenLoadingSpinner(){
    loadingSpinner.classList.add("hidden");
    
}
// all issued fetch and json konrchi
let allIssues =[];
const loadingSpinner =document.getElementById("loading-spinner")
const loadAllIssues =()=>{
    // add loading spinner (step1= start) remove->hidden call and add (grid) 
    showLoadingSpinner();
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res => res.json())
    .then(data => {
        allIssues = data.data;
        displayAllIssues(allIssues);
// (step2=end) loading ar por hidden class add
   hiddenLoadingSpinner();
   setsActiveBtn(document.getElementById("all-btn"));
});
}
// set active btn function
function setsActiveBtn(button){
    document.getElementById("All-btn").classList.remove("btn-active");
    document.getElementById("Open-btn").classList.remove("btn-active");
    document.getElementById("close-btn").classList.remove("btn-active");

    button.classList.add("btn-active");
}

//  all btn display 
function AllIssuesShow(btn){
    displayAllIssues(allIssues);
    setsActiveBtn(btn);
}
//  open btn display and active
function openIssuesShow(btn){
    const openIssuesBtn = allIssues.filter(issue => issue.status === "open")
    
    displayAllIssues(openIssuesBtn);
    setsActiveBtn(btn);
}
// close btn display and active
function closeIssuesShow(btn){
    const closeIssuesBtn = allIssues.filter(issue => issue.status === "closed")
    
    displayAllIssues(closeIssuesBtn);
    setsActiveBtn(btn);
}
const displayAllIssues =(issues)=>{
// console.log(issued)
//1 get the container and emty hobe
const issuedContainer =document.getElementById('issues-container');
issuedContainer.innerHTML = ''; 
//2 loop and cerated div element and add class list  
issues.forEach(issue => {
    // damo data api 
//     "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],

// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"
// },
            //border color add condition status == --> open hoi ==>top border color change[#00A96e]
            // and status ==-->close hoi ==> top border color [#A855F7] 
    let topColorBorder ;
    if(issue.status === "open"){
        topColorBorder ="border-t-4 border-[#00A96e]"
    }else if(issue.status === "closed"){
        topColorBorder = "border-t-4 border-[#A855F7]"
    };
    const card = document.createElement("div");
    card.classList = `card bg-base-100 p-2 w-auto shadow-md ${topColorBorder}`;
    // priority ar color change condition 
    let priorityColor;
    if(issue.priority == "high"){
        priorityColor = "badge badge-error";
    }else if(issue.priority == "medium"){
        priorityColor = "badge badge-warning";
    }else if(issue.priority == "low"){
        priorityColor ="badge badge-ghost";
    }
    // card ar innhtml created
    card.innerHTML=`
         <div class="card-body">
    <div class="top-icons flex justify-between">
          <span><img src="./assets/Open-Status.png" alt="Open-Status-icon"></span>
          <div class="${priorityColor}">${issue.priority}</div>
        </div>
        <!--issues title and paragraph -->
    <h2 class="card-title">${issue.title} </h2>
    <p class="line-clamp-2">${issue.description}</p>
    <div class="flex items-center gap-1">
    <div class=" flex items-center gap-[2px] whitespace-nowrap">
    ${createdLabels(issue.labels)}
    </div>
     
    </div>
      <div class="flex-wrap items-center justify-between gap-[4px] mt-2 text-gray-500 text-sm whitespace-nowrap">
        <p>#${issue.id} by ${issue.author}</p>
        <p>${issue.createdAt}</p>
      </div>
      </div>
    `;
    // 3 append in container
    issuedContainer.appendChild(card);
});
}
loadAllIssues();