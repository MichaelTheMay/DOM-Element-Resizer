document.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.target;
  
    target.style.border = "2px solid red";
    target.style.resize = "both";
    target.style.overflow = "auto";
  
    console.log(`Selected element:`, target);
  });
  