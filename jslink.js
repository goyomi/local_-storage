let allMemo = JSON.parse(localStorage.getItem("allMemo"));

allMemo = allMemo ?? [];

render();

function saveNote() {
  const inpSchedule = document.getElementById("inpSchedule");

  allMemo.push({ inpSchedule, len: allMemo.length })

  localStorage.setItem("allMemo", JSON.stringify(allMemo));
  render();
}

function render() {
  const add = document.getElementById("add");
  add.innerHTML = "";
}