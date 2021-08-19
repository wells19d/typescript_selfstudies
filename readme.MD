# TypeScript Self Studies
One of my goals, post graduation from Emerging Digital Academy, is learning TypeScript. This repo will cover just that. To shorten the length of time I'll be spending on this, I've re-used most of my JavaScript I've written or received, for my TypeScript. The code that isn't compatible with TypeScript is what will be re-written.

- This is a self study course, I will be taking the lessons I learned, over the 20 week course at EDA, and turn them into TypeScript projects.
- The projects listed where all written in different languages, (jQuery, Node, Express, React) but I'll be moving them into TypeScript.
- Most of these projects will be base goal only, only until I've gone through all the projects.
- I'm going to try to include different styling types with the project as I go.
    - CSS
    - Bootstrap
    - Material UI
    - Tailwind

- Added: I'm going to start including some of the readme.MD's from the assignments to better understand the assignment of what needs to be done. Hopefully this will help anyone that wants to re-use what I've done to learn TypeScript, they can understand what I was trying to do, maybe even correct my errors, even helping me learn from them as well.
    - Sorry, english isn't my best subject. :D

- Server projects (multiple servers in overall project):
    - After working on "The Express Express", If anyone uses these in the future, they will need to pull these folders off before running the server, otherwise they will need to change the path of the files to match up for which "server" they are running. I would recommend opening the folders directly for each single project for simplicity.

## Lesson List
- A checklist of assignments I'll be working on:
#
- Week 1-6: Javascript
    - [x] - Wk-1: Hello World
    - [x] - Wk-2: About Me & Description
        - Note: I've noticed that using a boolean statement during a if else statement, if the boolean is being looked at as as true or false, you don't need to compare if it is true or false. Just calling the variable will check.
        - ``` 
            if (adventurous) { // does not neet to be adventurous === true
                    console.log('Adventures are great!');
                } else {
                    console.log('How about we stay home?');

            if ((luckyNumber === 2) && (adventurous) ) { // does not need to be adventurous = true
                    console.log( '"Roll the Dice!"' );
                }
                
    - [x] - Wk-3: Array's and Loop's
        - Note: Loops and Array's seem to still funciton to same between JavaScript and TypeScript
    - [x] - Wk-4: Functions
        - Note: Short hand functions still work
        ```
        newFunction = () => {
            console.log('function works');
        }
        ```
    - [x] - Wk-5: Objects
    - [x] - Wk-6: Overall (Garage)
        - Note: Append doesn't quite work correctly. Researching why vscode is throwing an error, yet the code works to display to the dom.
#    
- Week 7: jQuery
    - [x] - Student Portal (Weekend Project)
        -  Note: Append Issue. Not sure how to correct this just yet. I've reached out to a few other developers for assistance, just waiting on response. The information I've found on stackoverflow.com or google searches, doesn't quite give me the answer I'm looking for.
#
- Week 8: NodeJS
    - - After trying to just move into the weekend assignment, I realized need to look further into express again and make sure I fully understand it. I'm going to be expanding on more of the assignments from week 8.
    - [x] - 1: jQuery Color Swap
    - [x] - 2: Group: Guess Who
    - [x] - 3: The Express Express (added)
    - [ ] - ?: Server Side Calculator (for now the order is unassigned)
#
- Week 9: SQL Database
    - [ ] - TBT
#
- Week 10: React
    - [ ] - TBT
#
- Week 11: Redux
    - [ ] - TBT
#
- Week 12: Sagas
    - [ ] - TBT
#
- Week 13: Authentication
    - [ ] - TBT
#
- Week 14: 
    - [ ] - Solo Project

## Github personal access was changed for August 13th.
Thanks to Blaine Booher for assistance. Last week I haven't been able to properly push my work using VSCode, but instead had to install Github's desktop application. It's a great app, but it has made some personal limitations for what I'm used to using. After days of documentation reading and lots of trial and error, he helped make this a quick fix. These are some notes on how he helped me fixed the problem.

- Open new terminal
    - ``` ls ~/.ssh ``` to make sure I didn't have a file made
    - ``` ssh-keygen -t rsa ``` to generate a public / private rsa key pair
        - entered passed paraphrase
    - ``` ls ~/.ssh ``` again to check if files were created.
    - ``` cat ~/.ssh/is_rsa.pub ``` to read the ssh key.
    - open Github and created a new SSH Key inside ``` settings > SHH and GHG keys ```
    - Named and copied the is_rsa.pub key into input field
    - ran ``` ssh git@github.com ``` to verify that github can identify the key given
    - ``` git remote -v ``` to check remote.
    - ``` git remote rm origin ``` to remove the origin location
    - ``` git add origin git@github.com:wells19d/typescript_selfstudies.git ``` to assign project.

I was now successfully able to now push remotes to the master.