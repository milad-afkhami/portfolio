# Services

`src/services/` is the application boundary for reading data and integrating external systems.
Services own path construction, loading, transformation, and app-facing result shapes. Keep route
components and cards free of duplicated fetching or response-shape knowledge. Preserve error and
not-found behavior when changing a service.
