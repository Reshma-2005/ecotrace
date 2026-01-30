import { AdminWrapper } from "./componens/adminWrapper";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminWrapper>{children}</AdminWrapper>
    </>
  );
}
