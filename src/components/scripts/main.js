import data from "./data";
console.log("history", history);
function addCommentParagraph(text) {
  console.log("=- addCommentParagraph", comments);
  let commentParagraph = document.createElement("li");
  commentParagraph.textContent = text;
  return commentParagraph;
}
function addCommentBlock(commentsToBlock) {
  console.log("2 addCommentBlock", commentsToBlock);
  // debugger;
  let commentTemplate = document.querySelector("#comment_template");
  let commentParent = commentTemplate.content.cloneNode(true);
  if (
    commentsToBlock != null &&
    commentsToBlock != undefined &&
    Array.isArray(commentsToBlock) &&
    commentsToBlock.length > 0
  ) {
    // commentParent.querySelector('#comment_template').remove();
    // return '';
  }
  commentParent
    .querySelector("textarea")
    .addEventListener("blur", function (e) {
      console.log("blur")
      let currPoet = e.target.closest(".poet__wrapper");
      let currPoetId = currPoet.dataset.id;
      currPoet
        .querySelector(".comment_list")
        .append(addCommentParagraph(this.value));

      if (localStorage.getItem(currPoetId) != null) {
        let savedComments = localStorage.getItem(currPoetId);
        let parsedComments = JSON.parse(savedComments);
        parsedComments.push(this.value);
        localStorage.setItem(currPoetId, JSON.stringify(parsedComments));
      } else {
        localStorage.setItem(currPoetId, JSON.stringify([this.value]));
      }

      e.target.value = "";
    });
    
    console.log("перед if ==>", commentsToBlock);
  if (
    commentsToBlock != null &&
    commentsToBlock != undefined &&
    Array.isArray(commentsToBlock) &&
    commentsToBlock.length > 0
  ) {
    console.log("was also here ", commentsToBlock);
    commentsToBlock.forEach((item) => {
      let comment = document.createElement("li");
      comment.classList.add("comment_text");
      comment.textContent = item;
      commentParent.querySelector(".comment_list").append(comment);
    });
  } else if ( typeof(commentsToBlock) == 'string' ){
    console.log('----------------------------------',document.querySelector('#popap__poet_block'));
    // document.querySelector('#popap__poet_block .comment_block:nth-child(2)').remove();
  }
  else{
    console.log("tyt", commentsToBlock);
    let summary = commentParent.querySelector("summary");
    summary.textContent = "Дадаць каментарыi";
    summary.addEventListener("click", function onceChangeTitle(e) {
      console.log("onceChangeTitle");
      summary.textContent = "Каментарыi";
      summary.removeEventListener("click", onceChangeTitle);
    });
  }

  return commentParent;
}
function createPoetBlock(name, descr, link, id) {
  console.log("1 createPoetBlock");
  name = !name ? "Name not found" : name;
  descr = !descr ? "Description not found" : descr;
  link = !link ? "#Link_not_found" : link;
  id = id == null || id == undefined ? data.length++ : id;
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
  if (localStorage.getItem(id) != null) {
    console.log("Добавляем блок с комментариями");
    contentWrap.append(addCommentBlock(JSON.parse(localStorage.getItem(id))));
  }

  mainWrap.append(contentWrap);
  return mainWrap;
}

function showMainPoetsBlock(allPoetsData) {
  let poets_section = document.querySelector("#poets_section");
  allPoetsData.map((item) => {
    let { name, description, src, id } = item;
    let poetBlock = createPoetBlock(name, description, src, id);
    function showPopapHandler(e) {
      e.stopPropagation();
      showPopUp(e, ".poet__wrapper");
    }
    poetBlock.addEventListener("click", showPopapHandler);
    if (localStorage.getItem(id) != null) {
      poetBlock.removeEventListener("click", showPopapHandler);
    }
    poets_section.append(poetBlock);
  });
}

