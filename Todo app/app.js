// const todo_title = document.getElementById("todo_title");
// const todo_priority = document.getElementById("todo_priority");
// const add_todo_btn = document.getElementById("add_todo");
// const todos_collection = document.getElementById("todos_collection");

// const todo_list = JSON.parse(localStorage.getItem("todos")) || [];

// let is_update = false;  

// const update_local_storage = () =>{
//   localStorage.setItem("todos",JSON.stringify(todo_list));
// }

// const handle_add_todo_btn = () => {
//   todo_list.push({
//     title: todo_title.value,
//     todo_priority: todo_priority.value,
//     is_compeleted: false,
//   });
//   update_local_storage();
//   todo_title.value = "";
//   todo_priority.value = "Default";
//   console.log(todo_list);
//   display_todos();
// };

// const display_todos = () => {
//   todos_collection.innerHTML = "";
//   todo_list.map((todo, i) => {
//     const div = document.createElement("div");
//     div.innerHTML = `<div class="shadow rounded p-3 w-100 d-flex justify-content-center mt-3 border ${todo.todo_priority == "high" ? "border-danger" : todo.todo_priority == "low" ? " border-success " : "border-warning"}  ">
//             <div class="form-ckeck w-100  d-flex justify-content-between " >
              
//               <div>
//                 <input ${todo.is_compeleted ? "ckecked" : ""}
//                   type="checkbox"
//                   class="form-check-input"
//                   id="exampleCheck1"
//                 />
//                 ${
//                   todo.is_compeleted
//                     ? `<span class="mx-3 fs-3 text-decoration-line-through">${todo.title}</span>`
//                     : `<span class="mx-3 fs-3">${todo.title}</span>`
//                 }

//               </div>

//               <div class="justify-content-between w-25 text-end flex-end ">
//                 <button  onclick="delete_todo(${i})"  type="button" class="btn btn-outline-danger mt-1">
//                   delete
//                 </button>
//                 <button type="button" class="btn btn-info mt-1">
//                   <i onclick="update_todo(${i})" class="ri-edit-2-line "></i>
//                 </button>
//               </div>
//             </div>
//           </div>`;
//     todos_collection.append(div);
//   });
// };

// const delete_todo = (i) => {
//   todo_list.splice(i, 1);
//   update_local_storage();
//   display_todos();
// };

// const update_todo = (i) =>{
//   todo_title.value = todo_list[i].title;
//   todo_priority.value = todo_list[i].todo_priority;
//   is_update = true
//   add_todo_btn.textContent = "Update Todo"
//   add_todo_btn.addEventListener('click',() => handle_update_todo(i))
// }

// const handle_update_todo = () =>{
//   todo_list[i] = ({
//     title:todo_title.value,
//     todo_priority:todo_priority.value,
//     is_compeleted : false
//   })
//   update_local_storage ();
//   todo_title.value = "";
//   todo_priority.value = "Default"; 
//   display_todos();
// }

// if (is_update){
  
// }
// else{
//   add_todo_btn.addEventListener("click", handle_add_todo_btn);

// }


// display_todos();


const todo_title = document.getElementById("todo_title");      // ham todo_title ko get kar rahe hai
const todo_priority = document.getElementById("todo_priority"); //ham todo_priority ko get kar rahe hai 
const add_todo_btn = document.getElementById("add_todo");       // ham add_todo button  ko get kar rahe hai
const todos_collection = document.getElementById("todos_collection"); //ham todos_collection ko get kar rahe hai

const todo_list = JSON.parse(localStorage.getItem("todos")) || []; //ham todos ko json.parse convert kar ke local storage se get kar rahe hai or todos_list mai add kar rahe hai or mt array ka error nikal ta hai

let is_update = false;  // is_update is value defauilt false rakh rahe ham.
let update_index = null; // update_index value ko null rakh rahe hai ham abhi.

const update_local_storage = () => {  // ham update_local_storage nam ka ek funcation banarahe hai . 
  localStorage.setItem("todos", JSON.stringify(todo_list)); // localStorage.setItem se todos ko json.stringify ka use kar ke array ko string  data mai convert kar ke local storsge mai set kar rahe hai.
};

add_todo_btn.addEventListener("click", () => {  // add_todo_btn button par .addEventListenere lagake click par nachh val condition check ki jaayegi.
  if (is_update) {  // if is_update ki value True hai to ye kaam ho gaa.
    // ✅ UPDATE MODE
    todo_list[update_index] = {  // todo_list ke aadar update_index ko update kiya gayega .
      title: todo_title.value,   // title key mai  todo_title.value kar ke title mai todo_title ki value save karege.
      todo_priority: todo_priority.value, // todo_priority key mai  todo_priority.value kar ke todo_priority  mai todo_priority ki value save karege.
      is_compeleted: false, // fir is_compeleted ko ham false kar dege.
    };

    is_update = false;  // is_update 
    update_index = null;
    add_todo_btn.textContent = "Add Todo";
  } else {
    // ✅ ADD MODE
    todo_list.push({
      title: todo_title.value,
      todo_priority: todo_priority.value,
      is_compeleted: false,
    });
  }

  update_local_storage();
  todo_title.value = "";
  todo_priority.value = "Default";
  display_todos();
});

const display_todos = () => {
  todos_collection.innerHTML = "";

  todo_list.forEach((todo, i) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <div class="shadow rounded p-3 w-100 d-flex justify-content-between mt-3 border 
        ${todo.todo_priority == "high"
          ? "border-danger"
          : todo.todo_priority == "low"
          ? "border-success"
          : "border-warning"}">

        <div>
          <span class="mx-3 fs-4 ${
          
                  todo.is_compeleted
                    ? `<span class="mx-3 fs-3 text-decoration-line-through">${todo.title}</span>`
                    : `<span class="mx-3 fs-3">${todo.title}</span>`
                }
        </div>

        <div>
          <button onclick="delete_todo(${i})" class="btn btn-outline-danger btn-sm">
            Delete
          </button>
          <button onclick="update_todo(${i})" class="btn btn-info btn-sm">
            Edit
          </button>
        </div>
      </div>
    `;

    todos_collection.append(div);
  });
};

const delete_todo = (i) => {
  todo_list.splice(i, 1);
  update_local_storage();
  display_todos();
};

const update_todo = (i) => {
  todo_title.value = todo_list[i].title;
  todo_priority.value = todo_list[i].todo_priority;

  is_update = true;
  update_index = i;

  add_todo_btn.textContent = "Update Todo";
};

display_todos();

add_todo_btn.addEventListener("click", handle_add_todo_btn);

