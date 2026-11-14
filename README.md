# Defined Dental Lounge

Website for Defined Dental Lounge, hosted on GitHub Pages.

**Live website:** [defineddentallounge.com](https://defineddentallounge.com/)

## Request a website change

No coding knowledge is needed to give feedback.

1. Sign in to GitHub and [create a new issue](https://github.com/drakanksha-dental-lounge/web/issues/new).
2. Give it a short title, such as “Change the homepage photo.”
3. Describe which part of the website should change and what you want instead. Include replacement wording if you have it. Drag photos or supported video files into the description, or use the attachment button.
4. Submit the issue and share its link with the person coordinating the website updates.

For example:

> Please replace the main homepage photo with the attached image and change the heading to “Your smile, thoughtfully cared for.”

Use a separate issue for each distinct request so it is easy to track.

## Review changes before publishing

**New issue → separate branch → changes and checks → preview → explicit approval → merge to `main` → live deployment.**

1. Read the issue and its attachments, then create a branch from the latest `main`, such as `issue/12-update-homepage-photo`.
2. Make the requested changes on that branch and run the checks appropriate to the change.
3. Open a pull request into `main`, reference the issue, and provide a preview for review. A pull request is a proposal to bring those changes into the live version.
4. Collect feedback and make revisions on the same branch. Refresh the preview when the changes are ready for another review.
5. Wait for explicit approval of the reviewed changes before merging into `main` or publishing to production. Creating an issue or asking for a preview is not approval to publish.
6. After approval, merge into `main`, check that the GitHub Pages deployment succeeds, and verify the live website.

The live website stays on its existing version while changes are being prepared and reviewed. For documentation-only changes, the pull request's rendered documentation can be used for review.

## Previews

A shareable preview link is preferred so the website owner can review changes on her phone. Separate preview hosting, such as Netlify or Vercel, has not been configured yet. Until it is available, use a workspace/browser preview and clearly explain how to access it.

Keep previews separate from the production deployment. Running the Pages workflow manually is a production action, not a preview; use it only with `main` selected and after approval.

## Development

The frontend uses React, Vite, and TypeScript in a pnpm workspace. Use Node.js 24 and pnpm 10.30.0, matching the deployment workflow.

Run these commands from the repository root:

```sh
pnpm --filter @workspace/defined-dental-lounge... install --frozen-lockfile
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/defined-dental-lounge dev
```

The local website is available at `http://localhost:5173`. This starts a development preview; it does not publish to the live website.

To check the production build:

```sh
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/defined-dental-lounge build
```

The frontend source is in `artifacts/defined-dental-lounge`. Built files are written to `artifacts/defined-dental-lounge/dist/public`.

## Production deployment

The [GitHub Pages workflow](.github/workflows/deploy-pages.yml) builds and deploys pushes to `main`. Keep the repository's Pages source set to **GitHub Actions**.

The workflow reads the website's base path from GitHub Pages. If the custom domain changes, rerun the workflow on `main` after the domain is saved so JavaScript, CSS, and images use the correct paths.

## Feedback automation

Creating an issue does not currently trigger work automatically. An hourly feedback check has been discussed but has not been scheduled.

If a feedback automation is added later, it must follow the same branch, preview, and approval process. It must wait for explicit approval before merging or publishing changes.
