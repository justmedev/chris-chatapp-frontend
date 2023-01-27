// eslint-disable-next-line import/no-extraneous-dependencies
import { feathers } from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';
import authentication from '@feathersjs/authentication-client';
import config from '../config';
import { DatabaseEntry, User } from "@/types/generic";

const socket = io(config.backend);
const feathersClient = feathers();

// Set up Socket.io client with the socket
feathersClient.configure(socketio(socket));
feathersClient.configure(authentication());

export async function getUser(): Promise<User | null> {
    const authObj = await feathersClient.get('authentication');
    if (authObj) return authObj.user;
    return null;
}

export async function useUser(): Promise<User> {
    const u = await getUser();
    if (u === null) throw new Error("Unable to require user. Did you mean to call the non-nullsafe getUser()?");
    return u;
}

export interface JWTPayload {
    strategy?: 'local' | 'jwt';
    username: string;
    email: string;
    password: string;
}

export interface AuthenticationObject {
    accessToken: string;
    user: DatabaseEntry<User>;
    authentication: JWTPayload;
}

export default feathersClient;
