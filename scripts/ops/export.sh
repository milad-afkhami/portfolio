source constants/shellColors.sh

echo -e "${BLUE}Removing next static cache started${NO_COLOR}\n" &&
    rm -rf out &&
    echo -e "${GREEN}Removing next static cache succeeded${NO_COLOR}\n" &&
    bash scripts/ops/build.sh &&
    echo -e "${BLUE}Generating static export started${NO_COLOR}\n" &&
    node_modules/next/dist/bin/next export &&
    echo -e "${GREEN}Generating static export succeeded${NO_COLOR}\n"

exit $?

exit 0
