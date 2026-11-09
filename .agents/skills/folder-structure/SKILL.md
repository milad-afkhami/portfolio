---
name: folder-structure
description: Place new files according to the project source folder conventions.
---

**Folder Structure**

This folder structure serves as a guideline for organizing the project's source code in a scalable, maintainable, and domain-oriented manner. Leverage this structure when generating or navigating code.

src/
├── configs/           # Configuration files
├── constants/         # Constants and enums
├── components/        # Components, separated by their domain (e.g. layout, auth, profile, etc.)
├── data/              # Hardcoded pre-defined data like rarely changing data or mock data
├── docs/              # Documentation files
├── hooks/             # Custom hooks
├── services/          # Service layer files, the [services-guideline skill](../services-guideline/SKILL.md)
├── types/             # Global type definitions
├── helpers/           # Helper functions the [helpers-guideline skill](../helpers-guideline/SKILL.md)
└── utils/             # Utility functions.
