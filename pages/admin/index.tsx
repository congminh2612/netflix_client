import LayoutAdmin from "@/components/admin/layouts/LayoutAdmin";
import ProtectedRoute from "@/features/auth/ProtectedRoute";
import React from "react";

const index = () => {
  return (
    <ProtectedRoute>
      <LayoutAdmin></LayoutAdmin>
    </ProtectedRoute>
  );
};

export default index;
