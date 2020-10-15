# Photopicker
JQuery plugin.

A multiple photo picker for web forms. Helps to mark up web form with multiple images.
Takes images format: _image/jpeg, image/png_.
## Requirements

1. `<form>` element must be created
2. Element `<input type="file">` may be created inside of `<form>`. If not, it will be created automatically with name `files`
3. Look into **Examples** 

## Usage
1. Add `js/photopicker.js` to HTML document
2. In HTML code put this snippet:

````
 		$("#selector").photopicker(); 	
````

## API

At the time it is limited list of available parameters adopted to plugin.

**fileListID** - id of element which lists file set.

**inputName** - name of created input field. Sends to backend.

**maxFiles** - limit to file list.