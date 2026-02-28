// import { NextResponse } from "next/server";

// export function middleware(request) {
//   const host = request.headers.get("host");

//   if (
//     host !== "mrdates.in" &&
//     host !== "www.mrdates.in"
//   ) {
//     return new NextResponse("Forbidden", { status: 403 });
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: "/:path*",
// };