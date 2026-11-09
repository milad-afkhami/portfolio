# Shared types

Keep cross-feature TypeScript types here when they are genuinely shared. Prefer precise shapes and
existing naming conventions; avoid widening types to `any` to bypass a consumer mismatch. Feature-
specific types may stay close to their feature when they are not shared.
