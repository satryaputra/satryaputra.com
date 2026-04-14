import Link from "next/link";

import CopyButton from "@/components/copy-button";

export default function Overview() {
  return (
    <section className="font-geist-sans">
      <div>
        <p className="text-muted-foreground">
          Curiosity about how systems work brought me here. <br /> <br />
          Currently, I work as a Backend Engineer at{" "}
          <Link
            href="https://www.unitedtractors.com/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:underline"
            aria-label="Visit United Tractors"
          >
            United Tractors
          </Link>
          , building resilient systems integrated with enterprise platforms such
          as SAP, Salesforce, and Microsoft.
          <br /> <br /> I enjoy designing scalable solutions, shipping
          improvements efficiently, and researching new technologies to drive
          better engineering standards.
        </p>
      </div>
    </section>
  );
}
