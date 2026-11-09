# Service routes

Service listing and detail routes use `src/data/services.json` through the service layer. Preserve
slug lookup and the existing public service presentation. Changes to service content belong in the
data source; changes to loading or transformation belong in `src/services/service.ts`.
