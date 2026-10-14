import { LockKeyhole, Send, ShieldCheck } from "lucide-react";

export function SentinelPreview() {
  return (
    <div
      className="sentinel-preview"
      aria-label="Illustration of Sentinel’s federated learning architecture"
    >
      <div className="preview-eyebrow">
        <span>
          <ShieldCheck size={14} /> SENTINEL
        </span>
        <span>DECENTRALIZED BY DESIGN</span>
      </div>
      <div className="federated-map">
        <svg viewBox="0 0 480 245" fill="none" aria-hidden="true">
          <g stroke="#78867a" strokeWidth="1" strokeDasharray="4 5">
            <path d="M90 64L240 126L390 64M90 191L240 126L390 191" />
          </g>
          <g fill="#a9c4a3">
            <circle cx="167" cy="96" r="3" />
            <circle cx="318" cy="96" r="3" />
            <circle cx="167" cy="158" r="3" />
            <circle cx="318" cy="158" r="3" />
          </g>
          <circle cx="240" cy="126" r="65" stroke="#465b4c" />
          <circle
            cx="240"
            cy="126"
            r="78"
            stroke="#3c4b40"
            strokeDasharray="2 7"
          />
        </svg>
        <div className="global-model">
          <ShieldCheck size={28} strokeWidth={1.3} />
          <strong>Global model</strong>
          <span>SHARED INTELLIGENCE</span>
        </div>
        {["01", "02", "03", "04"].map((n, i) => (
          <div className={`gateway gateway-${i}`} key={n}>
            <LockKeyhole size={13} />
            <span>Gateway {n}</span>
            <small>DATA STAYS LOCAL</small>
          </div>
        ))}
      </div>
      <div className="sentinel-bottom">
        <span>
          <i /> Local data. Collective learning.
        </span>
        <span>PPO + A2C</span>
      </div>
    </div>
  );
}

export function ChatPreview() {
  return (
    <div
      className="chat-preview"
      aria-label="Illustrative real-time chat interface with sample messages"
    >
      <div className="chat-app">
        <aside className="chat-sidebar" aria-hidden="true">
          <span className="chat-logo">co.</span>
          <span className="chat-avatar selected">J</span>
          <span className="chat-avatar">M</span>
          <span className="chat-avatar">R</span>
          <span className="chat-sidebar-bottom">+</span>
        </aside>
        <div className="chat-conversation">
          <div className="chat-person">
            <span className="chat-person-avatar">J</span>
            <div>
              <strong>Jamie</strong>
              <span>
                <i /> Online now
              </span>
            </div>
            <span className="chat-ellipsis" aria-hidden="true">
              •••
            </span>
          </div>
          <div className="chat-messages">
            <span className="chat-day">A LITTLE CONVERSATION</span>
            <p className="chat-bubble incoming">
              Hey! What are you building? <span>10:42</span>
            </p>
            <p className="chat-bubble outgoing">
              Something that brings people
              <br />a little closer. <span>10:42 ✓✓</span>
            </p>
            <p className="chat-bubble incoming">
              I’m in. Let’s make it happen. <span>10:43</span>
            </p>
          </div>
          <div className="chat-input" aria-hidden="true">
            <span>Good things start with a hello...</span>
            <span className="chat-send">
              <Send size={13} />
            </span>
          </div>
        </div>
      </div>
      <span className="chat-caption mono">
        ILLUSTRATIVE INTERFACE · REAL-TIME CONNECTION
      </span>
    </div>
  );
}
