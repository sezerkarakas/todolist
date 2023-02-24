let ulDOM = document.querySelector("#list")


// this method creates a new element 
const newElement = () =>{
    let taskDOM = document.querySelector("#task")
    let text = taskDOM.value;
    // if input is empty this doesn't allow to add a new element
    if(!text==""){
        //to create new li element
        let liDOM = document.createElement("li")
        //a button to delete element 
        liDOM.innerHTML = `${text}
        <span class="button btn btn-light">X</span>
        `
        //this one is for to deleting element which is we created
        const deleteElement = () =>{
            liDOM.remove();
        }
        let spanDOM= liDOM.childNodes[1];
        spanDOM.addEventListener("click",deleteElement)
        liDOM.classList.add("list-group-item","d-flex","justify-content-between","align-items-center","list-group-item-action","list-group-item-light")
        ulDOM.append(liDOM);
        $('.toast.success.hide').toast("show")
    }else{
        $('.toast.error.hide').toast("show")
    }
}

//this one is for static ones
const deleteElement = (element) =>{
    element.parentNode.remove(element)
}