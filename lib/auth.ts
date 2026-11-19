import {SignJWT,jwtVerify} from "jose";import {cookies} from "next/headers";
const name="bidrush_admin_session";function secret(){const v=process.env.ADMIN_SESSION_SECRET;if(!v||v.length<32)throw new Error("Missing admin session secret");return new TextEncoder().encode(v)}
export async function makeSession(){return new SignJWT({role:"admin"}).setProtectedHeader({alg:"HS256"}).setIssuedAt().setExpirationTime("8h").sign(secret())}
export async function isAdmin(){try{const c=await cookies(),t=c.get(name)?.value;if(!t)return false;const {payload}=await jwtVerify(t,secret());return payload.role==="admin"}catch{return false}}
export const cookieName=name;