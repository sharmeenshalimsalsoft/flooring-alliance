type Props = {
  context?: string;
};

/** Consistent “UI preview only” strip for portal/admin demos. */
export default function DemoBanner({
  context = "All figures and members are fictional sample data.",
}: Props) {
  return (
    <div className="app-demo-banner" role="note">
      <p>
        <strong>Demo preview</strong> — {context}
      </p>
      <span className="app-chip">UI only</span>
    </div>
  );
}
