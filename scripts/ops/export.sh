rm -rf out &&
    rm -rf .next &&
    bash scripts/ops/build.sh &&
    next export

exit $?

exit 0
