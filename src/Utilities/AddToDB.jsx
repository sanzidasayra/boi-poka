import js from "@eslint/js";

const getStoredBook = () => {
    const storeedBookSTR = localStorage.getItem("readList");
    if(storeedBookSTR){
        const storedBookData = JSON.parse(storeedBookSTR);
        return storedBookData;
    }
    else{
        return [];
    }

}

const AddToStoreDB = (id) => {
    const storedBookData = getStoredBook();
    if(storedBookData.includes(id)){
        console.log("hello")
        alert("Book already exist in the list");
        
    }
    else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data);
    }
}

export {AddToStoreDB};