//this is the script event that warns user if you really want to delete when you hit the delete button
(function(){
    function Start()
    {
        console.log("App started")
        let deleteButtons=document.querySelectorAll('.btn-danger');
        for(button of deleteButtons){
            button.addEventListener('click',(event)=>{
                if(!confirm("are you sure"))
                {
                    event.preventDefault();
                    window.location.assign('/tracker-list');
                }
            });
        }
    }
    window.addEventListener("load",Start);
    
    
})();
