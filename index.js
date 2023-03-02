window.onload = () => {
    alert("Hello I am loaded");
};

window.onblur = () => {
  document.title = "Come back please";  
};

window.onclose = () => {
    alert("Hey");
};

window.onfocus = () => {
    document.title = "Document";
};