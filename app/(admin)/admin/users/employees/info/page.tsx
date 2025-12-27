"use client";

export default function EmployeeInfoPage() {
  return (
    <div className="min-h-screen bg-[var(--admin-bg)] text-[var(--admin-text)]">
      <div className="max-w-[1600px] mx-auto p-4 md:p-8">
        <h1 className="text-2xl font-bold mb-6">Employee Information</h1>
        <div className="bg-[var(--admin-card-bg)] border-[var(--admin-border)] rounded-[2rem] p-8">
          <p className="text-[var(--admin-text-muted)]">
            Detailed employee profile and performance metrics will be displayed
            here.
          </p>
        </div>
      </div>
    </div>
  );
}
