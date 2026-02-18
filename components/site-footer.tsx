export default function SiteFooter() {
  return (
    <footer className="mt-10 w-full px-5">
      <div className="border-t py-8">
        <p className="text-center font-geist-mono text-sm text-balance text-muted-foreground">
          Built by{" "}
          <a
            className="text-foreground underline-offset-4 hover:underline"
            href="https://x.com/ratneshchipre"
            target="_blank"
            rel="noopener"
          >
            Ratnesh
          </a>
          . The source code is available on{" "}
          <a
            className="text-foreground underline-offset-4 hover:underline"
            href="https://github.com/ratneshchipre"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
