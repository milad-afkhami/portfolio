rm -rf .next &&
    yarn stylesheets &&
    PORT=4000 NODE_OPTIONS='--inspect' next dev

exit $?

exit 0
