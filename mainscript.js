// all issued fetch and json konrchi
const loadAllIssues =()=>{
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res => res.json())
    .then(data => displayAllIssues(data.data))
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
    card.classList= `card bg-base-100 w-auto shadow-md ${topColorBorder}`;
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
    <div class="flex items-center gap-2">
    <!-- BUG badge -->
    <div class="badge badge-error flex items-center gap-1">
    <i class="fa-solid fa-bug"></i>
    <span>BUG</span>
    </div>
    <!-- HELP WANTED badge -->
    <div class="badge badge-warning flex items-center gap-1 whitespace-nowrap">
    <i class="fa-solid fa-life-ring"></i>
    <span>HELP WANTED</span>
    </div>
  </div>
    <hr>
    <div class="display-none">
        <p>#${issue.id} by ${issue.author}</p>
        <p>${issue.createdAt}</p>
      </div>
      </div>
      </div>
    `;
    // 3 append in container
    issuedContainer.appendChild(card);
});

}

loadAllIssues();