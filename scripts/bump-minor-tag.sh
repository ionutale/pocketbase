#!/usr/bin/env zsh
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage: bump-minor-tag.sh [--push] [-m "message"]

Creates a new annotated tag by incrementing the minor version of the latest
semantic tag (vMAJOR.MINOR.PATCH). By default the script only creates the tag
locally and prints the suggested git push command. Use --push to push the tag
to the origin remote automatically.

Examples:
  # create tag v0.5.0 locally and print push command
  ./scripts/bump-minor-tag.sh

  # create tag v0.5.0 with custom message and push it
  ./scripts/bump-minor-tag.sh --push -m "v0.5.0"
USAGE
  exit 1
}

# parse args
push=false
msg=""
while [[ $# -gt 0 ]]; do
  case $1 in
    --push)
      push=true
      shift
      ;;
    -m)
      if [[ $# -lt 2 ]]; then
        echo "-m requires an argument"
        usage
      fi
      msg="$2"
      shift 2
      ;;
    -h|--help)
      usage
      ;;
    *)
      echo "Unknown argument: $1"
      usage
      ;;
  esac
done

# get latest tag (fall back to none)
latest=$(git describe --tags --abbrev=0 2>/dev/null || true)
if [[ -z "$latest" ]]; then
  major=0
  minor=0
  patch=0
else
  ver=${latest#v}
  IFS='.' read -r major minor patch <<< "$ver"
  # ensure numeric values
  major=${major:-0}
  minor=${minor:-0}
  patch=${patch:-0}
fi

# bump minor and reset patch
minor=$((minor + 1))
patch=0
new="v${major}.${minor}.${patch}"

if [[ -z "$msg" ]]; then
  msg="$new"
fi

echo "Latest tag: ${latest:-<none>}"
echo "New tag: $new"

echo "Creating annotated tag '$new'"
git tag -a "$new" -m "$msg"

if $push; then
  echo "Pushing tag $new to origin..."
  git push origin "$new"
else
  echo "Tag created locally. Run to push:"
  echo "  git push origin $new"
fi

echo "Done."
