const milestonesData = JSON.parse(data).data

// load course milestones data

function loadMilestones() {
    const milestones = document.querySelector(".milestones")

    milestones.innerHTML = `
  ${
        milestonesData.map(function (milestone) {
            return `<div class="milestone border-b">
            <div class="flex">
              <div class="checkbox"><input type="checkbox" /></div>
              <div onclick="openMilestone(this, ${milestone._id})">
                <p>
                  ${milestone.name}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>
            <div class="hidden_panel">
              ${milestone.modules.map(function(module){
                return `<div class="module border-b">
                <p>${module.name}</p>
              </div>`
              }).join("")}
            </div>
          </div>
                    `
        }).join("")
    }`
}

function openMilestone (milestoneElement, id){
  const currentPanel = milestoneElement.parentNode.nextElementSibling;
  const shownPanel = document.querySelector(".show")
  const active = document.querySelector(".active")
  
  // Remove previous show class if any [other than clicked one]
  if(!currentPanel.classList.contains("show") && shownPanel){
    shownPanel.classList.remove("show")
    
  }

  // Remove previous show class if any [other than clicked one]
  if(active && !milestoneElement.classList.contains("active")){
    active.classList.remove("active");
  }

//toggle current clicked on class
  currentPanel.classList.toggle("show")
  milestoneElement.classList.toggle("active")

  //Show images corresponding milestone
  showMilestone(id)
}

function showMilestone(id){
  const milestoneImage = document.querySelector(".milestoneImage")
  const name = document.querySelector(".title")
  const details = document.querySelector(".details")

  milestoneImage.style.opacity = "0";
  milestoneImage.src = milestonesData[id].image;
  name.textContent = milestonesData[id].name;
  details.textContent = milestonesData[id].description;
  
}

// listen for hero images
const milestoneImage = document.querySelector(".milestoneImage")
milestoneImage.onload = function(){
  this.style.opacity = "1"
}

loadMilestones()
