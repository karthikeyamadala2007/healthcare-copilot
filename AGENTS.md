<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use a shared health application shell and individual content routes so navigation and page metadata remain consistent.
- Store real health records in owner-scoped Cloud tables and private storage; keep illustrative sample records separate from personal records.
- Run medical OCR through an authenticated streaming server route with strict structured extraction and FHIR-style exports; never expose model credentials to the browser.
