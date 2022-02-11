let count = 0
document.getElementById("btn-add").addEventListener("click", function(){
    // item serial number
    count++

    let inputValue = document.getElementById("input-add").value
    let tableContent = document.getElementById("table-content")

    if(inputValue == ""){
        alert("Please add input value")
    }
    else{
        // create tr element
        let myElement = document.createElement("tr")
        myElement.id = "main-content"
        myElement.innerHTML = `<th>${count}</th>
        <td class="addedInput">${inputValue}</td>
        <td>
            <button class="btn btn-danger delete-btn">Delete</button>
            <button class="btn btn-success done-btn">Done</button>
        </td>`

        // append table row
        tableContent.appendChild(myElement)

        // clear input field after adding item
        document.getElementById("input-add").value = ""

        const deleteAll = document.getElementsByClassName("delete-btn")
        const doneAll = document.getElementsByClassName("done-btn")

        // delete button work
        for(let deleteBtn of deleteAll){
            deleteBtn.addEventListener("click", function(e){
                e.target.parentNode.parentNode.style.display = "none"
            })
        }

        // done button work
        for(let doneBtn of doneAll){
            doneBtn.addEventListener("click", function(e){
                // e.target.parentNode.parentNode.style.textDecoration = "line-through"
                let allTd = e.target.parentNode.parentNode.children
                for(td of allTd){
                    if(td.classList.contains("addedInput")){
                        td.style.color = "green"
                    }
                }
            })
        }
    }
})

document.getElementById("clearAll").addEventListener("click", function(){
    document.getElementById("table-content").style.display = "none"
})