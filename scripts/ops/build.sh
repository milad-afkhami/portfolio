rm -rf .next &&
    yarn stylesheets &&
    GENERATE_SOURCEMAP=false node_modules/next/dist/bin/next build

exit $?

exit 0
