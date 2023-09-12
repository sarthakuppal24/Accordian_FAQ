let acc = document.querySelectorAll(".accordian");

acc.forEach(function(accordian){
    let ans = accordian.querySelector(".answer");
    let icon = accordian.querySelector(".icon");

    accordian.addEventListener('click',function(){
        // icon.classList.toggle("active");
        // ans.classList.toggle("active");

        if(icon.classList.contains("active")){
            icon.classList.remove("active");
            ans.style.maxHeight=null;
        }
        else{
            icon.classList.add("active");
            ans.style.maxHeight= ans.scrollHeight+'px';
        }
    })
})