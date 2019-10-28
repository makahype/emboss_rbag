# emboss:
Ruby and Angular source files. An implementation of using angular and ruby together.

## files: 
- angular_src: angular source files
- ruby_src: ruby source files


## setup:
- take angular source files and put into local angular  build process
- take ruby source files and put into local ruby hosted files
- run ng build --prod to get a export of angular frontend files
- place angular frontend folder into public ruby folder
- update the angular view layout to have the updated frontend file names
- navigate to controllers using the angular layout


## todos:
- generate more consistent way to communicate state between server first page load and subsiquent state updates
- create mode where angular ajax calls can be mocked outside ruby env
- automate movement of angular files into ruby  code base
- create frontend lib to handle csrf
- mobile css handling


