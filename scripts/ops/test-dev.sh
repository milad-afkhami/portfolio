INPUT_MATCH_PATTERN="${1:-test}"
jest $INPUT_MATCH_PATTERN --watch

exit $?

exit 0