function showPopUp(e, near, comments) {
  console.log("3 showPopUp", comments);
  let currPoetData = data.find(
    (item) => item.id == e.target.closest(near).dataset.id
  );
  let { name, description, src, id } = currPoetData;
  let popap = document.createElement("div");
  popap.classList.add("popap_wrap");
  popap.setAttribute("id", "popap_window");
  let currPoet = createPoetBlock(name, description, src, id, [
    "frist coomm",
    "second",
  ]);
  currPoet.setAttribute("id", "popap__poet_block");

  currPoet
    .querySelector(".poet_content__wrapper")
    .append(addCommentBlock(comments));

  popap.append(currPoet);

  document.body.append(popap);

  document.addEventListener("click", function removePopapListener(e) {
    if (
      e.target.closest("#popap__poet_block") == null &&
      e.target.nodeName != "TEXTAREA" &&
      document.querySelector("#popap_window")
    ) {
      document.querySelector("#popap_window").remove();
      document.removeEventListener("click", removePopapListener);
    }
  });

  document.addEventListener("keydown", function keyDownHandler(e) {
    if (
      e.keyCode == 27 &&
      e.target.closest("#popap__poet_block") == null &&
      document.querySelector("#popap_window")
    ) {
      // код клавиши Escape, но можно использовать e.key
      document.querySelector("#popap_window").remove();
      document.removeEventListener("click", keyDownHandler);
    }
  });
}

function createPoetListItem(name, src, id) {
  console.log("-1 createPoetListItem");
  let listItem = document.createElement("li");
  listItem.classList.add("listPoets__item", "li_item");
  let textWrap = document.createElement("p");
  textWrap.classList.add("listPoets__text");
  textWrap.textContent = name;
  listItem.append(textWrap);
  let listIcon = document.createElement("img");
  listIcon.setAttribute("src", src);
  listIcon.setAttribute("width", 50);
  listIcon.setAttribute("height", 50);
  listItem.prepend(listIcon);
  listItem.setAttribute("data-id", id);
  listItem.addEventListener("click", (e) => {
    e.stopPropagation();
    //trouble is here!
    showPopUp(e, ".listPoets__item",localStorage.getItem(id));
  });
  return listItem;
}

function setSorting(type) {
  document.querySelector("#listPoets").remove();
  if (type === "от А до Я") {
    showListOfPoets(
      data.toSorted(function (a, b) {
        let nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase();
        return nameA.localeCompare(nameB, "ru");
      })
    );
  } else if (type === "от Я до А") {
    showListOfPoets(
      data.toSorted(function (a, b) {
        let nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase();
        return nameB.localeCompare(nameA, "ru");
      })
    );
  } else {
    showListOfPoets(data);
  }
}

function createSortingBlock() {
  let sortWrap = document.createElement("div");
  sortWrap.classList.add("sorting_block");
  let select = document.createElement("select");

  let opt = document.createElement("option");
  opt.textContent = "Без сортировки";
  select.append(opt);
  opt = document.createElement("option");
  opt.textContent = "от А до Я";
  select.append(opt);
  opt = document.createElement("option");
  opt.textContent = "от Я до А";
  select.append(opt);

  select.addEventListener("change", function (e) {
    setSorting(this.value);
  });
  sortWrap.append(select);
  return sortWrap;
}

function showListOfPoets(allPoetsData) {
  console.log("0 showListOfPoets");
  let listPoets = document.createElement("ul");
  listPoets.classList.add("listPoets", "grid");
  listPoets.setAttribute("id", "listPoets");

  allPoetsData.map((item) => {
    const { name, src, id } = item;
    listPoets.append(createPoetListItem(name, src, id));
  });
  let parent = document.querySelector("#list_section");
  parent.append(listPoets);
}

document.addEventListener("DOMContentLoaded", () => {
  let list_section = document.querySelector("#list_section");
  let poets_section = document.querySelector("#poets_section");

  document
    .querySelector("#poets_section__link")
    .addEventListener("click", function () {
      if (!poets_section.childNodes.length) {
        showMainPoetsBlock(data);
      }
      list_section.innerHTML = "";
    });
  document
    .querySelector("#list_section__link")
    .addEventListener("click", function () {
      if (!list_section.childNodes.length) {
        showListOfPoets(data);
        list_section.prepend(createSortingBlock());
      }

      poets_section.innerHTML = "";
    });
});
