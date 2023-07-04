import data from "./data";

function createPoetBlock(name, descr, link, id) {
  if (!name) {
  }
  if (!descr) {
  }
  if (!link) {
  }
  let mainWrap = document.createElement("div");
  mainWrap.classList.add("poet__wrapper");
  mainWrap.setAttribute("data-id", id);
  let imgWrap = document.createElement("div");
  imgWrap.classList.add("poet_img__wrapper");
  let img = document.createElement("img");
  img.setAttribute("src", link);
  img.setAttribute("width", "500");
  img.setAttribute("height", "300");
  img.classList.add("poet_img");
  imgWrap.append(img);
  mainWrap.append(imgWrap);

  let contentWrap = document.createElement("div");
  contentWrap.classList.add("poet_content__wrapper");

  let poetName = document.createElement("h3");
  poetName.classList.add("poet_name");
  poetName.textContent = name;

  let poetDescr = document.createElement("p");
  poetDescr.classList.add("poet_description");
  poetDescr.textContent = descr;

  contentWrap.append(poetName, poetDescr);
  mainWrap.append(contentWrap);
  return mainWrap;
}

function showPoetsBlock(allPoetsData) {
  let poets_section = document.querySelector("#poets_section");
  allPoetsData.map((item) => {
    let { name, description, src, id } = item;
    let poetBlock = createPoetBlock(name, description, src, id);
    poetBlock.addEventListener("click", (e) => {
      e.stopPropagation();
      showPopUp(e, ".poet__wrapper");
    });
    poets_section.append(poetBlock);
  });
}

function showPopUp(e, near) {
  let currPoetData = data.find(
    (item) => item.id == e.target.closest(near).dataset.id
  );
  let { name, description, src, id } = currPoetData;
  let popap = document.createElement("div");
  popap.classList.add("popap_wrap");
  popap.setAttribute("id", "popap_window");
  let currPoet = createPoetBlock(name, description, src, id);
  currPoet.setAttribute("id", "popap__poet_block");
  popap.append(currPoet);

  document.body.append(popap);

  document.addEventListener("click", function removePopapListener(e) {
    e.preventDefault();

    if (
      e.target.closest("#popap__poet_block") == null &&
      document.querySelector("#popap_window")
    ) {
      document.querySelector("#popap_window").remove();
      document.removeEventListener("click", removePopapListener);
    }
  });

  document.addEventListener('keydown', function keyDownHandler(e) {
  	if( e.keyCode == 27 
      && e.target.closest("#popap__poet_block") == null 
      && document.querySelector("#popap_window"
      )) { // код клавиши Escape, но можно использовать e.key
        document.querySelector("#popap_window").remove();
        document.removeEventListener("click", keyDownHandler);
  	}
  });
}

function createPoetListItem(name, src, id) {
  let listItem = document.createElement("li");
  listItem.classList.add("listPoets__item", "li_item");
  listItem.textContent = name;
  let listIcon = document.createElement("img");
  listIcon.setAttribute("src", src);
  listIcon.setAttribute("width", 50);
  listIcon.setAttribute("height", 50);
  listItem.prepend(listIcon);
  listItem.setAttribute("data-id", id);
  listItem.addEventListener("click", (e) => {
    e.stopPropagation();
    showPopUp(e, ".listPoets__item");
  });
  return listItem;
}

function showListOfPoets(allPoetsData) {
  console.log("data", allPoetsData);
  let listPoets = document.createElement("ul");
  listPoets.classList.add("listPoets", "grid");
  listPoets.setAttribute("id", "listPoets");

  allPoetsData.map((item) => {
    const { name, src, id } = item;
    listPoets.append(createPoetListItem(name, src, id));
  });

  document.querySelector("#list_section").append(listPoets);
}

document.addEventListener("DOMContentLoaded", () => {
  let list_section = document.querySelector("#list_section");
  let poets_section = document.querySelector("#poets_section");

  document
    .querySelector("#poets_section__link")
    .addEventListener("click", function () {
      if (!poets_section.childNodes.length) {
        showPoetsBlock(data);
      }
      list_section.innerHTML = '';

    });
  document
    .querySelector("#list_section__link")
    .addEventListener("click", function () {
      if (!list_section.childNodes.length) {
        showListOfPoets(data);
      }
     
      poets_section.innerHTML = '';

    });
});
