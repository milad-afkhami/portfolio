# Project routes

Project listing and detail routes use `src/data/projects.json` through the project service. Keep
slug lookup and not-found behavior in the service/page contract, and keep project descriptions and
links in the data file rather than duplicating them in route components.
