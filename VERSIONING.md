# Versioning in this repository

This repository holds two games that are numbered separately. A change to one never raises
the number of the other.

| Game | Folder | Tag | Changelog | Where the number lives |
| --- | --- | --- | --- | --- |
| Lone Hand (Claude version) | `Claude/` | `lone-hand-vX.Y.Z` | `Claude/CHANGELOG.md` | `Claude/source/package.json` |
| Eight Horizons (Gemini version) | `Gemini/` | `eight-horizons-vX.Y.Z` | `Gemini/CHANGELOG.md` | `Gemini/package.json` |

## The number

`MAJOR.MINOR.PATCH`:

- `PATCH`: a fix; nothing new to play.
- `MINOR`: something new or changed that a player will notice: a place, a character, a
  control, a mode.
- `MAJOR`: a rebuilt game, or changes that make old habits or old links stop working.

Changes to documentation only (READMEs, screenshots, this file) get no version.

## Publishing a version of Lone Hand

Every change reaches `main` through a branch and a pull request. Nothing is committed or
pushed directly on `main`.

1. Raise `version` in `package.json`. The build writes it onto the title screen.
2. Add a section at the top of `CHANGELOG.md`, with the date and the headings Added, Changed,
   Fixed, Removed as needed. Write it for players, in plain language.
3. Build, copy the game and the sources into `Claude/`, update the version line at the top of
   `Claude/README.md`, in the root `README.md` and on the landing page `index.html`.
4. Create a branch from the current `main`, named `release/lone-hand-vX.Y.Z`, commit there
   and push the branch.
5. Open a pull request from that branch into `main`. Its title is the version and a few
   words; its text is the changelog section.
6. Merge the pull request with a merge commit (not a squash, not a rebase) and delete the
   branch.
7. Tag the merge commit on `main` as `lone-hand-vX.Y.Z` (annotated) and push the tag.
8. Create the GitHub release for the tag, with the changelog section as its notes and
   `Claude/index.html` attached as `lone-hand-X.Y.Z.html`.

## Publishing a change to the documentation only

The same route without a version: a branch named `docs/<short-name>`, a pull request, a
merge commit. No tag and no release.

## What is never done

- A pushed tag is never moved or deleted. A mistake is corrected by a new version.
- `main` is never force-pushed.
