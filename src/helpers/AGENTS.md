# Helpers

Helpers hold project-specific business logic that is too complex or repetitive for a component but
too specific for a shared utility. Keep generic functions in `src/utils/`, integration concerns in
`src/services/`, and helper inputs and outputs explicitly typed. Preserve existing behavior for
edge cases when extracting or changing logic.
