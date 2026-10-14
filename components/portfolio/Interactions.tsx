"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Check,
  CheckCheck,
  Copy,
  Pause,
  Play,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { site } from "@/data/site";

export function OrbitalControl({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  return (
    <div className="orbital" data-paused={paused}>
      {children}
      <button
        className="motion-control"
        onClick={() => setPaused(!paused)}
        type="button"
        aria-label={
          paused ? "Play orbital animation" : "Pause orbital animation"
        }
        aria-pressed={paused}
      >
        {paused ? (
          <Play size={12} aria-hidden="true" />
        ) : (
          <Pause size={12} aria-hidden="true" />
        )}
        <span>{paused ? "PLAY" : "PAUSE"}</span>
      </button>
    </div>
  );
}

export function CopyEmail() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );
  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setStatus("idle"), 5000);
  }
  return (
    <div className="copy-email-wrap">
      <button
        className="copy-email"
        type="button"
        onClick={copy}
        aria-label="Copy email address"
      >
        {status === "copied" ? <Check size={18} /> : <Copy size={18} />}
      </button>
      <span role="status" className="copy-status">
        {status === "copied"
          ? "Email copied!"
          : status === "failed"
            ? "Select the email address to copy it."
            : ""}
      </span>
    </div>
  );
}

export function CodeSensePreview() {
  const [view, setView] = useState<"review" | "evaluation">("review");
  return (
    <div className="code-window">
      <div className="window-bar">
        <div className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span>
          <Terminal size={12} aria-hidden="true" /> codesense / workspace
        </span>
        <span className="window-version">v.01</span>
      </div>
      <div className="code-toolbar">
        <div className="code-brand">
          <span className="code-brand-icon">c/</span>CodeSense
        </div>
        <div
          className="preview-switch"
          role="group"
          aria-label="CodeSense preview view"
        >
          <button
            type="button"
            aria-pressed={view === "review"}
            onClick={() => setView("review")}
          >
            Review
          </button>
          <button
            type="button"
            aria-pressed={view === "evaluation"}
            onClick={() => setView("evaluation")}
          >
            Evaluation
          </button>
        </div>
      </div>
      <div className="preview-content" aria-live="polite">
        {view === "review" ? (
          <>
            <div className="file-tab">
              <span className="ts-icon">TS</span> utils/getFirst.ts{" "}
              <span className="file-tag">1 issue found</span>
            </div>
            <div className="code-lines">
              <div>
                <span>01</span>
                <code>
                  <b>function</b> getFirst(items) {"{"}
                </code>
              </div>
              <div className="code-line-removed">
                <span>02</span>
                <code>
                  − <b>return</b> items[0].name;
                </code>
              </div>
              <div className="code-line-added">
                <span>03</span>
                <code>
                  + <b>return</b> items[0]?.name ?? <em>null</em>;
                </code>
              </div>
              <div>
                <span>04</span>
                <code>{"}"}</code>
              </div>
            </div>
            <div className="review-note">
              <span className="review-spark">✳</span>
              <div>
                <strong>A small fix. A safer function.</strong>
                <p>Handle an empty array before accessing its first item.</p>
              </div>
              <CheckCheck size={18} aria-hidden="true" />
            </div>
          </>
        ) : (
          <div className="evaluation-preview">
            <div className="evaluation-title">
              <ShieldCheck size={25} />
              <div>
                <strong>Good answers need evidence.</strong>
                <p>Two layers. One review.</p>
              </div>
            </div>
            <div className="evaluation-row">
              <span>01 / LLM-as-judge</span>
              <strong>Accuracy · clarity · completeness</strong>
            </div>
            <div className="evaluation-row">
              <span>02 / Rule-based checks</span>
              <strong>
                <Check size={13} /> Empty-array case handled
              </strong>
            </div>
            <p className="evaluation-footnote">
              Judge the reasoning. Verify the proposed change.
            </p>
          </div>
        )}
      </div>
      <div className="code-status">
        <span>
          <span className="status-dot" /> Two-layer evaluation
        </span>
        <span>ILLUSTRATIVE INTERFACE</span>
      </div>
    </div>
  );
}
