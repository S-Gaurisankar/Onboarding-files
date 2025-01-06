# Git Workflow: A Beginner's Guide

## What is Git?

Git is an open-source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It allows developers to track changes in their code, collaborate with team members, and maintain a history of their project's evolution.

### Why Use Git?

- **Version Control**: Git keeps a complete history of changes, enabling you to revert to previous versions if needed.
- **Collaboration**: Developers can work on the same project simultaneously without overwriting each other's work.
- **Branching and Merging**: Git allows you to create branches for experimenting or developing new features, which can later be merged into the main project.
- **Backup**: With repositories stored both locally and on platforms like GitHub, your work is safer from data loss.

---

## Git Basics Practice

### Setup

#### 1. **Create a New Folder**
Before starting with Git, we need a directory to hold our project files.
- **Theory**: Creating a dedicated folder helps keep your project organized. Initializing Git inside this folder allows Git to track changes made to the files within it.
- **Command**:
  ```bash
  mkdir git-practice
  cd git-practice
  ```
  The `mkdir` command creates the folder, and `cd` moves into it.

#### 2. **Initialize a Git Repository**
- **Theory**: Initializing a repository turns the folder into a Git-tracked directory, enabling Git to monitor changes. This step creates a hidden `.git` folder where Git stores its internal data.
- **Command**:
  ```bash
  git init
  ```

---

### Tasks

#### 1. Configure Git
- **Theory**: Configuring your username and email ensures that every commit you make is associated with your identity. This is essential for collaboration and accountability.
- **Commands**:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```
  The `--global` flag applies the configuration across all repositories on your machine. Replace `Your Name` and `your.email@example.com` with your actual details.

#### 2. Create and Commit a File
- **Theory**: A commit is a snapshot of your project at a specific point in time. Staging files before committing them allows you to review changes and organize your commits.
- **Steps and Commands**:
  1. Create a `readme.md` file:
     ```bash
     echo "# Git Practice" > readme.md
     ```
     The `echo` command writes content into the file.
  2. Stage the file:
     ```bash
     git add readme.md
     ```
     This tells Git to include `readme.md` in the next commit.
  3. Commit the file:
     ```bash
     git commit -m "Add readme.md"
     ```
     The `-m` flag adds a message describing the changes.

#### 3. Work with Branches
- **Theory**: Branching allows you to work on new features or experiments without affecting the main project. You can merge your branch back into the main project once the changes are finalized.
- **Steps and Commands**:
  1. Create a new branch:
     ```bash
     git branch feature-branch
     ```
     This creates a branch named `feature-branch`.
  2. Switch to the new branch:
     ```bash
     git checkout feature-branch
     ```
     This moves you to the `feature-branch` to work on it.
  3. Add and commit a file:
     ```bash
     echo "This is a feature." > feature.txt
     git add feature.txt
     git commit -m "Add feature.txt"
     ```

#### 4. Merge Branches
- **Theory**: Merging integrates changes from one branch into another. This is commonly used to bring feature changes into the main project.
- **Steps and Commands**:
  1. Switch back to the main branch:
     ```bash
     git checkout main
     ```
  2. Merge the feature branch into main:
     ```bash
     git merge feature-branch
     ```

#### 5. Simulate and Resolve a Conflict
- **Theory**: Conflicts occur when the same file is modified in different branches. Resolving conflicts ensures that the final version contains the desired changes from both branches.
- **Steps and Commands**:
  1. Modify `readme.md` in `main`:
     ```bash
     echo "Conflict in main." >> readme.md
     git add readme.md
     git commit -m "Update readme.md in main"
     ```
  2. Modify `readme.md` in `feature-branch`:
     ```bash
     git checkout feature-branch
     echo "Conflict in feature-branch." >> readme.md
     git add readme.md
     git commit -m "Update readme.md in feature-branch"
     ```
  3. Merge and resolve the conflict:
     ```bash
     git checkout main
     git merge feature-branch
     ```
     - Open `readme.md` to resolve the conflict manually.
     - After resolving, stage and commit the file:
       ```bash
       git add readme.md
       git commit
       ```

#### 6. View Commit History
- **Theory**: The commit history is a record of all changes made to the repository. Reviewing it helps understand the project’s progress.
- **Command**:
  ```bash
  git log
  ```
  This lists all commits, their messages, and other metadata.

#### 7. Use Git Stash
- **Theory**: Stashing saves uncommitted changes temporarily, allowing you to switch branches or perform other tasks without losing work.
- **Steps and Commands**:
  1. Save changes:
     ```bash
     echo "Temporary change" >> temp.txt
     git add temp.txt
     git stash
     ```
     This saves the changes and removes them from the working directory.
  2. Apply stashed changes later:
     ```bash
     git stash apply
     ```

---

### Additional Resources
- **Official Git Documentation**: [https://git-scm.com/doc](https://git-scm.com/doc)
- **Interactive Git Tutorials**: [https://learngitbranching.js.org](https://learngitbranching.js.org)

This guide introduces essential Git concepts and commands, ensuring beginners can confidently manage version control in their projects.

