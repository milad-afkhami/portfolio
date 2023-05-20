source constants/shellColors.sh

echo -e "${BLUE}Removing next cache started${NO_COLOR}\n" &&
    rm -rf .next &&
    echo -e "${GREEN}Removing next cache succeeded${NO_COLOR}\n" &&
    echo -e "${BLUE}Generating build time stylesheets started${NO_COLOR}\n" &&
    yarn stylesheets &&
    echo -e "\n${GREEN}Generating build time stylesheets succeeded${NO_COLOR}\n" &&
    echo -e "${BLUE}Generating production build started${NO_COLOR}\n" &&
    GENERATE_SOURCEMAP=false node_modules/next/dist/bin/next build &&
    echo -e "${BLUE}Generating production build succeeded${NO_COLOR}\n"

exit $?

exit 0
