const input = document.querySelector(".todo-list__input");
const addBtn = document.querySelector(".todo-list__btn");
const list = document.querySelector(".todo-list__ul");


addBtn.addEventListener("click", () => {
    let text = input.value;

    if (text === "") {
        return;
    }
    const li = document.createElement("li");
    li.textContent = text;
    li.classList.add("li");

    list.append(li);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.classList.add("delete-btn");


    const activeBtn = document.createElement("button");
    activeBtn.textContent = "Сделано";
    activeBtn.classList.add("active-btn");

    li.append(activeBtn);
    li.append(deleteBtn);

    input.value = "";

    activeBtn.addEventListener("click", () => {
        li.classList.toggle("active");
    })

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });
});