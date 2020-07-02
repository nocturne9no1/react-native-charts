# React Native Charts Contributing Guide

- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)

## Issue Reporting Guidelines

Issues should be submitted [here](https://github.com/chartiful/react-native-charts/issues/new) with the label that best describes the concern.

Labels for issue submission: [`bug`, `enhancement`, `question`]

Please also provide 1. a brief description of the issue, 2. a code snippet, and 3. a screen shot of the manifestation (when applicable).

## Pull Request Guidelines

- `trunk` is the default branch for the project (there is no `master` branch) and PRs should be submitted against it

- As much as possible, make small PRs with one specific goal. Committing frequently as you work is also a valid choice (commits will be squashed when merged)

- Testing hasn't been setup yet (TODO), but when it has, confirm that `npm run test` in the root directory passes before submitting the PR

- If adding a new feature:

  -  Add a test case
  -  Provide a convincing reason to add this feature. Ideally, you should open an `enhancement` issue before and have it approved before working the new feature

- If fixing bug:

  -  Please make sure an issue has been created (if not, create one) and link to the issue from your PR
  -  Provide a detailed description of the fix that addresses all concerns in the related issue
  -  Update test cases or add additional coverage when applicable

## Development Setup

Once the project has been forked and cloned, running the following from root will install all dependencies:

```bash
npm run setup
```

Once this has been run the `_development_app` can be run with:

```bash
cd _development_app && expo start
```

## Project Structure

The project hierarchy splits each **chart type** into its own child directory. Each of the charts (currently `horizontal-bar-graph`, `line-graph`, `vertical-bar-graph`, and `WIP: pie-chart`), have the latest version of `chart-builder` established as a peer dependency.

The `chart-builder` is the foundation for all of the graphs (excluding the `pie-chart`); it contains the methods for drawing the `backgroundLines`, `x/yAxisLabels`, and basic chart `style`.

Each chart's directory structure has the core code for the project in its `src/index.tsx` file.
