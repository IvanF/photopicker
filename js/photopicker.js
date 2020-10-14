$.fn.photopicker = function(options) {
    const ID = this.attr('id');
    const root = document.getElementById(ID);
    let fileList = document.getElementById("fileList"),
        maxFiles = 5,
        form = null;
    if(document.getElementsByTagName('form').length == 0){
        console.log('PhotoPicker says: Form is not found. Create form first and put photopicker element inside that form.');
    }
    else{
        form = root.closest('form');
    }
    if(typeof (options.fileListID) !== 'undefined'){
        fileList = document.getElementById(options.fileListID);
    }
    if(typeof (options.maxFiles) !== 'undefined'){
        maxFiles = options.maxFiles;
    }

    //create input file field
    let input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("name", "files");
    input.setAttribute("multiple", "multiple");
    input.setAttribute("id", "files");
    form.appendChild(input);

    fileElem = document.getElementById("files");
    fileElem.addEventListener("change", handleFiles, false);
    $('#multiup').on('click',function (){
        $('#files').click();
    });

    function handleFiles() {
        if (!this.files.length) {
            fileList.innerHTML = "<p>Neither files selected</p>";
        } else {
            fileList.innerHTML = "<div id=\"fileList\"></div>";
            const list = document.createElement("ul");
            fileList.appendChild(list);
            let limit = this.files.length;
            if (limit > maxFiles){
                limit = maxFiles;
            }
            for (let i = 0; i < limit; i++) {
                const li = document.createElement("li");
                list.appendChild(li);
                const img = document.createElement("img");
                img.src = URL.createObjectURL(this.files[i]);
                img.onload = function() {
                    URL.revokeObjectURL(this.src);
                }
                li.appendChild(img);
                const rem = document.createElement("button");
                rem.classList.add("btn");
                rem.classList.add("white");
                rem.classList.add("remove-file");
                rem.title = "Remove";
                const cancel = document.createElement("i");
                cancel.classList.add("material-icons");
                cancel.classList.add("red-text");
                cancel.innerHTML = "cancel";
                rem.appendChild(cancel);
                rem.addEventListener('click',function (event){
                    rem.parentElement.remove();
                });
                li.appendChild(rem);
                li.addEventListener('click',function (event){
                    event.stopPropagation();
                });
            }
        }
    }

};
