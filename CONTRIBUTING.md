# Contributing to WG-Hilfe

- [Commit Guidelines](#git-commit)
- [Commit Authorization Rules](#commit-auth)

### <a name="git-commit"></a> Git Commit Guidelines
```html
<type>(): <subject>
<BLANK LINE>
<Description>
<BLANK LINE>
<References>
```

**Type**
- feat: A new feature for the code frontend.
- fix: A bug fix for the code frontend.
- docs: A change for the documentation or a tutorial.
- style: A change for a tutorial or the frontend, which just optimizes the source appearance
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- chore: Changes that will affect the build process.

### <a name="commit-auth"></a> Commit Authorization Rules

The development team has defined three levels of **commit authorization**

* Collaborator: 
  * For any and all changes, contributors must use a fork of the repository 
    * Please do not make or submit any changes from the master branch. 
  * Are not authorized to merge PRs
  * Should not reassign issue or change issue milestones
  * Should ensure their issue labels are correct
  * Should ensure their issues are tested with latest version
* Core: 
  * Includes: [Lordnoname](https://github.com/lordnoname)
  * Should not merge PRs (unless explicitly requested)
  * Should use the repository branches for major, non-trivial changes. 
  * For minor changes, developers in this group may elect to commit direct to master.
* Project Leads:
  * Includes: [DevVersion](https://github.com/DevVersion)
  * Will review and merge PRs
  * Should confirm Karma tests pass
  * Should squash as need
  * Should ensure the PR is closed when the merge finishes.
