export function PVStudioIcon() {
  return (
    <span className="pv-workspace-icon" aria-hidden="true">
      PV
    </span>
  );
}

export function StudioLogo({ title }) {
  return (
    <div className="pv-studio-logo" aria-label={title}>
      <span className="pv-studio-logo__mark">PV</span>
      <span className="pv-studio-logo__copy">
        <strong>PV Creationz</strong>
        <small>Creative Control Center</small>
      </span>
    </div>
  );
}
