// javascript for multiple functions

// function to change progress button text and change progress bar status
function progress(id)
{   
    var ide = id.match(/(\d+)/);
   var progressBar = document.getElementById("progress_" + ide[0]);
   var add = (14);
   var width = progressBar.style.width.match(/(\d+)/)[0];
    var progressButton = document.getElementById(id)
    if(progressButton.value == 'pending')
   {
    var newWidth = Number(width) + add;
    if(newWidth>95)
    {newWidth=100};
    progressBar.style.width = newWidth.toString() + '%'
    progressButton.textContent = 'Done';
    progressButton.style.backgroundColor = "green";
    progressButton.value = 'Done'}
    else{
    var newWidth = Number(width) - add;
    if(newWidth<5)
    {newWidth=0}
    progressBar.style.width = newWidth.toString() + '%'
    progressButton.textContent = "Pending..";
    progressButton.style.backgroundColor = "red";
    progressButton.value = 'pending'
    }
};


// function to delete a habit 
function delete_habit(id)
{
    var result = confirm("Are you sure you want to delete this habit?");
    if(result)
    {
        fetch('/delete_habit/' + id,{
            method:'post'
        }).then((res)=>{
            if(res.ok)
            {
                location.reload();
            }
        })
    }
};

