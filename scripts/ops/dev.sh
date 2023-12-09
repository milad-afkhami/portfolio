source constants/shellColors.sh

echo -e "${BLUE}Removing next cache started${NO_COLOR}\n" &&
    rm -rf .next &&
    echo -e "${GREEN}Removing next cache succeeded${NO_COLOR}\n" &&
    echo -e "${BLUE}Generating build time stylesheets started${NO_COLOR}\n" &&
    yarn stylesheets &&
    echo -e "\n${GREEN}Generating build time stylesheets succeeded${NO_COLOR}\n" &&
    echo -e "Running next.js on development mode started${NO_COLOR}\n" &&
    PORT=4000 NODE_OPTIONS='--inspect' node_modules/.bin/next dev

exit $?

exit 0
