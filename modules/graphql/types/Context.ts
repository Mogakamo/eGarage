import { Claims, getSession } from "@auth0/nextjs-auth0";
import { PrismaClient } from "@prisma/client";
import prisma from "../lib/prisma";
import { decodeAuthHeader, AuthTokenPayload } from "../utils/auth";


export type Context = {
    user?: Claims;
    accessToken?: string;
    prisma: PrismaClient;
}

export async function createContext({req, res}): Promise<Context> {
    const session = getSession(req, res);
        
    if (!session) return { prisma };

    const {user, accessToken} = session;

    return {
        user,
        prisma,
        accessToken
    }
}