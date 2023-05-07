import LayoutAdmin from "@/components/admin/layouts/LayoutAdmin";
import TextInput from "@/components/input/TextInput";
import ProtectedRoute from "@/features/auth/ProtectedRoute";
import React from "react";

const movie = () => {
  return (
    <ProtectedRoute>
      <LayoutAdmin>
        <h1>Movie</h1>
      </LayoutAdmin>
    </ProtectedRoute>
  );
};

export default movie;
