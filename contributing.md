# Contributing to Nickname Generator
## Contribution process overview
1. Fork this project.
1. Create a feature branch.
1. Make your changes.
1. Run the game locally
1. Run the tests.
1. Push your changes to your fork/branch.
1. Open a pull request.
### 1. Fork
1. Click the fork button up top.
1. Clone your fork locally.
### 2. Create a feature branch
Create and switch to a new feature branch: *git checkout -b {branch_name} upstream/master*
(replace *{branch_name}* with a meaningful name that describes your feature or change).

### 3. Make your changes
Now that you have a new branch you can edit/create/delete files. Use touch-up commits using *git commit --amend*. (You may use git force push after that).

### 4. Run the app locally
- Install the dependencies: *npm install*.
- Start the local development server: *npm start*.
### 5. Run the tests
- Run tests: *npm test*.
- Run lint: *npm run lint*.
### 6. Push your changes to your fork/branch
After lint and all tests pass, push the changes to your fork/branch on GitHub: *git push origin {branch_name}*. For force push, which will destroy previous commits on the server, use *--force* (or *-f*) option.

### 7. Create a pull request
Create a pull request on GitHub for your feature branch.
