# Node.js Project Starter with Precommit Workflows

This repository contains a template for setting up precommit workflows in a Node.js project. Precommit workflows are a set of operations that are run automatically before each commit is finalized in the git history. They are used to ensure that the codebase maintains a certain level of quality and consistency.

In this template, we have two precommit workflows:

1. **ESLint for syntax highlighting**: This workflow runs ESLint, a tool for identifying and reporting on patterns in JavaScript. It helps to ensure that the code follows certain style guidelines before it is committed.

2. **Puppeteer for testing**: This workflow runs tests using Puppeteer, a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.

To use these workflows, clone this repository and install the necessary dependencies. Make sure to adjust the workflows according to your project's needs.
