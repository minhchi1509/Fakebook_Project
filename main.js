var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Navigation bar homepage, friend, watch, group,... control
const homePageChildrenList = document.getElementById("Homepage").children;
for (let x of homePageChildrenList) {
    x.onclick = function () {
        for (let y of homePageChildrenList) {
            y.classList.remove("before:content-['']", "before:absolute", "before:bottom-[-6px]", "before:bg-[#1B74E4]", "before:w-full", "before:h-[5px]");
            if (!y.classList.contains("hover:bg-[#F2F2F2]")) { //Khong active
                y.classList.add("hover:bg-[#F2F2F2]");
                if (y.children[0].src) {
                    if (y.children[0].src.includes("Filled"))
                        y.children[0].src = y.children[0].src.replace("Filled", "Rounded");
                }
            }
        }
        if (x.id != "listHomepageButton" && x.id != "listHomepagePopup" && x.id != "leftMenuControlButton") {
            x.classList.add("before:content-['']", "before:absolute", "before:bottom-[-6px]", "before:bg-[#1B74E4]", "before:w-full", "before:h-[5px]");
            x.classList.remove("hover:bg-[#F2F2F2]");
            if (x.children[0].src) {
                if (x.children[0].src.includes("Rounded"))
                    x.children[0].src = x.children[0].src.replace("Rounded", "Filled");
            }
        }
    }
}

//Searching Popup Control
const searchingPopup = document.getElementById("searchingPopup");
document.getElementById("searchingBar").onclick = function () {
    searchingPopup.style.visibility = "visible";
}

document.getElementById("searchingPopup").getElementsByTagName("img")[0].onclick = function () {
    document.getElementById("searchingBar").getElementsByTagName("input")[0].value = document.getElementById("searchingPopup").getElementsByTagName("input")[0].value;
    searchingPopup.style.visibility = "hidden";
}

function hiddenSearchingPopup(event) {
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    let l = searchingPopup.offsetLeft, r = searchingPopup.offsetLeft + searchingPopup.offsetWidth;
    let t = searchingPopup.offsetTop, b = searchingPopup.offsetTop + searchingPopup.offsetHeight;
    if (mouseX < l || mouseX > r || mouseY < t || mouseY > b) {
        document.getElementById("searchingBar").getElementsByTagName("input")[0].value = document.getElementById("searchingPopup").getElementsByTagName("input")[0].value;
        searchingPopup.style.visibility = "hidden";
    }
}
document.addEventListener("click", hiddenSearchingPopup);

//Control homepage, friend, watch, group in small screen
const listHomepagePopup = document.getElementById("listHomepagePopup");
document.getElementById("listHomepageButton").onclick = function () {
    listHomepagePopup.classList.toggle("hidden");
}

//Watch more menu items on leftMenu
document.getElementById("watchMoreTopButton").onclick = function () {
    document.getElementById("leftMenuTopMore").classList.toggle("hidden");
    document.getElementById("watchMoreTopButton").classList.toggle("hidden");
}

document.getElementById("hiddenLeftMenuTop").onclick = function () {
    document.getElementById("leftMenuTopMore").classList.toggle("hidden");
    document.getElementById("watchMoreTopButton").classList.toggle("hidden");
}

document.getElementById("watchMoreBottomButton").onclick = function () {
    document.getElementById("leftMenuBottomMore").classList.toggle("hidden");
    document.getElementById("watchMoreBottomButton").classList.toggle("hidden");
}

document.getElementById("hiddenLeftMenuBottom").onclick = function () {
    document.getElementById("leftMenuBottomMore").classList.toggle("hidden");
    document.getElementById("watchMoreBottomButton").classList.toggle("hidden");
}

//Control leftMenu in small screen
document.getElementById("leftMenuControlButton").onclick = function () {
    let leftMenu = document.getElementById("leftMenu");
    let newFeeds = document.getElementsByClassName("newFeeds")[0];
    leftMenu.classList.toggle("hidden");
    newFeeds.classList.toggle("hidden");
}

//Story, Reels, Room meeting control
const storyReelsTitleList = document.getElementById("storyReelsTitle").children;
const storyReelsContentList = document.getElementById("storyReelsContent").children;
for (let i = 0; i < storyReelsTitleList.length; i++) {
    storyReelsTitleList[i].onclick = function () {
        for (let y of storyReelsTitleList) {
            y.classList.remove("before:content-['']", "before:absolute", "before:bottom-[-6px]", "before:bg-[#1B74E4]", "before:w-full", "before:h-[5px]", "text-[#1B74E4]");
            if (!y.classList.contains("hover:bg-[#F2F2F2]")) { //Khong active
                y.classList.add("hover:bg-[#F2F2F2]");
            }
        }
        storyReelsTitleList[i].classList.add("before:content-['']", "before:absolute", "before:bottom-[-6px]", "before:bg-[#1B74E4]", "before:w-full", "before:h-[5px]", "text-[#1B74E4]");
        storyReelsTitleList[i].classList.remove("hover:bg-[#F2F2F2]");
        for (let x of storyReelsContentList)
            x.style.visibility = "hidden";
        storyReelsContentList[i].style.visibility = "visible";
    }
}
