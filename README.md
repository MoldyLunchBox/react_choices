# react_choices
![fdfefgfgdfg](https://user-images.githubusercontent.com/50224500/125379019-4a30dc80-e37f-11eb-8afd-2fde69a6eee6.PNG)
-----> must install nvm:
https://github.com/nvm-sh/nvm
-----> just run this:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
-----> and add this to the right profil file (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc):
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
-----> open a new terminal and run this:
nvm install node
-----> and then create the react environment:
npx create-react-app my-app
cd my-app
npm start
