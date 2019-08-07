## React webpage - List GOT episodes
[Click here to preview](https://janiswang.github.io/react-episode-list/)
### Description

The project aims to create a webpage using React that listing GOT episodes using provided JSON data file. Design details can be found in [Figma](https://www.figma.com/file/cSjahZLzg3qH1fEIOxyK6g/Untitled?node-id=13%3A0 "Figma").
The following items listed below are tools and technologies used in this project.
- **Trello** - project management
- **Github** - source control
- **IDE** - Visual Studio Code
- **Technologies** - JS, ReactJS, Sass, HTML
	- node v10.16.0
	- npm v6.9.0
	- react v16.8.6
	- react-dom v16.8.6
	- node-sass v4.12.0

### Architecture

**MovieInfo** includes:
- feature image
- show name
- show description
- button "official site"

**SeasonButtons** includes:
- Season selectors

**EpisodeList** includes:
- episode image
- episode name
- episode description
- episode link


### Setup and Build project
To run this project, simply clone the repo to your local development folder. Go into project root directory, then run the following commands.

```bash
# run project locally
npm start

# build project locally
npm run build

# re-deploy project
npm run deploy
```
By default, project should be able to view in [http://localhost:3000/](http://localhost:3000/). Port number can be update in **package.json**. Add "`PORT={port_number}`" in scripts->start.
```json
"scripts": {
    "start": "PORT=2000 react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```

To deploy project to GitHub Page, 
1. In package.json file, add homepage url.
``` json
"homepage":"https://yourusername.github.io/repository-name"
```
2. Install gh-pages package
```
npm install --save gh-pages
```

3. Add deploy script in package.json
```json
"scripts":{
 "predeploy": "npm run build",
 "deploy": "gh-pages -d build",
}
```

4. In GuiHub setting, set source branch to "gh-pages".