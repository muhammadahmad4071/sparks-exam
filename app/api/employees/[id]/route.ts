import { EmployeeTable, db } from "@/lib/drizzle";
import { NextRequest } from "next/server";
import { eq } from "drizzle-orm";

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  try {
    const res = await db
      .delete(EmployeeTable)
      .where(eq(EmployeeTable.id, params.id));
    if (res.rowCount > 0) {
      return Response.json({
        success: "Record Deleted Successfully",
        data: res.rowCount,
      });
    } else {
      return Response.json({
        error: "Record Not Found",
      });
    }
  } catch (error) {
    console.log("error", error);
    return Response.json({
      error: error,
    });
  }
};
