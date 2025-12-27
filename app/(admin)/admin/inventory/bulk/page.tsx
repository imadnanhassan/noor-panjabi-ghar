"use client";

export default function BulkOperationsPage() {
  return (
    <div className="min-h-screen bg-[var(--admin-bg)] text-[var(--admin-text)]">
      <div className="max-w-[1600px] mx-auto p-4 md:p-8">
        <h1 className="text-2xl font-bold mb-6">Bulk Operations</h1>
        <div className="bg-[var(--admin-card-bg)] border-[var(--admin-border)] rounded-[2rem] p-8">
          <p className="text-[var(--admin-text-muted)]">
            Bulk import/export and mass update operations will be implemented
            here.
          </p>
        </div>
      </div>
    </div>
  );
}
