# Favourites routes

These routes render the category and item views backed by `src/data/favourites/` and the favourite
service. Preserve the category and slug contract, handle unknown categories/items through the
existing not-found behavior, and keep category-specific data out of route components.
