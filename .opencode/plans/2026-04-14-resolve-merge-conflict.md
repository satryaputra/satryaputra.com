# Merge Conflict Resolution Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Resolve all merge conflicts by keeping HEAD version (satryaputra.com) while combining Next.js config optimally.

**Architecture:** Resolve each conflicted file individually using `git checkout --ours` for conflicts, then manually edit `next.config.ts` to merge both configurations.

**Tech Stack:** Git, Next.js

---

### Konflik Summary

| File | Aksi |
|------|------|
| `README.md` | Keep HEAD |
| `next.config.ts` | Merge (images.qualities + rewrites) |
| `src/components/site-header.tsx` | Keep HEAD |
| `src/components/site-footer.tsx` | Keep HEAD |
| `src/config/metadata.ts` | Keep HEAD |
| `src/app/(app)/(docs)/blog/page.tsx` | Keep HEAD |

### File yang tetap deleted:
- `src/app/icon.png`
- `src/components/blog/unmounting-demo.tsx`
- `src/features/doc/content/the-hidden-mechanics-of-smooth-component-unmounting.mdx`
- `src/features/doc/content/the-story-behind-draftlogo.mdx`

---

## Tasks

### Task 1: Resolve README.md Conflict

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Check current conflict state**

Run: `git diff --name-status --diff-filter=U | grep README`
Expected: `U  README.md`

- [ ] **Step 2: Keep our version (HEAD)**

Run: `git checkout --ours README.md`
Expected: No output (success)

- [ ] **Step 3: Stage the file**

Run: `git add README.md`
Expected: No output (success)

- [ ] **Step 4: Verify no more conflict**

Run: `git diff --name-status --diff-filter=U | grep README`
Expected: No output (conflict resolved)

---

### Task 2: Resolve next.config.ts Conflict (Merge Both)

**Files:**
- Modify: `next.config.ts`

- [ ] **Step 1: Create merged version**

Run: `cat > next.config.ts << 'EOF'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    qualities: [25, 50, 75, 90],
  },
  async rewrites() {
    return [
      {
        source: "/rss",
        destination: "/rss.xml",
      },
      {
        source: "/registry/rss",
        destination: "/components/rss.xml",
      },
    ];
  },
};

export default nextConfig;
EOF`
Expected: File written

- [ ] **Step 2: Stage the file**

Run: `git add next.config.ts`
Expected: No output (success)

- [ ] **Step 3: Verify conflict resolved**

Run: `git diff --name-status --diff-filter=U | grep next.config`
Expected: No output (conflict resolved)

---

### Task 3: Resolve src/components/site-header.tsx Conflict

**Files:**
- Modify: `src/components/site-header.tsx`

- [ ] **Step 1: Keep our version (HEAD)**

Run: `git checkout --ours src/components/site-header.tsx`
Expected: No output (success)

- [ ] **Step 2: Stage the file**

Run: `git add src/components/site-header.tsx`
Expected: No output (success)

- [ ] **Step 3: Verify conflict resolved**

Run: `git diff --name-status --diff-filter=U | grep "site-header"`
Expected: No output (conflict resolved)

---

### Task 4: Resolve src/components/site-footer.tsx Conflict

**Files:**
- Modify: `src/components/site-footer.tsx`

- [ ] **Step 1: Keep our version (HEAD)**

Run: `git checkout --ours src/components/site-footer.tsx`
Expected: No output (success)

- [ ] **Step 2: Stage the file**

Run: `git add src/components/site-footer.tsx`
Expected: No output (success)

- [ ] **Step 3: Verify conflict resolved**

Run: `git diff --name-status --diff-filter=U | grep "site-footer"`
Expected: No output (conflict resolved)

---

### Task 5: Resolve src/config/metadata.ts Conflict

**Files:**
- Modify: `src/config/metadata.ts`

- [ ] **Step 1: Keep our version (HEAD)**

Run: `git checkout --ours src/config/metadata.ts`
Expected: No output (success)

- [ ] **Step 2: Stage the file**

Run: `git add src/config/metadata.ts`
Expected: No output (success)

- [ ] **Step 3: Verify conflict resolved**

Run: `git diff --name-status --diff-filter=U | grep metadata.ts`
Expected: No output (conflict resolved)

---

### Task 6: Resolve src/app/(app)/(docs)/blog/page.tsx Conflict

**Files:**
- Modify: `src/app/(app)/(docs)/blog/page.tsx`

- [ ] **Step 1: Keep our version (HEAD)**

Run: `git checkout --ours "src/app/(app)/(docs)/blog/page.tsx"`
Expected: No output (success)

- [ ] **Step 2: Stage the file**

Run: `git add "src/app/(app)/(docs)/blog/page.tsx"`
Expected: No output (success)

- [ ] **Step 3: Verify conflict resolved**

Run: `git diff --name-status --diff-filter=U | grep "blog/page"`
Expected: No output (conflict resolved)

---

### Task 7: Handle Deleted Files (Keep Deleted)

**Files:**
- Already deleted: `src/app/icon.png`, `src/components/blog/unmounting-demo.tsx`, `src/features/doc/content/the-hidden-mechanics-of-smooth-component-unmounting.mdx`, `src/features/doc/content/the-story-behind-draftlogo.mdx`

- [ ] **Step 1: Verify these files are marked as deleted by us**

Run: `git status | grep -E "deleted by us"`
Expected: List of deleted files

- [ ] **Step 2: Stage the deletions**

Run: `git add src/app/icon.png src/components/blog/unmounting-demo.tsx src/features/doc/content/the-hidden-mechanics-of-smooth-component-unmounting.mdx src/features/doc/content/the-story-behind-draftlogo.mdx`
Expected: No output (success) or "fatal: pathspec..." if some files don't exist (OK)

---

### Task 8: Verify All Conflicts Resolved

- [ ] **Step 1: Check remaining conflicts**

Run: `git diff --name-status --diff-filter=U`
Expected: No output (all conflicts resolved)

- [ ] **Step 2: Check git status**

Run: `git status`
Expected: Should show files ready to commit (no "unmerged paths")

- [ ] **Step 3: Complete the merge**

Run: `git commit -m "Merge: resolve conflicts keeping HEAD versions"`
Expected: Commit created

---

## Summary

After completing all tasks:
- All 6 conflicted files resolved (5 with --ours, 1 merged)
- Deleted files remain deleted
- Merge commit created
- Branch is ready for push

Run final verification:
```bash
git log --oneline -1
git status
```
